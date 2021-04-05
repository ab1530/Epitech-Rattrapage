import React, {useState} from 'react'
import {AppBar, Toolbar, IconButton, Typography, Button, Drawer} from '@material-ui/core'
import {Menu, AccountCircle} from '@material-ui/icons'
import App from '../App'
import GoogleLogin from 'react-google-login';
import router from '../router';
import MyResponsiveGrid from './Grid.jsx'


function Dashboard() {
    const [open, setOpen] = useState(false)
    
    const handleWeather = () => {

    }

    const handleDrawer = () => {
        setOpen(true);
    }
    const responseGoogle = (response) => {
        console.log(response);
      }

      const handleLogOut = () => {

        localStorage.clear()
        router.push('/register')
      }
    return (
        <div>
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
                <GoogleLogin
    clientId="870987710777-lpaq6d3e088svhj5vcqecbrciqtijocq.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
    scope={'https://mail.google.com/	'}
  />
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
                    <Button variant="contained" color="primary" style={{width: 175}}>Fermez</Button>
                </div>
                <div>
                    <Button variant="contained" color="secondary" style={{width: 175}} onClick={handleLogOut}>LogOut</Button>
                </div>
                    
            </Drawer>
            <MyResponsiveGrid/>
        </div>
    );
};

export default Dashboard
