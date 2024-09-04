const HACKATHONS_KEY = 'hackathons'

export const getHackathonsFromStorage = () => {
  const storedHackathons = localStorage.getItem(HACKATHONS_KEY)
  return storedHackathons ? JSON.parse(storedHackathons) : []
}

export const saveHackathonsToStorage = (hackathons) => {
  localStorage.setItem(HACKATHONS_KEY, JSON.stringify(hackathons))
}

export const addHackathonToStorage = (hackathon) => {
  const hackathons = getHackathonsFromStorage()
  hackathons.push(hackathon)
  saveHackathonsToStorage(hackathons)
}

export const removeHackathonFromStorage = (id) => {
  let hackathons = getHackathonsFromStorage()
  hackathons = hackathons.filter((hackathon) => hackathon.id !== id)
  saveHackathonsToStorage(hackathons)
}

export const updateHackathonInStorage = (id, updatedHackathon) => {
  let hackathons = getHackathonsFromStorage()
  hackathons = hackathons.map((hackathon) =>
    hackathon.id === id ? updatedHackathon : hackathon
  )
  saveHackathonsToStorage(hackathons)
}
