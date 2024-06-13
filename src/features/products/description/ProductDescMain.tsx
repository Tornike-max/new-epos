import { Divider, Image, useDisclosure } from "@nextui-org/react";
import {
  HiOutlineDocumentArrowDown,
  HiOutlineVideoCamera,
} from "react-icons/hi2";
import { Link } from "react-router-dom";
import ModalComponent from "../../../ui/ModalComponent";
import { useToggleSidebar } from "../../../context/useToggleSidebar";
import { useToggleDarkMode } from "../../../context/useToggleDarkMode";
import { Models } from "appwrite";
import { formatDate } from "../../../ui/formatDate";

const ProductDescMain = ({ productData }: { productData: Models.Document }) => {
  const { expanded } = useToggleSidebar();
  const { selected } = useToggleDarkMode();
  const { onOpen, isOpen, onOpenChange } = useDisclosure();

  const textColor = selected === "dark" ? "text-gray-200" : "text-gray-900";
  const secondaryTextColor =
    selected === "dark" ? "text-gray-400" : "text-gray-600";
  const cardBackground = selected === "dark" ? "bg-slate-900" : "bg-white";
  const cardShadow =
    selected === "dark"
      ? "shadow-lg shadow-gray-900"
      : "shadow-lg shadow-gray-200";

  return (
    <div className="w-full flex flex-col justify-center items-start gap-4 p-4">
      <div
        className={`${cardBackground} ${cardShadow} rounded-lg p-6 w-full duration-150 transition-all`}
      >
        <div className="w-full flex flex-col xl:flex-row items-start xl:items-center justify-start gap-6">
          <div className="w-full flex justify-center items-center m-auto">
            <Image
              isZoomed
              fallbackSrc="https://via.placeholder.com"
              width={1100}
              height={300}
              alt={productData.title}
              src={productData.image}
              className="bg-cover w-full rounded-md z-0"
            />
          </div>
          <div className="w-full flex flex-col items-start justify-start">
            <h3
              className={`text-lg sm:text-xl font-semibold pb-2 ${textColor}`}
            >
              {productData.title}
            </h3>
            <p
              className={`text-sm sm:text-base flex items-center gap-2 ${secondaryTextColor}`}
            >
              <span>Release Date:</span>
              <span>{formatDate(productData.release)}</span>
            </p>
            <p
              className={`text-sm sm:text-base flex items-center gap-4 ${secondaryTextColor}`}
            >
              <span>Genre:</span>
              <span>{productData.genre}</span>
            </p>

            <p
              className={`text-sm sm:text-base flex items-center gap-4 ${secondaryTextColor}`}
            >
              <span>For:</span>
              <span>{productData.for}</span>
            </p>
            <div className="w-full py-2">
              <button
                onClick={onOpen}
                className="px-6 py-2 flex items-center gap-2 font-medium bg-indigo-500 text-white w-fit transition-all transform hover:scale-105 rounded-lg"
              >
                <HiOutlineVideoCamera />
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

            <div className="w-full flex items-center justify-center flex-col pt-4 gap-2">
              <Link
                className="py-2 px-3 w-full rounded-md bg-primary-500 hover:bg-primary-600 flex items-center justify-center gap-2 text-slate-100 text-xs md:text-sm lg:text-base"
                to="#"
              >
                <HiOutlineDocumentArrowDown />
                <span>Download apk for android</span>
              </Link>
              <Link
                className="py-2 px-3 w-full rounded-md bg-primary-500 hover:bg-primary-600 flex items-center justify-center gap-2 text-slate-100 text-xs md:text-sm lg:text-base"
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
            expanded ? "max-w-[850px]" : "max-w-[950px]"
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
