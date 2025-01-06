import { Outlet } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage'
import Header from './components/Header/Header';



function App() {
  return (
   <div>
    <Header/>
    <Outlet/>
    </div>
  );
}

export default App;
