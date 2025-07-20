import React, { useState } from "react";

const TopBanner = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-black text-white py-2 px-4 text-center text-sm relative">
      <p>
        Sign up and get 20% off your first order.{" "}
        <a href="#" className="underline font-medium">
          Sign Up Now
        </a>
      </p>
      <button
        className="absolute right-4 top-2 text-white text-lg"
        onClick={() => setVisible(false)}
        aria-label="Close"
      >
        ×
      </button>
    </div>
  );
};

export default TopBanner;



