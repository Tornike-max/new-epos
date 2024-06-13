import { Divider, Image, useDisclosure } from "@nextui-org/react";
import {
  HiOutlineDocumentArrowDown,
  HiOutlineVideoCamera,
} from "react-icons/hi2";
import { Link } from "react-router-dom";
import { ProductType } from "../../../types/types";
import ModalComponent from "../../../ui/ModalComponent";
import { useToggleSidebar } from "../../../context/useToggleSidebar";
import { useToggleDarkMode } from "../../../context/useToggleDarkMode";

const ProductDescMain = ({ productData }: { productData: ProductType }) => {
  const { expanded } = useToggleSidebar();
  const { selected } = useToggleDarkMode();
  const { onOpen, isOpen, onOpenChange } = useDisclosure();

  const textColor = selected === "dark" ? "text-gray-200" : "text-gray-900";
  const secondaryTextColor =
    selected === "dark" ? "text-gray-400" : "text-gray-600";
  const cardBackground = selected === "dark" ? "bg-gray-800" : "bg-white";
  const cardShadow =
    selected === "dark"
      ? "shadow-lg shadow-gray-900"
      : "shadow-lg shadow-gray-200";

  return (
    <div className="w-full flex flex-col justify-center items-start gap-4 p-4">
      <div className={`${cardBackground} ${cardShadow} rounded-lg p-6 w-full`}>
        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-start gap-4">
          <div className="w-full max-w-xs">
            <Image
              isZoomed
              fallbackSrc="https://via.placeholder.com"
              width={300}
              height={200}
              alt={productData.title}
              src={productData.image}
              className="object-cover rounded-md"
            />
          </div>
          <div className="max-w-[500px] w-full flex flex-col items-start justify-start">
            <h3
              className={`text-lg sm:text-2xl font-semibold pb-2 ${textColor}`}
            >
              {productData.title}
            </h3>
            <p
              className={`w-full flex items-center gap-4 ${secondaryTextColor}`}
            >
              <span>Release Date: </span>
              <span>{productData.release}</span>
            </p>
            <p
              className={`w-full flex items-center gap-4 ${secondaryTextColor}`}
            >
              <span>Genre: </span>
              <span>{productData.genre}</span>
            </p>
            <div className="w-full py-2">
              <button
                onClick={onOpen}
                className="px-6 py-2 flex items-center gap-2 font-medium bg-indigo-500 text-white w-fit transition-all transform hover:scale-105 rounded-lg"
              >
                <span>
                  <HiOutlineVideoCamera />
                </span>
                <span>Trailer</span>
              </button>
              {isOpen && (
                <ModalComponent
                  isOpen={isOpen}
                  onOpenChange={onOpenChange}
                  title={productData.title}
                  video={productData.video}
                />
              )}
            </div>
            <div className="flex items-center justify-start mt-2 gap-4">
              <p className={`text-sm ${secondaryTextColor}`}>
                Release Date: {productData.release}
              </p>
              <p className={`text-sm ${secondaryTextColor}`}>
                For: {productData.for}
              </p>
            </div>
            <div className="w-full flex items-center justify-center flex-col sm:flex-row sm:justify-start pt-4 gap-2">
              <Link
                className="max-w-[200px] w-full text-center underline-offset-1 text-xs md:text-sm py-1 px-2 md:py-2 md:px-3 rounded-xl bg-blue-500 text-slate-100 flex items-center gap-2 transform hover:scale-105"
                to="#"
              >
                <HiOutlineDocumentArrowDown />
                <span>Download apk for android</span>
              </Link>
              <Link
                className="max-w-[200px] w-full text-center underline-offset-1 text-xs md:text-sm py-1 px-2 md:py-2 md:px-3 rounded-xl bg-blue-500 text-slate-100 flex items-center gap-2 transform hover:scale-105"
                to="#"
              >
                <HiOutlineDocumentArrowDown />
                <span>Download apk for ios</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Divider />
      <div className="w-full flex items-start justify-center flex-col gap-4 py-4">
        <h3
          className={`w-full text-start text-xl sm:text-2xl font-semibold ${textColor}`}
        >
          Product Summary
        </h3>
        <div
          className={`${
            expanded ? "max-w-[750px]" : "max-w-[850px]"
          } w-full text-start`}
        >
          <p
            className={`font-medium text-base sm:text-lg ${secondaryTextColor}`}
          >
            {productData.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDescMain;
