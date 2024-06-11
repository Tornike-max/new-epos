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
  return (
    <div className="w-full flex flex-col justify-center items-start gap-4 ">
      <div className="w-full flex items-center justify-start gap-4">
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
            className={`${
              selected === "dark" ? "text-slate-100" : "text-slate-700"
            } text-lg sm:text-2xl font-semibold pb-2`}
          >
            {productData.title}
          </h3>
          <p
            className={`${
              selected === "dark" ? "text-slate-50" : "text-gray-600"
            } w-full flex items-center gap-4`}
          >
            <span>Release Date: </span>
            <span>{productData.release}</span>
          </p>
          <p
            className={`${
              selected === "dark" ? "text-slate-50" : "text-gray-600"
            } w-full flex items-center gap-4`}
          >
            <span>Genre: </span>
            <span>{productData.genre}</span>
          </p>

          <div className="w-full py-2">
            <button
              onClick={onOpen}
              className="px-6 py-2 flex items-center gap-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] hover:rounded-sm"
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
            <p
              className={`text-sm ${
                selected === "dark" ? "text-slate-200" : "text-gray-500"
              } `}
            >
              Release Date: {productData?.release}
            </p>
            <p
              className={`text-sm ${
                selected === "dark" ? "text-slate-200" : "text-gray-500"
              }`}
            >
              For: {productData?.for}
            </p>
          </div>
          <div className="w-full flex items-center justify-start pt-4 gap-2 animate-pulse">
            <Link
              className="underline-offset-1 py-2 px-3 rounded-xl bg-blue-500 text-slate-100 flex items-center gap-2"
              to="#"
            >
              <HiOutlineDocumentArrowDown />
              <span> Download apk for android</span>
            </Link>
            <Link
              className="underline-offset-1 py-2 px-3 rounded-xl bg-blue-500 text-slate-100 flex items-center gap-2"
              to="#"
            >
              <HiOutlineDocumentArrowDown />
              <span> Download apk for ios</span>
            </Link>
          </div>
        </div>
      </div>
      <Divider />
      <div className="w-full flex items-start justify-center flex-col gap-4 py-4">
        <h3
          className={`w-full text-start ${
            selected === "dark" ? "text-slate-100" : "text-slate-800"
          }  font-semibold text-xl sm:text-2xl`}
        >
          Product Summary
        </h3>
        <div
          className={`${
            expanded ? "max-w-[750px]" : "max-w-[850px]"
          } w-full text-start `}
        >
          <p
            className={`${
              selected === "dark" ? "text-slate-200" : "text-slate-600"
            }  font-medium text-base sm:text-lg`}
          >
            {productData.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDescMain;
