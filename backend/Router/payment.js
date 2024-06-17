const express = require('express');
const Razorpay = require('razorpay');
const crypto = require('crypto');
const Key_secret='oGVluURNJR2teh0ouFura4JB';


const router = express.Router();
require('dotenv').config(); 
console.log("testing")

router.get('/check',async (req, res) =>{
    
     try{
        return res.status(200).json({ message:"verified successfully" });
     }
     catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
} )
router.post('/order', async (req, res) => {
    try {
        const { amount } = req.body;
        if (!amount) {
            return res.status(400).json({ message: 'Amount is required' });
        }

        const instance = new Razorpay({
            key_id: 'rzp_test_QNnWaW9MEzuYvR',
            key_secret: 'oGVluURNJR2teh0ouFura4JB',
        });

        const options = {
            amount: amount, // amount is already in the smallest currency unit
            currency: 'INR',
            receipt: crypto.randomBytes(10).toString('hex'),
        };

        instance.orders.create(options, (err, order) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: 'Something went wrong' });
            }
            res.status(200).json({ data: order });
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.post('/verify', async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
        const sign = razorpay_order_id + '|' + razorpay_payment_id;
        const expectedSign = crypto
            .createHmac('sha256', Key_secret)
            .update(sign.toString())
            .digest('hex');

        if (razorpay_signature === expectedSign) {
            return res.status(200).json({ message: 'Payment verified successfully' });
        } else {
            return res.status(400).json({ message: 'Invalid signature sent' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;