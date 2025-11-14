const PrimaryButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="bg-[#E50914] hover:bg-[#FF0F1E] transition duration-500 ease-in-out rounded-xl px-20 py-3 font-semibold text-white inline-block hover:cursor-pointer max-md:w-full">
      {children}
    </button>
  );
};

export default PrimaryButton;
