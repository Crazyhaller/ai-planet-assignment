import { useDispatch } from 'react-redux'
import { deleteHackathon } from '../redux/hackathonsSlice'
import { useNavigate } from 'react-router-dom'

const EditDeleteButtons = ({ hackathon }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleDelete = () => {
    dispatch(deleteHackathon(hackathon.id))
    navigate('/')
  }

  const handleEdit = () => {
    navigate(`/edit-hackathon/${hackathon.id}`)
  }

  return (
    <div className="flex justify-end space-x-4">
      <button
        onClick={handleEdit}
        className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-yellow-600"
      >
        Edit
      </button>
      <button
        onClick={handleDelete}
        className="px-6 py-2 text-red-500 border-red-500 border rounded-lg hover:bg-red-100"
      >
        Delete
      </button>
    </div>
  )
}

export default EditDeleteButtons
