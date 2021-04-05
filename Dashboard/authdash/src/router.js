import ReactViewRouter from 'react-view-router';
import  Dashboard from './Pages/Dashboard.js';

 
const router = new ReactViewRouter({
  base: '',     // the base URL of the app. For example, if the entire single page application is served under /app/, then base should use the value "/app/"
  mode: 'hash', // or browser|memory|hash, default:hash
  routes: [{path: '/dashboard', component: Dashboard},],// also can be passed by router.use method
});
   
export default router;