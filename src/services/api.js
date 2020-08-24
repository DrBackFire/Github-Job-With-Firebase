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
  // async getJobs(page) {
  //   const response = await apiClient.get(`&page=${page}`)
  //   return response
  // },
  // getJob(id) {
  //   return apiClient.get(`?id=${id}`)
  // },
  async getJobs(location, jobTitle) {
    const response = await apiClient.get(
      `&location=${location}&search =${jobTitle}`
    )
    return response
  }
}

export const getLocation = async location => {
  const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${location}&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyDu2DqOhWSOAI1n1WJedodTn6JHAy-ZvYI
  `
  const response = await axios(`https://cors-anywhere.herokuapp.com/${url}`)

  return response
}
