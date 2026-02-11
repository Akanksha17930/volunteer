import express from "express";
import crypto from "crypto";

const router = express.Router();

router.post(
  "/nowpayments/webhook",
  express.json({ type: "*/*" }),
  (req, res) => {

    const signature = req.headers["x-nowpayments-sig"];
    const payload = JSON.stringify(req.body);

    const generatedSignature = crypto
      .createHmac("sha512", process.env.NOWPAYMENTS_IPN_SECRET)
      .update(payload)
      .digest("hex");

    if (generatedSignature !== signature) {
      return res.status(401).send("Invalid signature");
    }

    const paymentStatus = req.body.payment_status;

    if (paymentStatus === "finished") {
      console.log("Payment Successful:", req.body.payment_id);
      // You can store in MongoDB here later
    }

    res.status(200).send("OK");
  }
);

export default router;