import React from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
function Cards() {
  return (
    <div className='p-3 m-3'>
     
    <h6 className='text-[10px]  p-9 text-center md:text-[30px] lg:text-[45px] tracking-[0.1rem] text-lime-600 font-bold uppercase'>Welcome to Mr. Arun's Journalist Journey</h6>
  <div className='flex row justify-between p-5 gap-7 '>
   
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://th.bing.com/th/id/OIP.LdlhjTg3nrgs5ty91XiEkwHaEK?rs=1&pid=ImgDetMain"
        title="Kerala" className='transform object-cover transition-all duration-700 scale-100 hover:scale-105'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Kerala
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Kerala , called Keralam in Malayalam, is a state on the Malabar Coast of India
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://th.bing.com/th/id/OIP.ve8_-GlvwpID_r2Hhq2NPwHaEo?rs=1&pid=ImgDetMain"
        title="green iguana" className='transform object-cover transition-all duration-700 scale-100 hover:scale-105'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Bali
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Bali, the famed "Island of the Gods", is the most visited part of Indonesia.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://th.bing.com/th/id/OIP.MXVqDaytyR0pkf98NexI7gHaE5?rs=1&pid=ImgDetMain"
        title="Dwarka, the lost city of Lord Krishna" className='transform object-cover transition-all duration-700 scale-100 hover:scale-105'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Dwarka
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Dwarka  is a town and municipality of Devbhumi Dwarka district in the state of Gujarat.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://s4.scoopwhoop.com/osi/goa/10.gif"
        title="Goa" className='transform object-cover transition-all duration-700 scale-100 hover:scale-105'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Goa
        </Typography>
        <Typography variant="body2" color="text.secondary">
            
        Goa, state of India, comprising a mainland district on the country’s southwestern coast. 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
    </div>
  );
}
   

export default Cards
