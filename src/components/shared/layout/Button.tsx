const ResuableButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="bg-[#FCE6E8] rounded-2xl md:rounded-3xl px-3 py-2 font-medium">
      {children}
    </button>
  );
};

export default ResuableButton;
