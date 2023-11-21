import React, { useEffect, useState } from 'react'
import ProfileImageDemo from '../templates/Base/images/ques3.png'
function SinglePost(props) {
  const [localDateTime, setlocalDateTime] = useState(props.post.date) 
  console.log(localDateTime)
  useEffect(()=>{
    const utcTimestamp = localDateTime;
    const utcDate = new Date(utcTimestamp);

    // Convert UTC to Bangladesh local time with timeZone option
    const localDate = utcDate.toLocaleString(undefined, { timeZone: 'Asia/Dhaka' });
    
    setlocalDateTime(localDate);
  },[localDateTime])
  
  return (
    <div className="container mb-5" id="ques">
        <div className="media my-3">
            <img
            style={{ borderRadius: '50%', height: '54px', width: '54px', padding: '5px' }}
            src={ProfileImageDemo}
            alt="Profile"
            />
            
            <div className="media-body">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h5 className="mt-0"><a className="text-dark" href="#postlink">{props.post.title}</a></h5>
                    <div className="font-weight-bold my-0"><b>Asked by: {props.post.author} at {localDateTime}</b></div>
                </div>
                <p>
                {props.post.description}
                </p>
            </div>
        </div>
        </div>
  )
}

export default SinglePost