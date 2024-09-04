const FilterDropdown = ({ filters, setFilters, isOpen, toggleDropdown }) => {
  const handleCheckboxChange = (type, value) => {
    setFilters((prev) => ({
      ...prev,
      [type]: {
        ...prev[type],
        [value]: !prev[type][value],
      },
    }))
  }

  return (
    <div className="relative inline-block text-left w-full md:w-auto">
      <div>
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-center w-full px-4 py-2 bg-white text-sm font-medium text-gray-700 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none"
        >
          Filters
          <svg
            className="ml-2 w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-full md:w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu">
            <div className="px-4 py-2">
              <p className="text-sm font-semibold">Level</p>
              {['easy', 'medium', 'hard'].map((level) => (
                <div key={level} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.level[level]}
                    onChange={() => handleCheckboxChange('level', level)}
                    className="mr-2"
                  />
                  <label>
                    {level.charAt(0).toUpperCase() + level.slice(1)}
                  </label>
                </div>
              ))}
            </div>
            <div className="px-4 py-2">
              <p className="text-sm font-semibold">Status</p>
              {['active', 'upcoming', 'past'].map((status) => (
                <div key={status} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.status[status]}
                    onChange={() => handleCheckboxChange('status', status)}
                    className="mr-2"
                  />
                  <label>
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default FilterDropdown
