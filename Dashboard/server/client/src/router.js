import ReactViewRouter from 'react-view-router';
import  Register  from './Screens/Register.jsx';
import  Login  from './Screens/Login.jsx';
import  Dashboard from './Screens/Dashboard.jsx';
 
const router = new ReactViewRouter({
  base: '',     // the base URL of the app. For example, if the entire single page application is served under /app/, then base should use the value "/app/"
  mode: 'hash', // or browser|memory|hash, default:hash
  routes: [{path: '/register', component: Register}, 
  {path:'/login', component: Login},
  {path: '/dashboard', component: Dashboard}]    // also can be passed by router.use method
});
   
export default router;