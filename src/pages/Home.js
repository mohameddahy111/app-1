import React, { useEffect, useState } from 'react';
import HomeContainet from '../components/home/HomeContainet';
import Layout from '../components/layout/Layout';
import { Container , Grid } from '@mui/material';

export default function Home() {
  const [data, setData] = useState([]);
  const fetchData= async()=>{
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(res => setData(res.products));

  }
  useEffect(() => {
    fetchData()
  }, []);
  console.log(data);
  return (
    <Layout title='Home'>
    <Container>

    <Grid container spacing={1} justifyContent='center' m={1}  >
        {data.map((x, index) => (
          <HomeContainet key={index} data={x} />
        ))}

    </Grid>
    </Container>
    
    </Layout>
  );
}
