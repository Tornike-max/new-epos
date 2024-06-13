import SupportsMain from "../features/supports/SupportsMain";

const SupportPage = () => {
  return (
    <div className="w-full h-screen flex items-start justify-center pb-10">
      <div className="w-full h-full px-4 sm:px-6 md:px-8 lg:px-10 pt-44 sm:pt-0">
        <SupportsMain />
      </div>
    </div>
  );
};

export default SupportPage;
