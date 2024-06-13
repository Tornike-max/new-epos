import ProductDescMain from "./ProductDescMain";
import { useToggleDarkMode } from "../../../context/useToggleDarkMode";
import { useGetSingleProduct } from "../../../hooks/useGetSingleProduct";
import Loading from "../../../ui/Loading";

const ProductDesc = () => {
  const { selected } = useToggleDarkMode();
  const { isProductPending, product, error } = useGetSingleProduct();

  if (isProductPending) return <Loading />;

  if (error)
    return (
      <div className="w-full flex justify-center items-center text-red">
        Error loading product data
      </div>
    );

  return (
    <div className="w-full flex justify-center items-start gap-4 sm:gap-6 flex-col px-4 sm:px-6 md:px-8 lg:px-10 py-6">
      <div
        className={`w-full flex flex-col items-start justify-center gap-4 px-2`}
      >
        <h1
          className={`font-bold text-lg sm:text-2xl ${
            selected === "dark" ? "text-slate-100" : "text-slate-800"
          }`}
        >
          Products
        </h1>
        {product ? (
          <ProductDescMain productData={product} />
        ) : (
          <div className="w-full flex justify-center items-center text-red">
            No Data!
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDesc;
