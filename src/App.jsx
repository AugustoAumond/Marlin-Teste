//import axios from 'axios';
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Header from './components/header/Header';
import Hospitais from './components/hospitals/Hospitals'
import KnowMore from './components/know_more/Knowmore';
import axios from 'axios';

const user = `${process.env.PUBLIC_URL}/imagens/Usuario.png`

function App(props){ 
  const [data, setData] = useState([]);

  useEffect (async () => {
      await axios.get(`https://5cf9ae9df26e8c00146cff8d.mockapi.io/api/v1/hospital`)
      .then((e) => {
      
        setData(e.data)
        console.log(e.data);
         
      })
      .catch((e) => {
          setData([])
      })
    }, [])

    console.log(data);

  return ( 
    <DivBody>
      <Header/>
      <Hospitais list={data}/> 
      <KnowMore/>
    </DivBody>
  )
}

export default App;


const DivBody = styled.div`

`




