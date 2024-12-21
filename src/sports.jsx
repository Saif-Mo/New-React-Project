import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";

const Content2 = () => {
    let [posts , setPosts ] = useState([]);
    const getPosts = async ()=>{
    let {data} = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=sport&apiKey=73fc84fb668e401696beba74448a2b13`);
    setPosts(data.articles)
    }
    useEffect( ()=>{ getPosts()} ,[])
    // console.log(posts)
           return(
    <div className="container">
        <div className="row mt-3">
            {posts.map((news,i)=> 
            <div className='col-md-4' key={i}>
                <div className="card" style={{width: "18rem"}}>
                    <img src={news.urlToImage} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{news.title}</h5>
                        <p>{news.description}</p>  </div>
    
            </div>
       </div>)}
        </div>
    </div> 
    
           )
    }
    
    export default Content2;
