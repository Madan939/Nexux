const PrimaryButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="bg-[#E50914] rounded-xl px-20 py-2 font-semibold text-white inline-block hover:cursor-pointer max-md:w-full">
      {children}
    </button>
  );
};

export default PrimaryButton;
