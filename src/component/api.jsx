import axios from 'axios'



const url = 'https://bayut.p.rapidapi.com/properties/list'

const options = {
  params: {
    locationExternalIDs: '5002,6020',
    purpose: 'for-rent',
    hitsPerPage: '25',
    page: '0',
    lang: 'en',
    sort: 'city-level-score',
    rentFrequency: 'monthly',
    categoryExternalID: '4'
  },
  headers: {
    'X-RapidAPI-Key': '5478ccfec2mshe61920c976d02afp1ab0e0jsn3ab45c1645c2',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  }
};



   

export const getList = async ()=>{
   try {

    const {data: {data}} = await axios.get(url, options)

    return data;
    
   } catch (error) {
     console.log(error)
   }
}