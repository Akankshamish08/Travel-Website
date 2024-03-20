import React from 'react'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
function Course() {

  return (
    <>
    
       <div className='p-3 m-3'>
     
     <h6 className='text-[10px]  p-9 text-center md:text-[30px] lg:text-[45px] tracking-[0.1rem] text-lime-600 font-bold uppercase'>Meet Mr.Arun</h6>
     <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="text-center mb-6">
          <img src="https://th.bing.com/th/id/OIP.IrUBHhdMo6wWLFueKNreRwHaHa?rs=1&pid=ImgDetMain" alt="Mr. Arun" className="rounded-full w-32 h-32 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-800"> Mr. Arun</h2>
          <p className="text-gray-600">Retired Journalist with decades of experience</p>
        </div>
        <p className="text-gray-700 text-lg mb-6">
          Mr. Arun has been a stalwart in the field of journalism for over 30 years. He has reported from conflict zones,
          interviewed world leaders, and has a wealth of knowledge to share.
        </p>
        <p className="text-gray-700 text-lg mb-6">
          Now, he's offering a unique opportunity for aspiring journalists to learn directly from his experiences.
          This 2-week online course will provide practical insights, insider tips, and invaluable advice to help you
          kickstart your journalism career.
        </p>
        <div className="text-center">
          <a href="/course" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            Enroll Now
          </a>
        </div>
      </div>
   <div className='flex row justify-between p-5 gap-7 '>


   <div className='p-3 m-3'>
     
    
  <div className='flex row justify-between p-5 gap-7 '>
   
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://cdn2.iconfinder.com/data/icons/journalism-soft-fill/60/Male-press-journalist-reporter-1024.png"
        title="Kerala" className='transform object-cover transition-all duration-700 scale-100 hover:scale-105'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sport Journalism
        </Typography>
        <Typography variant="body2" color="text.secondary" className='flex flex-row items-center pl-9 gap-2'>
            <p className='text-gray text-[15px] line-through'>$200</p>
          <p className='text-lime-600 text-[20px]'>$120</p>
        </Typography>
      </CardContent>
      <CardActions >
        
        <Button className=" text-white ">Buy Now</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://th.bing.com/th/id/OIP.12OTD6-u4qGb_tNaR7WA8AAAAA?w=175&h=180&c=7&r=0&o=5&cb=11&dpr=1.5&pid=1.7"
        title="green iguana" className='transform object-cover transition-all duration-700 scale-100 hover:scale-105'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Design Journalism
        </Typography>
        <Typography variant="body2" color="text.secondary" className='flex flex-row items-center pl-9 gap-2'>
        <p className='text-gray text-[15px] line-through'>$220</p>
          <p className='text-lime-600 text-[20px]'>$120</p>
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small">Buy Now</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://thumbs.dreamstime.com/b/flat-journalism-round-concept-news-car-reporter-tv-set-video-photo-cameras-megaphone-journalists-hands-holding-microphones-123814948.jpg"
        title="Dwarka, the lost city of Lord Krishna" className='transform object-cover transition-all duration-700 scale-100 hover:scale-105'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Photograph Journalism
        </Typography>
        <Typography variant="body2" color="text.secondary" className='flex flex-row items-center pl-11 gap-2'>
        <p className='text-gray text-[15px] line-through'>$250</p>
          <p className='text-lime-600 text-[20px]'>$170</p>
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small">Buy Now</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://thumbs.dreamstime.com/z/media-news-concept-media-news-vector-concept-icon-set-two-color-such-as-journalist-microphone-newspaper-camera-134023940.jpg"
        title="Goa" className='transform object-cover transition-all duration-700 scale-100 hover:scale-105'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Communicate Journalism
        </Typography>
        <Typography variant="body2" color="text.secondary" className='flex flex-row items-center pl-20 gap-2'>
        <p className='text-gray text-[15px] line-through'>$300</p>
          <p className='text-lime-600 text-[20px]'>$220</p>
      
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small">Buy Now</Button>
      </CardActions>
    </Card>
    </div>
    </div>
  

  


   
  
     </div>
     </div>
     </>
   );
 }

export default Course
