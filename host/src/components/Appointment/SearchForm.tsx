import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

const SearchForm = () => {
  return (
    <form className="flex flex-col md:flex-row justify-center gap-6 mb-6">
      <div className="relative flex-1 h-full">
        <div className="absolute top-1/2 -translate-y-1/4 left-4 flex">
          <FaSearch className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search Doctor, Therapist, Consultant, Spa"
          className="w-full pl-10 pr-4 py-2 placeholder:text-gray-300 rounded-full border border-gray-100 focus:outline-none   "
        />
      </div>
      <div className="relative flex-1 h-full">
        <div className="absolute top-1/2 -translate-y-1/2 left-3 flex items-center pointer-events-none">
          <FaMapMarkerAlt className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Select your location"
          className="w-full pl-8 pr-4 py-2 rounded-full border placeholder:text-gray-300 border-gray-100  focus:outline-none "
        />
      </div>
      <button
        type="submit"
        className="px-8 py-2 bg-indigo-500 text-white font-medium rounded-full transition-colors"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
