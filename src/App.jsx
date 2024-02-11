import React, { useEffect, useState } from 'react'
import { toast } from "react-toastify";
import Spinner from './Spinner';
import Navbar from './Navbar';
import Filter from './Filter';
import Cards from './Cards';
import { apiUrl, filterData } from './data';


function App() {

  const [Courses,SetCourse] = useState([]);

  const [category,setCategory] = useState(filterData[0].title);
  
  const[Loading,setLoading] = useState(true);
    
      const fetchData = async () => {

        setLoading(true);

          try{

          const response = await fetch(apiUrl);
          const output = await response.json();
    
          // data ko save kiya
          SetCourse(output.data);
    
    
        }
    
        catch(err){

          toast.error("something went wrong");

        }
        setLoading(false);

      } 

    useEffect(() => {

      fetchData();

    },[])



  return (
      
      <div className="min-h-screen flex-col flex bg-zinc-700">
            <div>

                <Navbar></Navbar>

            </div>

        <div className="bg-bgDark2">

            <div>

              <Filter filterData={filterData} category={category} setCategory={setCategory}></Filter>

            </div>
            

            <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">

                {

                  Loading ? (<Spinner></Spinner>) : (<Cards Courses={Courses} category={category}></Cards>)

                }

            </div>

        </div>

      </div>
  )
}

export default App