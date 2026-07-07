const { Resend } = require("resend");

exports.handler = async (event) => {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = JSON.parse(event.body || "{}");

    await resend.emails.send({
      from: process.env.FORM_FROM_EMAIL,
      to: process.env.FORM_TO_EMAIL,
      subject: "New website enquiry",
      text: JSON.stringify(body, null, 2),
    });

    return { statusCode: 200, body: JSON.stringify({success:true}) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({error:error.message}) };
  }
};
