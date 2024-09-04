import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import HackathonDetailPage from './pages/HackathonDetailPage'
import CreateHackathonPage from './pages/CreateHackathonPage'
import EditHackathonPage from './pages/EditHackathonPage'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hackathon/:id" element={<HackathonDetailPage />} />
        <Route path="/create-hackathon" element={<CreateHackathonPage />} />
        <Route
          path="/edit-hackathon/:id"
          element={<EditHackathonPage />}
        />{' '}
      </Routes>
    </Router>
  )
}

export default App
