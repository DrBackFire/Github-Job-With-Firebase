import axios from 'axios'

const proxy = 'https://cors-anywhere.herokuapp.com/'
const apiClient = axios.create({
  baseURL: `${proxy}https://jobs.github.com/positions.json?markdown=true`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

export default {
  async getJobs(location, jobTitle) {
    const response = await apiClient.get(
      `&location=${location}&search =${jobTitle}`
    )
    return response
  }
}
