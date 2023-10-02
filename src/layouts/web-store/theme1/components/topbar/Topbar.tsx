import React from "react";

function Topbar() {
  return (
    <div className="w-full h-[60px] bg-primary-blue-dark flex items-center justify-center">
      <h5 className="font-medium text-[13px] md:text-[17px] text-white">
        {/* Atlan is now a Leader in three G2 categories! 🏆 🎊 Read more */}
        🎉Limited offer: Use WELCOME20 & save 20% on your order.
      </h5>
    </div>
  );
}

export default Topbar;
