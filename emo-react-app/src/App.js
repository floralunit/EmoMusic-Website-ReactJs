import './styles/App.css';
import {BrowserRouter, Route,  Routes, Navigate} from 'react-router-dom';
import {MainPage} from "./main-page/MainPage";
import {BobTilton} from "./bands/bob-tilton/BobTilton";

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

