import express from "express";

const router = express.Router();

router.post("/checkout", (req, res) => {
  const { amount } = req.body;

  if (!amount) {
    return res.status(400).json({
      success: false,
      message: "Amount is required",
    });
  }

  res.status(200).json({
    success: true,
    message: "Checkout successful",
    amount,
  });
});

export default router;