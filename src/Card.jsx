// import { click } from '@testing-library/user-event/dist/click';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';

import React from 'react'

function Card(props) {

    let course = props.course;
    let likedcourse = props.likedcourse;
    let setLikedCourses = props.setLikedCourses;



    function clickHandler() {


        // logic
        if(likedcourse.includes(course.id)){

            // if all courses are liked then we removed

            setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id)))
            toast.warning("liked Removed")
        }
        else {


            if(likedcourse.length === 0){

                // agar mere course mai koi bhi like nhi hai to mai firse setlikedcourse mai update kr dunga sabhi course ke id ko..
    
                setLikedCourses([course.id]);
    
    
            }else {
    
                // agr kisi course pr liked hai aur dusre course pr liked kr rahe ho to pahile vala means previous state(course) ki liked nhi hategi.. jan tak remove nhi krte
    
                setLikedCourses((prev) => [...prev , course.id])
    
            }
            toast.success("Liked Successfully");

        }

    }

  return (
    <div className='bg-zinc-700 bg-opacity-80 w-[300px] rounded-xl overflow-hidden'>

        <div className='relative '>

            <img src={course.image.url} alt="Course Image"></img>

            <button className='rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid place-items-center'
            onClick={clickHandler}>

                        {
                            !likedcourse.includes(course.id) ? <FcLikePlaceholder fontSize="1.75rem" /> : <FcLike fontSize="1.75rem" />
                        }

            </button>
        </div>

        <div className='p-4'>

            <p className='text-white text-lg font-semibold leading-6'>{course.title}</p>
            <p className='mt-2 text-white'>

                {
                    course.description.length > 100 ? (course.description.substr(0, 100) + "...") : (course.description)
                }
            </p>

        </div>

    </div>
  )
}

export default Card