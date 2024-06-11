import { Modal, ModalContent, ModalBody, Button } from "@nextui-org/react";
import VideoPlayer from "./VideoPlayer";

const ModalComponent = ({
  isOpen,
  onOpenChange,
  title,
  video,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
  title: string;
  video: string;
}) => {
  return (
    <Modal
      backdrop="blur"
      isOpen={isOpen}
      size="4xl"
      onOpenChange={onOpenChange}
      placement="center"
      radius="lg"
      className="mx-10"
      classNames={{
        backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
        base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
        header: "border-b-[1px] border-[#292f46]",
        footer: "border-t-[1px] border-[#292f46]",
        closeButton: "hover:bg-white/5 active:bg-white/10",
      }}
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          },
          exit: {
            y: -20,
            opacity: 0,
            transition: {
              duration: 0.2,
              ease: "easeIn",
            },
          },
        },
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody className="m-auto">
              <h1 className="text-lg sm:text-xl text-slate-100 text-start">
                {title}
              </h1>
              <VideoPlayer video={video} />
              <div className="w-full flex items-center justify-end">
                <Button
                  className="bg-[#6f4ef2] shadow-lg shadow-indigo-500/20"
                  onPress={onClose}
                >
                  Close
                </Button>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
