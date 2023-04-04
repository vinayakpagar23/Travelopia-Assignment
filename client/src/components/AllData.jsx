import React, { useEffect ,useState} from 'react'
import axios from "axios"
const AllData = () => {
    const[data1,setData] = useState([]);
    const fetchData =async()=>{
        const {data} = await axios.get("/api/data");
        console.log(data);
        setData(data)
    }
    useEffect(()=>{
         fetchData();
    },[]);

  return (
    <div>AllData</div>
  )
}

export default AllData