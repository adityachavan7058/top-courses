import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl, filterData } from "./components/data";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

function App() {

   const[courses, setCourse] = useState(null);
   const[loading,setLoading]=useState(true);
   const[category,setCategory]=useState(filterData[0].title);

  async function fetchData() {

     setLoading(true)
    try {
      let response = await fetch(apiUrl);
      let output =await response.json();
      setCourse(output.data )
      // console.log(output.data);
    } catch (e) {
      // console.log("Error:", e);
       toast.e("Something Went Wrong")
    }
    setLoading(false);
  }

  useEffect(()=>{
     
     fetchData();
  },[])
  return (
    <div className="min-h-screen flex flex-col ">
      <div >
        <Navbar></Navbar>
      </div>

      <div className="container">
      <div className="">
        <Filter filterData={filterData} category={category} setCategory={setCategory}></Filter>
      </div>

      <div className="w-11/12 max-w-[1200px] mx-auto flex  flex-wrap justify-center items center min-h-[50vw]">
      {
         loading ?(<Spinner/>) : (<Cards courses={courses} category={category}></Cards>)
       }
      </div>
    </div>
    </div>
  );
}

export default App;
