import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://movie-notes-api-4rxn.onrender.com',
})
