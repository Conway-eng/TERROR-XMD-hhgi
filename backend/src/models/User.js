const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
  coins: { type: Number, default: 0 },
  lastClaimed: Date,
  referrals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  isAdmin: { type: Boolean, default: false },
});

module.exports = mongoose.model('User', userSchema);
