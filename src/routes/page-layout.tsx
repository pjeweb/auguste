import React from "react";
import { Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import { Page } from "../components/page";

export const PageLayout: React.FC = () => {
  return (
    <Page>
      <img src={logo} alt="Auguste" className="m-[1%] w-[20%] h-auto" />
      <Outlet />
    </Page>
  );
};
