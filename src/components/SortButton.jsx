const SortButton = ({ sortOrder, setSortOrder, isOpen, toggleDropdown }) => {
  const handleSortChange = (order) => {
    setSortOrder(order)
  }

  return (
    <div className="relative inline-block text-left w-full md:w-auto">
      <div>
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-center w-full px-4 py-2 bg-white text-sm font-medium text-gray-700 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none"
        >
          Sort
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-full md:w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu">
            <div className="px-4 py-2">
              <button
                onClick={() => handleSortChange('newest')}
                className={`block w-full text-left px-2 py-1 ${
                  sortOrder === 'newest'
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Newest First
              </button>
              <button
                onClick={() => handleSortChange('oldest')}
                className={`block w-full text-left px-2 py-1 ${
                  sortOrder === 'oldest'
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Oldest First
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SortButton
