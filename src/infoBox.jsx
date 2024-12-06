import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./infoBox.css";
import SevereColdIcon from '@mui/icons-material/SevereCold';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
export default function InfoBox({info}){
    const INIT_URL = "https://images.unsplash.com/photo-1591861208926-f8aec055c8c9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3MXx8fGVufDB8fHx8fA%3D%3D"
    let HOT_URL = "https://images.unsplash.com/photo-1623857584158-23c769acb3c5?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fEhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    let RAIN_URL = "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww"
    
    return(
    <div className="InfoBox">
        <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?RAIN_URL: info.temp>17 ? HOT_URL: INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity>80?<ThunderstormIcon/>: info.temp>17 ? <WbSunnyIcon/>: <SevereColdIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}%</p>
          <p>Min Temp = {info.tempMin}&deg;C</p>  
          <p>Max Temp = {info.tempMax}&deg;C</p>
          <p>the weather can described as {info.weather} and feels Like {" "}{info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
    </div>)
}