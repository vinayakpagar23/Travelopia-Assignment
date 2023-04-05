
import './App.css';
import {Link, Route,Routes} from "react-router-dom";
import AllData from './components/AllData';
import DetailsForm from './components/DetailsForm';
import { Box , Heading } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
    <Box
     display="flex"
     justifyContent="space-between"
     alignItems="center"
     w="100%"
     p="5px 10px 5px 10px"
     borderWidth="5px"
     bg={"#2272FF"}
    >
      <Heading>TripDetails</Heading>
      <Box
       display="flex"
       justifyContent="space-between"
   
    
       bg={"#E9F1FA"}
      >
      <Link to="/" style={{padding:"20px"}}> <Heading size='lg'>FormDetails</Heading></Link>
      <Link to="/data" style={{padding:"20px"}}><Heading size='lg'>Show data</Heading></Link>
      </Box>
    </Box>
    <Routes>
    <Route  path='/' element={<DetailsForm/>} exact/>
    <Route path='/data' element={<AllData/>} />
    </Routes>
    </div>
  );
}

export default App;
