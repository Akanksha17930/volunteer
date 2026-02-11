import express from "express";
import axios from "axios";

const router = express.Router();

router.post("/checkout", async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount) {
      return res.status(400).json({
        success: false,
        message: "Amount is required",
      });
    }

    const response = await axios.post(
      "https://api.nowpayments.io/v1/invoice",
      {
        price_amount: amount,
        price_currency: "USD",
        pay_currency: "USDT",
        ipn_callback_url:
          "https://volunteer-1.onrender.com/api/v1/nowpayments/webhook",
        success_url: `${process.env.FRONTEND_URL}/success`,
        cancel_url: `${process.env.FRONTEND_URL}/cancel`,
        order_description: "Crypto Donation",
      },
      {
        headers: {
          "x-api-key": process.env.NOWPAYMENTS_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    res.status(200).json({
      success: true,
      invoice_url: response.data.invoice_url,
    });

  } catch (error) {
    console.error(error.response?.data || error.message);

    res.status(500).json({
      success: false,
      message: "Payment initiation failed",
    });
  }
});

export default router;