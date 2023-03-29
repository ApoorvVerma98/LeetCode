import React ,{useEffect, useState} from "react"

export default function Api(){
    const [img, setImg] = useState("")
    console.log(img)
    useEffect(()=>{
        fetch ("https://dog.ceo/api/breeds/image/random")
        .then((api)=>api.json())
        .then((xyz)=>setImg(xyz.message))
    },[]);
    
    return(
        <div>
            HoneySingh
            <img src={img}/>
        </div>
    );

}