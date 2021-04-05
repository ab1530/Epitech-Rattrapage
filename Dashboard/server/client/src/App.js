import { RouterView } from 'react-view-router';
import router from './router';

 

router.beforeEach((to, from, next) => {
  if (localStorage.getItem('isConnected')) {
    
    return router.push('/dashboard');
  }
  else {
    return router.push('/register')
  }
  next();
});

function App() {
  const filter = routes => routes.filter(r => !r.meta.hide);
 
  return (
    <div>
      <RouterView 
        router={router} 
        filter={filter} 
        fallback={<div>loading</div>}
      />
    </div>
  );
}

export default App;
