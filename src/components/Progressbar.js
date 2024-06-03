import React from "react";
import { ProgressBar } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function Progressbar() {
  const steps = {
    "/": 1,
    "/form": 25,
    "/addcart": 50,
    "/checkout": 100,
  };
  const location = useLocation();
  const progress = steps[location.pathname] || 0;
  return (
    <>
      <ProgressBar
        now={progress}
        // label={`${progress}%`}
        className="sticky-top product-clr "
      />
    </>
  );
}

export default Progressbar;
