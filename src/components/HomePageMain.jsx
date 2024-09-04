import { useNavigate } from 'react-router-dom'
import rocketIcon from '../assets/icons/PicsArt_04-14-04.42 1.svg'
import icon1 from '../assets/icons/Group 1000002515.svg'
import icon2 from '../assets/icons/Group 1000002516.svg'
import icon3 from '../assets/icons/Group 1000002518.svg'
import icon4 from '../assets/icons/carbon_notebook-reference.svg'
import icon5 from '../assets/icons/Vector.svg'
import icon6 from '../assets/icons/Robot.svg'
import icon7 from '../assets/icons/IdentificationCard.svg'

const HomePageMain = () => {
  const navigate = useNavigate()

  const handleCreateHackathon = () => {
    navigate('/create-hackathon')
  }

  return (
    <>
      <div className="bg-[#0e4c64] w-full min-h-screen flex flex-col items-center justify-center px-4">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mb-8">
          <div className="text-white max-w-md relative mb-8 md:mb-0">
            <h1 className="text-3xl font-bold mb-6 pl-4 relative">
              <span className="absolute left-0 top-0 h-full border-l-4 border-yellow-500"></span>
              Accelerate Innovation
              <br />
              with Global AI Challenges
            </h1>
            <h2 className="text-xl md:text-2xl mb-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
              repellendus omnis optio quae assumenda veritatis dolorum
              aspernatur nihil praesentium corporis doloribus odio, aliquid hic
              aperiam, fuga vel totam id. Accusamus, placeat excepturi ex
              officiis porro mollitia ab error ea nemo numquam quae nulla
              obcaecati autem, voluptatibus atque et, at eos.
            </h2>
            <button
              onClick={handleCreateHackathon}
              className="bg-white text-[#003145] px-4 py-2 mt-2 rounded-md font-semibold"
            >
              Create Hackathon
            </button>
          </div>
          <div className="flex-shrink-0 flex justify-center md:justify-end w-full md:w-1/2">
            <img
              src={rocketIcon}
              alt="Rocket Icon"
              className="w-48 h-48 md:w-72 md:h-72"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#003145] w-full h-24 py-4 flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-4">
          <div className="flex items-center mb-4 md:mb-0">
            <img src={icon1} alt="Icon 1" className="w-8 h-8 mr-2" />
            <div>
              <div className="text-sm text-white font-bold">100K+</div>
              <div className="text-xs text-white">AI Model Submissions</div>
            </div>
          </div>
          <div className="hidden md:block border-l h-8 mx-4"></div>
          <div className="flex items-center mb-4 md:mb-0">
            <img src={icon2} alt="Icon 2" className="w-8 h-8 mr-2" />
            <div>
              <div className="text-sm text-white font-bold">50K+</div>
              <div className="text-xs text-white">Data Scientists</div>
            </div>
          </div>
          <div className="hidden md:block border-l h-8 mx-4"></div>
          <div className="flex items-center">
            <img src={icon3} alt="Icon 3" className="w-8 h-8 mr-2" />
            <div>
              <div className="text-sm text-white font-bold">100+</div>
              <div className="text-xs text-white">AI Challenges Hosted</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-full py-16 flex flex-col items-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Why Participate in{' '}
          <span className="text-green-600">AI Challenges?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
          <div className="flex flex-col items-start">
            <img src={icon4} alt="Icon 1" className="w-12 h-12 mb-4" />
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              Prove your skills
            </h3>
            <p className="text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              ducimus ullam praesentium ipsa aperiam eum corrupti doloribus
              laboriosam animi, tempore, sapiente cumque quia alias deleniti.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <img src={icon5} alt="Icon 2" className="w-12 h-12 mb-4" />
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              Learn from community
            </h3>
            <p className="text-sm md:text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perferendis doloribus autem voluptas assumenda commodi sapiente,
              enim eveniet sunt? Quisquam maxime amet, totam saepe alias
              pariatur.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <img src={icon6} alt="Icon 3" className="w-12 h-12 mb-4" />
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              Challenge yourself
            </h3>
            <p className="text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              commodi ea eaque? Dicta aperiam veritatis, similique cupiditate
              quaerat tempore quae illo autem, esse voluptates architecto!
            </p>
          </div>
          <div className="flex flex-col items-start">
            <img src={icon7} alt="Icon 4" className="w-12 h-12 mb-4" />
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              Earn recognition
            </h3>
            <p className="text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum,
              recusandae eaque ea quos autem, amet, dolore nesciunt quaerat
              magnam beatae dolorem laboriosam fugit illum? Reprehenderit!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePageMain
