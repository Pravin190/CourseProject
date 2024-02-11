import React, { useState } from 'react'
import Card from './Card';

function Cards(props) {

    // console.log(props.setCategory);
    // console.log(props.Courses);

    let Courses = props.Courses;
    let category = props.category;

    const [likedcourse,setLikedCourses] = useState([]);

    function getCourses() {


        if(category === "All"){

            let allCourses = [];

            Object.values(Courses).forEach((array) => {

                array.forEach((courseData) => {

                    allCourses.push(courseData);
                })
            })
            return allCourses;

        }else {

            // specific category ka data means array pass krunga
            return Courses[category];

        }

    }
    



    
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">

            {

                getCourses().map((course) => {
                    return <Card course={course} key={course.id} likedcourse={likedcourse} setLikedCourses={setLikedCourses}></Card>
                    

                })
            }

    </div>
  )
}

export default Cards