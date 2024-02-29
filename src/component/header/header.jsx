import { useSelector, useDispatch } from 'react-redux';
import { setBackgroundColor } from '../../redux/ccSlice';
// import { getList } from '../api';
import { useEffect, useState } from 'react';
import axios from "axios"

// const options = {
//   method: 'GET',
//   url: 'https://bayut.p.rapidapi.com/properties/list',
//   params: {
//     locationExternalIDs: '5002,6020',
//     purpose: 'for-rent',
//     hitsPerPage: '2',
//     page: '2',
   
//   },
//   headers: {
//     'X-RapidAPI-Key': '5478ccfec2mshe61920c976d02afp1ab0e0jsn3ab45c1645c2',
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//   }
// };


function Header() {
  const [lists, setLists] = useState([])
    const backgroundColor = useSelector(state => state.css.backgroundColor);
    const borderRadius = useSelector(state => state.css.borderRadius);
    const height = useSelector(state => state.css.height);
    const width = useSelector(state => state.css.width);

  const dispatch = useDispatch();

  const handleColorChange = () => {
    dispatch(setBackgroundColor('white'));
    dispatch(setBackgroundColor('6rem')); // Dispatch the action to change the CSS property
  };
  const handleleave = () => {
    dispatch(setBackgroundColor('blue'));
    dispatch(setBackgroundColor('4rem')); // Dispatch the action to change the CSS property
  };
  
  useEffect(()=>{
    (async () => {
      try {
        const response = await axios.request(options);
        setLists(response.data.hits)
        console.log(response.data.hits);
      } catch (error) {
        console.error(error);
      }
    })();
  
  }, [])
  

  

  return (
    <div>
      the header
      
      <div style={{ backgroundColor, borderRadius, height, width }} 
      onMouseEnter={handleColorChange}
      onMouseLeave={handleleave}>click</div>

      {lists.map((property)=>(
        <div className="property" key={property.id}>
           {property.title}

           <div>
              <img src={property.coverPhoto.url} alt="" />
           </div>
           <div>
              <img src={property.photoIDs[1]} alt="" />
           </div>
        </div>
      ))}
    
    </div>
  )
}

export default Header
