const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const verifySid = process.env.TWILIO_VERIFY_SID;

const client = require("twilio")(accountSid, authToken, {
  lazyLoading: true,
});

const sendOTP = async (req, res, next) => {
  const { phone } = req.body;
  try {
    const otpRes = await client.verify
      .services(verifySid)
      .verifications.create({
        to: phone,
        channel: "sms",
      });
    res.status(200).send(`OTP send successfully!: ${JSON.stringify(otpRes)}`);
  } catch (error) {
    res
      .status(error?.status || 404)
      .send(error?.message || "Something went wrong(");
  }
};
const verifyOTP = async (req, res, next) => {
  const { phone, otp } = req.body;
  try {
    const verifiedRes = await client.verify
      .services(verifySid)
      .verificationChecks.create({
        to: phone,
        code: otp,
      });
    res
      .status(200)
      .send(`OTP verrified successfully!: ${JSON.stringify(verifiedRes)}`);
  } catch (error) {
    res
      .status(error?.status || 404)
      .send(error?.message || "Something went wrong(");
  }
};
module.exports = {
  verifyOTP,
  sendOTP,
};
