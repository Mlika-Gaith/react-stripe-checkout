import { useNavigate } from "react-router-dom";

type Image = {
  src: string;
  alt: string;
};

type Props = {
  title: string;
  description: string;
  images: Image[];
  price?: number;
};

const Product = (props: Props) => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/checkout");
  };
  return (
    <div className="container p-0 m-10 border-l border-b border-r rounded grid grid-cols-3">
      <div className="col-span-3 flex items-center justify-center">
        <img src={props.images[0].src} alt={props.images[0].alt} />
      </div>

      <div className="col-span-2">
        <h1 className="text-4xl font-bold border-b p-6">{props.title}</h1>
        <p className="text-gray-900 p-6">{props.description}</p>
      </div>
      <div className="border-l p-6 flex flex-col">
        <button
          className="bg-indigo-400 text-white hover:bg-indigo-500 font-bold rounded shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] focus:outline-none border-2 border-gray-900 hover:border-gray-900"
          onClick={handleNavigation}
        >
          Buy now
        </button>
      </div>
    </div>
  );
};

export default Product;
