import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="mt-10 flex w-full max-w-[326px] md:max-w-[760px] bg-white rounded-xl shadow-sm overflow-hidden border border-red-200">
      <div className="flex items-center px-4 text-gray-500">
        <Search className="w-5 h-5" />
      </div>
      <input
        type="text"
        placeholder="Search article"
        className="flex-1 w-[50px] md:w-full py-3 pr-4 text-gray-700 placeholder-[#999] focus:outline-none text-base font-semibold leading-6"
      />
      <button className="bg-[#E50914] hover:bg-red-700 text-white font-medium px-6 py-2.5 rounded-md m-1  transition-colors cursor-pointer duration-300">
        Search
      </button>
    </div>
  );
}
