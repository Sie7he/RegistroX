import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import {Users} from '../components/Users';


export const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<App />} />

        <Route path='/usuarios' element={<Users />} />
    </Routes>
    
    
    </BrowserRouter>
  )
}
