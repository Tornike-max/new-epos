import { useParams } from "react-router-dom";
import ProductDescMain from "./ProductDescMain";
import { data } from "../../../constants/constant";
import { useToggleDarkMode } from "../../../context/useToggleDarkMode";

const ProductDesc = () => {
  const { id } = useParams();
  const { selected } = useToggleDarkMode();
  const productData = data.find((product) => product.id === Number(id));

  return (
    <div className="w-full flex justify-center items-start gap-4 sm:gap-6 flex-col px-4 sm:px-6 md:px-8 lg:px-10 py-6">
      <div
        className={` w-full flex flex-col items-start justify-center gap-4 px-2`}
      >
        <h1
          className={`font-bold text-lg sm:text-2xl ${
            selected === "dark" ? "text-slate-100" : "text-slate-800"
          }`}
        >
          Products
        </h1>
        {productData && <ProductDescMain productData={productData} />}
      </div>
    </div>
  );
};

export default ProductDesc;
