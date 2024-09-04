import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectHackathons } from '../redux/hackathonsSlice'
import EditDeleteButtons from '../components/EditDeleteButtons'
import levelImage from '../assets/icons/carbon_skill-level-basic.svg'

const HackathonDetailPage = () => {
  const { id } = useParams()
  const hackathons = useSelector(selectHackathons)
  const hackathon = hackathons.find((h) => h.id === id)

  if (!hackathon) {
    return <div className="max-w-4xl mx-auto p-4">Hackathon not found</div>
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 bg-cyan-900 p-4 md:p-6">
        <div className="ml-0 md:ml-6">
          <div className="inline-block bg-yellow-400 text-black px-3 py-1 rounded-md mb-4 md:mb-6">
            {new Date(hackathon.startDate) > new Date() ? (
              <span>
                Starts on: {new Date(hackathon.startDate).toLocaleString()}
              </span>
            ) : (
              <span>
                Ended on: {new Date(hackathon.endDate).toLocaleString()}
              </span>
            )}
          </div>
          <h2 className="text-2xl md:text-3xl text-white font-bold mb-2">
            {hackathon.name}
          </h2>
          <div className="mt-4 md:mt-6 inline-flex items-center bg-white text-cyan-950 px-3 py-1 rounded-md">
            <img src={levelImage} alt="level" className="mr-2" />
            <span>
              Level:{' '}
              {hackathon.level.charAt(0).toUpperCase() +
                hackathon.level.slice(1)}
            </span>
          </div>
        </div>
      </div>
      <div className="flex-1 p-4 md:p-6 w-full">
        <div className="w-full">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4 shadow-md pb-2 w-full">
            <div className="relative mb-4 md:mb-0">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                Overview
                <span className="absolute left-0 bottom-0 w-full h-1 bg-green-500 rounded-full"></span>
              </h3>
            </div>
            <EditDeleteButtons hackathon={hackathon} />
          </div>
          <p className="text-gray-700 text-sm md:text-base">
            {hackathon.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default HackathonDetailPage
