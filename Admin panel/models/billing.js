const mongoose = require('mongoose');

const billingSchema = new mongoose.Schema({
    creditCard: String,
    overviewPayChart: String,
    rateAdjustment: Number,
    driveOverride: Number,
    accountStatus: { type: Boolean, default: false },
    billingCycle: { type: Boolean, default: false },
    route: {
        surchargePercentage: Number,
        calculatedPercentage: Number,
        bookedPercentage: Number
    }
});

const Billing = mongoose.model('Billing', billingSchema);

module.exports = Billing;
