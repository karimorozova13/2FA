const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const verifySid = process.env.TWILIO_VERIFY_SID;

const client = require("twilio")(accountSid, authToken, {
  lazyLoading: true,
});

const sendOTP = async (req, res, next) => {
  const { phone } = req.body;
  console.log(req.body);
  try {
    console.log("here");
    const otpRes = await client.verify.v2
      .services(verifySid)
      .verifications.create({
        to: phone,
        channel: "sms",
      });
    console.log(otpRes);

    return res
      .status(200)
      .send(`OTP send successfully!: ${JSON.stringify(otpRes)}`);
  } catch (error) {
    res
      .status(error?.status || 404)
      .send(error?.message || "Something went wrong(");
  }
};

module.exports = sendOTP;
