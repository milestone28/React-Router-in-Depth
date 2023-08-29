import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Page not found!</h2>
      <p>
        Ipsum laborum cupidatat enim deserunt cillum irure velit cillum elit
        aliquip id. Amet labore nisi amet elit incididunt duis magna magna sint
        irure culpa in. Aliquip ut cillum cillum duis quis aute. Pariatur duis
        consequat est qui qui velit deserunt sit ea quis id sunt. Adipisicing
        ipsum qui anim occaecat cillum.
      </p>
      <p>
        Go to <Link to="/">Home Page</Link>
      </p>
    </div>
  );
};

export default NotFound;
