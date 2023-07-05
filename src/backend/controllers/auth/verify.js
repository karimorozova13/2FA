const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const verifySid = process.env.TWILIO_VERIFY_SID;

const client = require("twilio")(accountSid, authToken);

const { basedir } = global;
const { User } = require(`${basedir}/models/user`);

const verifyByOtp = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  console.log(user.phone);

  if (user) {
    client.verify.v2
      .services(verifySid)
      .verifications.create({
        to: user.phone,
        channel: "sms",
      })
      .then((verification) => console.log(verification))
      .then(() => {
        const readline = require("readline").createInterface({
          input: process.stdin,
          output: process.stdout,
        });
        readline.question("Please enter the OTP:", (otpCode) => {
          client.verify.v2
            .services(verifySid)
            .verificationChecks.create({
              to: user.phone,
              from: "Kari",
              body: "Use this one time passcode to verify your profile",
              code: otpCode,
            })
            .then((verification_check) =>
              console.log(verification_check.status)
            )
            .then(() => readline.close());
        });
      });
  }
  return res.status(201).json({
    phone: user.phone,
    email: user.email,
  });
};
module.exports = verifyByOtp;
