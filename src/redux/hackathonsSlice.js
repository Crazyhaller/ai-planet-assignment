import { createSlice } from '@reduxjs/toolkit'
import {
  getHackathonsFromStorage,
  addHackathonToStorage,
  updateHackathonInStorage,
  removeHackathonFromStorage,
} from '../utils/localStorageUtils'
import mockData from '../utils/mockData.json'

const storedHackathons = getHackathonsFromStorage()
const initialState = {
  hackathons: storedHackathons.length ? storedHackathons : mockData,
}

const hackathonsSlice = createSlice({
  name: 'hackathons',
  initialState,
  reducers: {
    addHackathon: (state, action) => {
      state.hackathons.push(action.payload)
      addHackathonToStorage(action.payload)
    },
    updateHackathon: (state, action) => {
      const { id, updatedHackathon } = action.payload
      const index = state.hackathons.findIndex(
        (hackathon) => hackathon.id === id
      )
      if (index !== -1) {
        state.hackathons[index] = updatedHackathon
        updateHackathonInStorage(id, updatedHackathon)
      }
    },
    deleteHackathon: (state, action) => {
      const id = action.payload
      state.hackathons = state.hackathons.filter(
        (hackathon) => hackathon.id !== id
      )
      removeHackathonFromStorage(id)
    },
  },
})

export const { addHackathon, updateHackathon, deleteHackathon } =
  hackathonsSlice.actions

export const selectHackathons = (state) => state.hackathons.hackathons

export default hackathonsSlice.reducer
