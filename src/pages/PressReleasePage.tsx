import PressReleaseInfo from "../features/pressrelease/PressReleaseInfo";

const PressReleasePage = () => {
  return (
    <div className="max-w-[2200px] w-full flex items-center justify-center pb-10">
      <div className="w-full flex flex-col justify-center items-start px-4 sm:px-6 md:px-8 lg:px-10 py-6">
        <PressReleaseInfo />
      </div>
    </div>
  );
};

export default PressReleasePage;
