import axios from "axios";
import { useEffect, useState } from "react";


const Blogsee = () => {
    const [blogs,setBlogs] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/getblog')
        .then(res=>{
            setBlogs(res.data)
            console.log(res.data)
            console.log(blogs)
        })
    },[])
    console.log(blogs)
    return (
        
        <div className="grid md:grid-cols-3 lg:grid-cols-4 max-w-[1000px] mx-auto mt-5 gap-4">
            {
               
                blogs?.map(singleblog=>{
                   return <div key={singleblog._id} className="border shadow-lg p-2 rounded-md
                   hover:scale-90 duration-500 cursor-pointer">
                      <p className="font-bold"> Author: {singleblog.author}</p> 
                      <h3 className="text-2xl font-blod">Title: {singleblog.title}</h3>
                      <p className="mt-2">Description: {singleblog.discribtion}</p>
                    </div>
                })
               
            }
        </div>
    );
};

export default Blogsee;