import React from "react";

type Props = {
  title: string;
};

const Header = (props: Props) => {
  return (
    <div className="px-2 py-4 border-b">
      <div className="container">
        <p className="text-3xl font-bold text-black">{props.title}</p>
      </div>
    </div>
  );
};

export default Header;
