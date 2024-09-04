import { useNavigate } from 'react-router-dom'
import Timer from './Timer'

const HackathonCard = ({ hackathon }) => {
  const navigate = useNavigate()

  const handleCardClick = () => {
    navigate(`/hackathon/${hackathon.id}`)
  }

  return (
    <div
      onClick={handleCardClick}
      className="bg-white shadow-lg rounded-lg p-4 cursor-pointer hover:shadow-xl transition-shadow duration-300 w-full max-w-xs md:w-64 h-auto md:h-96 mx-auto flex flex-col"
    >
      <img
        src={hackathon.image}
        alt={hackathon.name}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <div className="py-2 flex flex-col items-center justify-between flex-grow text-center">
        <div>
          <p
            className={`mb-2 text-xs font-medium inline-block px-2 py-1 rounded ${
              hackathon.status === 'active'
                ? 'text-green-500 bg-green-200'
                : hackathon.status === 'upcoming'
                ? 'text-yellow-500 bg-yellow-200'
                : 'text-red-500 bg-red-200'
            }`}
          >
            {hackathon.status.charAt(0).toUpperCase() +
              hackathon.status.slice(1)}
          </p>
          <h3 className="text-base font-semibold mb-2 leading-tight">
            {hackathon.name}
          </h3>
        </div>
        <Timer hackathon={hackathon} />
        <button className="mt-2 w-full bg-green-700 text-white py-1 rounded hover:bg-green-600">
          Participate Now
        </button>
      </div>
    </div>
  )
}

export default HackathonCard
