import React, { useState, useEffect } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: any) => {
    setPosition({ x: event.clientX - 10, y: event.clientY - 10 });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      style={{ position: "absolute", top: position.y, left: position.x }}
      className="w-5 h-5 bg-red-500 rounded-full z-[999999999] pointer-events-none duration-100 ease-linear"
    ></div>
  );
};

export default Cursor;
