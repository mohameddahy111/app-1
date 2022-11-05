import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  Grid,
  Link,
} from '@mui/material';
import React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

export default function HomeContainet({ data }) {
  const {
    brand,
    category,
    description,
    thumbnail,
    id,
    images,
    price,
    rating,
    stock,
    title,
  } = data;
  return (
    <Grid item md={4}>
      <Card>
      mnmhh
      
        <CardActionArea>
          <Link href='/'>
            <img src={thumbnail} alt='' width={'100%'} height='250px' />
            <Typography  variant='h2' component={'h2'}>
              {title}
            </Typography>
          </Link>
        </CardActionArea>
        
      </Card>
    </Grid>
  );
}
