import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DASHBOARD_BG = "/cool-modern-bg.svg"; // Place a nice SVG or image in /public

export default function Dashboard() {
  const [coins, setCoins] = useState(0);
  const [timer, setTimer] = useState(30);
  const [canClaim, setCanClaim] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const t = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(t);
    } else {
      setCanClaim(true);
    }
  }, [timer]);

  const claimCoins = async () => {
    // Add "I joined" WhatsApp logic here before calling claim API.
    await axios.post('/api/user/claim', {}, { headers: { Authorization: `Bearer ${localStorage.token}` } });
    // fetch new coin balance, etc.
  };

  return (
    <div style={{ background: `url(${DASHBOARD_BG})`, minHeight: '100vh', backgroundSize: 'cover' }}>
      <div className="max-w-xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome to HACKLINK TECH.INC</h1>
        <div>
          <p>Coins: {coins}</p>
          {canClaim ? (
            <button className="btn btn-primary" onClick={claimCoins}>Claim 10 Coins (Join WhatsApp Channel First)</button>
          ) : (
            <p>Claim available in: {timer}s</p>
          )}
        </div>
      </div>
    </div>
  );
}
