import React from "react";
import { Outlet } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import bg from "../assets/home/bg.jpg";

export const Root: React.FC = () => {
  return (
    <div
      className="w-[100vw] h-[100vh] bg-cover"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <ScrollRestoration />
      <Outlet />
    </div>
  );
};
