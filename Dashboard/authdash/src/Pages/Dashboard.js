// import React, {useState} from 'react'
// import {AppBar, Toolbar, IconButton, Typography, Button, Drawer} from '@material-ui/core'
// import {Menu, AccountCircle} from '@material-ui/icons'
// import App from '../App'
// import Geolocation from '../widgets/Geolocation'
// import router from '../router';
// import firebase from "../components/fire";




// function Dashboard() {
//     const [open, setOpen] = useState(false)
    
//     const handleWeather = () => {

//     }

//     const handleDrawer = () => {
//         setOpen(true);
//     }
//     const responseGoogle = (response) => {
//         console.log(response);
//       }

//       const handleLogOut = () => {

//         localStorage.clear()
//         router.push('/register')
//       }
//     return (
//         <div>
//             <AppBar position="static">
//                 <Toolbar>
//                     <IconButton onClick={handleDrawer} color="inherit" edge="start" aria-aria-label="menu">
//                         <Menu/>
//                     </IconButton>
//                     <Typography variant="h6" style={{flexGrow: 1}} color="white">
//                         Dashboard
//                     </Typography>
                    
//                     {/* <Button color="inherit">Login</Button>
//                     <Button color="inherit">Register</Button>
//                     <IconButton color="inherit" aria-label="account">
//                         <AccountCircle/>
//                     </IconButton> */}
//                 </Toolbar>
//             </AppBar>
//             <Drawer anchor='left' open={open} onClose={() => setOpen(false)}>
//                 <div style={{width: 250}}>
//                     <h3>All Services</h3>
//                 </div>
//                 <div>
//                 {/* <GoogleLogin
//     clientId="870987710777-lpaq6d3e088svhj5vcqecbrciqtijocq.apps.googleusercontent.com"
//     buttonText="Login"
//     onSuccess={responseGoogle}
//     onFailure={responseGoogle}
//     cookiePolicy={'single_host_origin'}
//     scope={'https://mail.google.com/	'}
//   /> */}
//                 </div>
//                 <div>
//                     <Button variant="contained" color="primary" style={{width: 175}}>Yammer</Button>
//                 </div>
//                 <div>
//                 <Button variant="contained" color="primary" style={{width: 175}}>Youtube</Button>
//                 </div>
//                 <div>
//                     <Button variant="contained" color="primary" style={{width: 175}}>Weather</Button>
//                 </div>
//                 <div>
//                     <Button variant="contained" color="primary" style={{width: 175}}>Fermez</Button>
//                 </div>
//                 <div>
//                     <Button variant="contained" color="secondary" style={{width: 175}} onClick={handleLogOut}>LogOut</Button>
//                 </div>
                    
//             </Drawer>
//             <Geolocation/>
//         </div>
//     );
// };

// export default Dashboard



import React, {useState} from 'react';
 import fire from "../components/fire";
import Geolocation from '../widgets/Geolocation'
// import Weather  from "../widgets/Weather";
import './lg.css'
import {AppBar, Toolbar, IconButton, Typography, Drawer} from '@material-ui/core'
import {Menu, AccountCircle} from '@material-ui/icons'
// import ReactWeather from 'react-open-weather';
// import WeatherWidget from 'weather-widget-react';
 
import {
  Button,
  Card,
  CardHeader,
  CardFooter,
  CardText,
  CardBody,
  CardTitle,
  Label,
  Row,
  Col

} from "reactstrap";


const Home = ({handleLogout}) => {
  React.useEffect(()=>{
    const msg=fire.messaging();
    msg.requestPermission().then(()=>{
      return msg.getToken();

    }).then((data)=>{
      console.warn("token",data)
    })
  })
  const [open, setOpen] = useState(false)
        const handleDrawer = () => {
            setOpen(true);
        }
        const displayGeo = () =>
        {
          <Geolocation/>
        }
        var i = 0
  return(
<div>      {/* <nav>
        <h2>Welcome</h2>
        <button onClick={handleLogout}>Logout</button>
      </nav>
      
      <Card className="card-rachid chart-area">
                <CardHeader>
                  <CardTitle tag="h3">
                    Votre position
                  </CardTitle>
                </CardHeader>
                <CardBody>
                <div className="chart-area">
                    <Geolocation/>
                  </div>
                </CardBody>
              </Card> */}
              <AppBar position="static">
                <Toolbar>
                    <IconButton onClick={handleDrawer} color="inherit" edge="start" aria-aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6" style={{flexGrow: 1}} color="white">
                        Dashboard
                    </Typography>
                    
                    {/* <Button color="inherit">Login</Button>
                    <Button color="inherit">Register</Button>
                    <IconButton color="inherit" aria-label="account">
                        <AccountCircle/>
                    </IconButton> */}
                </Toolbar>
            </AppBar>
              <Drawer anchor='left' open={open} onClose={() => setOpen(false)}>
                <div style={{width: 250}}>
                    <h3>All Services</h3>
                </div>
                <div>

                </div>
                <div>
                    <Button variant="contained" color="primary" style={{width: 175}}>Yammer</Button>
                </div>
                <div>
                <Button variant="contained" color="primary" style={{width: 175}}>Youtube</Button>
                </div>
                <div>
                    <Button variant="contained" color="primary" style={{width: 175}}>Weather</Button>
                </div>
                <div>
                    <Button onClick={displayGeo} variant="contained" color="primary" style={{width: 175}}>Geo</Button>
                </div>

                    
            </Drawer>
            <Geolocation/>
            {/* <ReactWeather
    forecast="5days"
    apikey="f01167aea28f7b890e213e81760f394b"
    type="city"
    city="Munich"/>
            <Weather/> */}

    
  {/* <WeatherWidget
    apiKey='f01167aea28f7b890e213e81760f394b'
    position='top-left'
    location='London'
    units='metric'
    lang='eng'
  />, */}

    </div>
  );
};

export default Home;
