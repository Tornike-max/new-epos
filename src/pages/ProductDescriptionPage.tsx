import ProductDesc from "../features/products/description/ProductDesc";

const ProductDescriptionPage = () => {
  return (
    <div className="w-full flex items-center justify-center pb-10">
      <div className="w-full flex flex-col justify-center items-start px-0 py-0 sm:px-2 md:px-4 md:py-2 ">
        <ProductDesc />
      </div>
    </div>
  );
};

export default ProductDescriptionPage;
