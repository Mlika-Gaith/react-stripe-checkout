import React from "react";

type Props = {};

const Success = (props: Props) => {
  return (
    <div className="border rounded px-6 py-8 flex-col flex mt-8 items-start h-min container">
      <h1 className="text-4xl font-bold">Your Order Confirmation.</h1>
      <p className="text-lg pt-2 font-light">
        You will receive an email with your order shortly.
      </p>
    </div>
  );
};

export default Success;
