import React from "react";
import { Outlet } from "react-router-dom";

const CareersLayout = () => {
  return (
    <div className="careers-layout">
      <h2>Careers</h2>
      <p>Ut commodo esse tempor aliquip cillum non ex adipisicing.</p>
      <Outlet />
    </div>
  );
};

export default CareersLayout;
