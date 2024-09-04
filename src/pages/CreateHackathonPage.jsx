import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addHackathon } from '../redux/hackathonsSlice'
import { generateUniqueId } from '../utils/generateUniqueId'
import HackathonForm from '../components/HackathonForm'

const CreateHackathonPage = () => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    name: '',
    startDate: '',
    endDate: '',
    description: '',
    image: '',
    level: 'easy',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.onloadend = () => {
      setFormData({
        ...formData,
        image: reader.result,
      })
    }
    reader.readAsDataURL(file)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newHackathon = {
      ...formData,
      id: generateUniqueId(),
      status: 'upcoming',
    }
    dispatch(addHackathon(newHackathon))
    setFormData({
      name: '',
      startDate: '',
      endDate: '',
      description: '',
      image: '',
      level: 'easy',
    })
  }

  return (
    <div>
      <HackathonForm
        formData={formData}
        handleChange={handleChange}
        handleImageChange={handleImageChange}
        handleSubmit={handleSubmit}
        buttonText="Create Hackathon"
      />
    </div>
  )
}

export default CreateHackathonPage
