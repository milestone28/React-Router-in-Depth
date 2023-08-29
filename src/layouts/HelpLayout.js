import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const HelpLayout = () => {
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <p>
        {" "}
        Voluptate aliqua sunt voluptate eiusmod pariatur irure et ex ut. Mollit
        fugiat ex pariatur laborum aliqua nisi quis reprehenderit ullamco
        consectetur anim sunt excepteur anim. Elit proident commodo veniam
        exercitation in dolore dolor fugiat. Eu labore et cillum dolore. Qui
        Lorem id commodo sit do velit deserunt cupidatat eu officia. Ullamco
        adipisicing nisi dolore Lorem sint. Aliquip exercitation dolor aliquip
        dolor eu Lorem ipsum anim nulla incididunt anim labore.{" "}
      </p>
      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default HelpLayout;
