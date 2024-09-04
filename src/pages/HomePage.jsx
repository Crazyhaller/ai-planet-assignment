import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectHackathons } from '../redux/hackathonsSlice'
import HackathonCard from '../components/HackathonCard'
import SearchBar from '../components/SearchBar'
import FilterDropdown from '../components/FilterDropdown'
import SortButton from '../components/SortButton'
import HomePageMain from '../components/HomePageMain'

const HomePage = () => {
  const hackathons = useSelector(selectHackathons)
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState({
    level: { easy: false, medium: false, hard: false },
    status: { active: false, upcoming: false, past: false },
  })
  const [sortOrder, setSortOrder] = useState('newest')
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [isSortOpen, setIsSortOpen] = useState(false)

  const toggleFilterDropdown = () => setIsFilterOpen(!isFilterOpen)
  const toggleSortDropdown = () => setIsSortOpen(!isSortOpen)

  const removeFilter = (type, value) => {
    setFilters((prev) => ({
      ...prev,
      [type]: {
        ...prev[type],
        [value]: false,
      },
    }))
  }

  const filteredHackathons = hackathons.filter((hackathon) => {
    const matchesSearch = hackathon.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
    const matchesLevel =
      !Object.values(filters.level).some(Boolean) ||
      filters.level[hackathon.level]
    const matchesStatus =
      !Object.values(filters.status).some(Boolean) ||
      filters.status[hackathon.status]
    return matchesSearch && matchesLevel && matchesStatus
  })

  const sortedHackathons = [...filteredHackathons].sort((a, b) => {
    if (sortOrder === 'newest') {
      return new Date(b.startDate) - new Date(a.startDate)
    } else {
      return new Date(a.startDate) - new Date(b.startDate)
    }
  })

  const selectedFilters = Object.entries(filters).flatMap(([type, values]) =>
    Object.entries(values)
      .filter(([, isSelected]) => isSelected)
      .map(([value]) => ({ type, value }))
  )

  return (
    <>
      <HomePageMain />
      <div className="min-h-screen flex flex-col mt-10">
        <div className="bg-cyan-950 p-4 shadow-md">
          <h1 className="mt-8 text-2xl font-bold text-center mb-8 text-white">
            Explore Challenges
          </h1>
          <div className="bg-cyan-950 p-4 rounded-lg shadow-cyan-800 shadow-md mb-8">
            <div className="flex justify-between items-center mb-2">
              <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
              <div className="ml-2 flex space-x-4">
                <FilterDropdown
                  filters={filters}
                  setFilters={setFilters}
                  isOpen={isFilterOpen}
                  toggleDropdown={toggleFilterDropdown}
                />
                <SortButton
                  sortOrder={sortOrder}
                  setSortOrder={setSortOrder}
                  isOpen={isSortOpen}
                  toggleDropdown={toggleSortDropdown}
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedFilters.map(({ type, value }) => (
                <div
                  key={`${type}-${value}`}
                  className="flex items-center bg-gray-600 text-white px-2 py-1 rounded-full"
                >
                  <span className="mr-2">
                    {type.charAt(0).toUpperCase() + type.slice(1)}:{' '}
                    {value.charAt(0).toUpperCase() + value.slice(1)}
                  </span>
                  <button
                    onClick={() => removeFilter(type, value)}
                    className="text-white hover:text-blue-900"
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-cyan-900 p-4 shadow-md flex-grow">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedHackathons.map((hackathon) => (
              <HackathonCard key={hackathon.id} hackathon={hackathon} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
