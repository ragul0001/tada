// StepLayout.js
import React from "react";
import Stepper from "react-stepper-horizontal";

function StepLayout({ children }) {
  const steps = [
    { title: "Child Details" },
    { title: "Address" },
    { title: "Booking confirmation" },
  ];
  const activeStep = 0; // Assuming the first step is active initially
  return (
    <>
      <div className="container ">
        <div className="d-flex justify-content-center">
          <Stepper steps={steps} activeStep={activeStep} />
        </div>
        {children} {/* Render nested components */}
      </div>
    </>
  );
}

export default StepLayout;
