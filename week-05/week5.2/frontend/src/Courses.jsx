import React, { useEffect, useState } from 'react'

const Courses = () => {
    const [allCourses,setAllCourses] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/admin/allcourses',{
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then((res)=>res.json().then(data=>setAllCourses(data.courses)))
    },[])

    return (
        <div>
            { allCourses.length > 0 ? allCourses.map((course,index)=> 
                <div>{course.title}</div>
            ):<>NO COURSES</>}
        </div>
    )
}

export default Courses