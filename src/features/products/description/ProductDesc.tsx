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
      <div className="w-full flex justify-center items-center text-red-500">
        Error loading product data
      </div>
    );

  return (
    <div className="w-full flex flex-col items-start justify-center gap-4 text-xl sm:text-3xl px-4 sm:px-6 md:px-8 lg:px-10">
      <h1
        className={`font-bold text-xl sm:text-3xl ${
          selected === "dark" ? "text-slate-100" : "text-slate-800"
        }`}
      >
        {product?.title}
      </h1>
      {product ? (
        <ProductDescMain productData={product} />
      ) : (
        <div className="w-full flex justify-center items-center text-red-500">
          No Data!
        </div>
      )}
    </div>
  );
};

export default ProductDesc;
