import React from "react";
import { Product } from "../types";

const ProductCard = (props: Product) => {
  return (
    <div className="border rounded px-6 py-8 flex items-center h-min">
      <div>
        <img
          className="w-[800px] h-[250px] object-contain"
          src={props.image}
          alt={`${props.title} image`}
        />
      </div>
      <div className="flex-grow flex flex-col">
        <div className="pl-4">
          <h3 className="text-lg font-bold">{props.title}</h3>
          <p className="text-gray-900 text-justify">{props.description}</p>
        </div>
      </div>
      <div className="self-start p-2 w-[250px]">
        <p className="text-gray-800 font-semibold">{props.price}$</p>
      </div>
    </div>
  );
};

export default ProductCard;
