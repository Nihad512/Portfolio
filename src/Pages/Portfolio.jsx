import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import FirstSite from '../Images/First_website.PNG'
import {collection, Collection, getDocs, query} from 'firebase/firestore';
import {db} from '../firebase.config'
function Portfolio() {
  const [websites, setWebsites] = useState(null);
  useEffect(()=>{
    const fetchListings= async ()=>{
      try {
         const listingsRef=collection(db,"Website_links")

         const q= query(listingsRef);
         const querySnap=await getDocs(q);
         let listings=[];
         querySnap.forEach((doc)=>{
          console.log(doc.data());
          return listings.push({
            id:doc.id,
            data:doc.data()
          })
         
         })
         setWebsites(listings);
      } catch (error) {
        window.alert("Could not Fetch the websites");
      }
    }
    fetchListings()
  },[])
  return (
    <div className='flex direction_column'>
      <div className='flex align_center FrontSkills'>
    <h1>Portfolio</h1>
    </div>
    <div className='flex direction_column Website'>
    <p>Gallery</p>
    <span>
    {
      websites&&websites.length>0? websites.map((websites)=>(

        <Link key={websites.id} className="fl " to={`${websites.data.Website_link}`} >
        <img className='full_width full_height' src={`${websites.data.Website_photo}`} alt="Photo of my Website" />
        </Link> 
      ))  : ""
    }
     
    </span> 
    </div>
    </div>
  )
}

export default Portfolio