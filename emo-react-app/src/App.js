import './styles/App.css';
import {BrowserRouter, Route,  Routes, Navigate} from 'react-router-dom';
import {MainPage} from "./MainPage";
import {BobTilton} from "./bands/bob-titlton/BobTilton";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/bobtilton' element={<BobTilton/>}/>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

