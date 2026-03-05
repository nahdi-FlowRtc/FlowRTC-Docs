 
import { useEffect, useState } from "react";
import Card from "./Card"
import "./Community.css"
import axios  from "axios";
import AskQuestion from "./AskQuestion";
const Community = () => {

const [show,setShow] = useState(false)
const [listOfquestion,SetListOfquestion] = useState([])


useEffect(()=>{
const handelPosts = async()=>{
  try{
  const {data} =  await axios.get("https://backend-w648.onrender.com/tutorials/posts")
  SetListOfquestion(data.arrayofData)
  }catch(error){
    console.log(error)
  }
}
handelPosts()
} ,[])

const func  =(data)=>{
setShow(data)
}
const hadelpass  =(array)=>{
  SetListOfquestion((prev)=>[...prev,array])
}

 
const handleDelete = async (id) => {
    SetListOfquestion(()=>{
        const arr = [...listOfquestion].filter(item => item._id!=id)
        return arr
      })
  try {
    const response = await axios.delete(`https://backend-w648.onrender.com/tutorials/delete/${id}`);
    if (response.data) {
      console.log("success");
     
    } else {
      console.log("no");
    }
  } catch (err) {
    console.log(err);
  }
};
  return (
    <div className="Community">
      
       <div className="search" style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
        <div style={{color:"green",fontWeight:"bold",cursor:"pointer"}} onClick={()=>setShow(true)}>ask</div>

         <input type="text" placeholder="search about your question ...."/>
         </div>
             
          {
          listOfquestion.sort((a, b) => b.up -  a.up ) 
          .map((item,index)=><Card key={`${item.time}-${index}`} item={item} pass={handleDelete}/>)}
          <div style={{
            position:"absolute",
            top:"50%",
            left:"50%",
            zIndex:"99",
            transform: `translate(-50%,-50%)`
          }}>
          
           {show  &&  <AskQuestion handel ={func} passdata ={hadelpass} />}
          </div>      
    </div>
  )
}

export default Community