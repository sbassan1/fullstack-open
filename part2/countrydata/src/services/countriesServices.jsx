import axios from 'axios';

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/'

const getAll = () => {
  const request = axios.get(baseUrl+'all')
  return request.then(response => {
      console.log('promise fulfilled')
      return response.data;
  })
}

const getCountryByName = (name) => {
  const request = axios.get(baseUrl+String(name))
  return request.then(response => {
      console.log('promise fulfilled')
      return response.data;
  })
}


export default { getAll, getCountryByName }
