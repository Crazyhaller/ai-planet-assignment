import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { selectHackathons, updateHackathon } from '../redux/hackathonsSlice'
import HackathonForm from '../components/HackathonForm'

const EditHackathonPage = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const hackathons = useSelector(selectHackathons)
  const hackathon = hackathons.find((h) => h.id === id)

  const [formData, setFormData] = useState({
    name: '',
    startDate: '',
    endDate: '',
    description: '',
    image: '',
    level: 'easy',
  })

  useEffect(() => {
    if (hackathon) {
      setFormData({
        name: hackathon.name,
        startDate: hackathon.startDate,
        endDate: hackathon.endDate,
        description: hackathon.description,
        image: hackathon.image,
        level: hackathon.level,
      })
    }
  }, [hackathon])

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
    const updatedHackathon = {
      ...formData,
      id: hackathon.id,
      status: hackathon.status,
    }
    dispatch(updateHackathon({ id: hackathon.id, updatedHackathon }))
    navigate(`/hackathon/${hackathon.id}`)
  }

  if (!hackathon) {
    return <div className="max-w-4xl mx-auto p-4">Hackathon not found</div>
  }

  return (
    <div>
      <HackathonForm
        formData={formData}
        handleChange={handleChange}
        handleImageChange={handleImageChange}
        handleSubmit={handleSubmit}
        buttonText="Update Hackathon"
      />
    </div>
  )
}

export default EditHackathonPage
