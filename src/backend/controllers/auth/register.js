const bcrypt = require("bcryptjs");
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const verifySid = process.env.TWILIO_VERIFY_SID;

const client = require("twilio")(accountSid, authToken);
const { basedir } = global;

const { User, schemas } = require(`${basedir}/models/user`);

const register = async (req, res) => {
  const { error } = schemas.register.validate(req.body);

  if (error) {
    return res.status(400).json(error.message);
  }

  const { email, password, phone } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    return res.status(409).json({ message: `${email} is already exist` });
  }
  client.verify.v2
    .services(verifySid)
    .verifications.create({
      to: req.body.phone,
      channel: "sms",
    })
    .then((verification) => console.log(verification.status));
  // const hashPassword = await bcrypt.hash(password, 10);

  // const result = await User.create({
  //   email,
  //   phone,
  //   password: hashPassword,
  // });

  return res.status(201).json({
    phone: result.phone,
    email: result.email,
  });
};

module.exports = register;
