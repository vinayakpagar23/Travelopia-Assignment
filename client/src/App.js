
import './App.css';
import {Route,Routes} from "react-router-dom";
import AllData from './components/AllData';
import DetailsForm from './components/DetailsForm';

function App() {
  return (
    <div className="App">
      {/* <DetailsForm/> */}
    <Routes>
    <Route path='/' element={<DetailsForm/>} exact/>
    <Route path='/data' element={<AllData/>}/>
    </Routes>
    </div>
  );
}

export default App;
