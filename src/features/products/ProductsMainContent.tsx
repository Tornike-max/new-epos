import { Image } from "@nextui-org/react";
import ProductsMain from "./ProductsMain";
import { useNavigate } from "react-router-dom";
import { ProductType } from "../../types/types";

const ProductsMainContent = ({ product }: { product: ProductType }) => {
  const navigate = useNavigate();

  const handleNavigateToDescription = (id: number) => {
    if (!id) throw new Error("Something went wrong");

    navigate(`/products/description/${id}`);
  };

  return (
    <ProductsMain>
      <div className="w-full px-4">
        <div className="relative overflow-hidden group">
          <Image
            isBlurred
            width={900}
            onClick={() => handleNavigateToDescription(product.id)}
            height={500}
            alt={product.title}
            fallbackSrc="https://via.placeholder.com"
            src={`${product.image}`}
            className="w-full h-full bg-cover cursor-pointer group-hover:z-50 transition-transform duration-500 transform scale-100 hover:scale-110"
          />

          <div className="absolute rounded-xl inset-0 bg-black bg-opacity-40 transition-opacity duration-500 z-10 opacity-100 hover:opacity-0" />
        </div>
      </div>
    </ProductsMain>
  );
};

export default ProductsMainContent;
