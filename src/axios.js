import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
})

// if we use instance.get(/action) --> https://api.themoviegb.org/3/action

//this will append the end points to the baseURL

export default instance
