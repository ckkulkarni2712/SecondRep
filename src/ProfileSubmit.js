import React, { useState } from 'react'
import axios from 'axios'
import db from './firebase';




const ProfileSubmit = () => {
  //  const URL = "http://localhost:8001/tinder/cards/";
    //const [data, setData] = useState({})
    const [name, setName] = useState('');
    const [imgUrl, setimgUrl] = useState('');
   
    const handleSubmit = async (e) =>{
        e.preventDefault()
        const post = { name: name , imgUrl: imgUrl }
        let number = Math.random;
    try {
        db.collection('profiles').doc(number).set({
            name: name,
            imgUrl: imgUrl
        })
        
        alert("Data submitted successfully!")
    } catch (e) {
        alert(e)
    }
}
    
    // function handleSubmit(e) {
    //     e.preventDefault();
    //     Axios.post(URL, {
    //         name: e.name,
    //         imgUrl: e.imgUrl
    //     })
    
    // }
    // const handleChange = (event) => {
    //     const name = event.target.name;
    //     const imgUrl = event.target.imgUrl;
    //     setData(values => ({...values,[name]:imgUrl}))
    //  }
  return (
      <div>
          <form onSubmit={handleSubmit}>
          <input
                type="text"
                value={name}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
             />
              <input value={imgUrl}
                  type="text"
                  placeholder='Enter Image URL'
                  onChange={(e) => setimgUrl(e.target.value)} ></input>
              <button type="submit">Submit</button>
          </form>
    </div>
  )
}

export default ProfileSubmit