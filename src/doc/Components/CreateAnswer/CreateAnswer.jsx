import { useState } from "react"
import "./CreateAnswer.css"  
import Higlight from "../../../Higlight"
 const CreateAnswer = () => {
     const [showcode,setshowcode] = useState(false)
     const code  = `
    const HandelCreatAnswer = async (offer) => {
    const answer = await PeerConnection.current.createAnswer(offer)
       if (!answer) return
       console.log(answer, "answer")
       SetAnswer(code(answer))
    }
     `
     const cod2 = ` 
const code = (data) => {
return JSON.stringify(data)
}`
   return (
     <div className="doc-container">
 
         <div className="header">
        <h2>HandelCreatAnswer() API Documentation</h2>
        <p>
         The <strong  style={{backgroundColor:"rgb(27 28 26)",borderRadius:"5px",padding:"2px"}}>  “HandelCreatAnswer()”  </strong>
        is responsible for generating a <strong>WebRTC</strong>  answer in response to a received offer.
       This function is used by the receiving peer to accept a connection request and complete the second step of the WebRTC signaling process.
       After generating the answer, it is converted into a JSON string using the <strong>code()</strong>  utility function and stored in state.
         </p>
         <h2 style={{marginTop:"4px"}}>Function Definition</h2>
           <div className="blockcode">
              <Higlight code ={code}  lang={"js"} />
          
             
          </div>
        
         <h2 style={{marginLeft:"4px",marginTop:"10px"}}>What This Function Does</h2>
 
        
         <p style={{marginLeft:"28px"}}>      ● Receives a remote offer as a parameter </p>
         <p style={{marginLeft:"28px"}}>  ● Calls <strong>  createAnswer()</strong> on the active PeerConnection</p>
         <p style={{marginLeft:"28px"}} > ● Waits for the  <strong> WebRTC </strong> answer to be generated </p>
         <p style={{marginLeft:"28px"}}>   ● Validates that the answer exists </p>
         <p style={{marginLeft:"28px"}}>  ● Logs the raw answer object (for debugging)</p>
         <p style={{marginLeft:"28px"}}> ● Converts the answer object into a <strong>JSON </strong>  string   </p>
         <p style={{marginLeft:"28px"}}> ● Stores it using <strong> SetAnswer()   </strong>  </p>
       





 
 
 
        <h2 style={{marginLeft:"4px",marginTop:"10px"}}>Parameters</h2>
        <h2 style={{marginLeft:"13px",marginTop:"10px"}}>Offer</h2>
       
        <p   style={{marginLeft:"35px",marginBottom:"10px" }}> ● Type: <strong>RTCSessionDescriptionInit</strong></p>
        <p   style={{marginLeft:"35px",marginBottom:"10px" }}> ● Description: The remote <strong>WebRTC</strong>  offer received from another peer.</p>
        <p   style={{marginLeft:"35px",marginBottom:"10px" }}> ● Required to generate a valid <strong>answer</strong> .</p>
         







      
  
    <div className="blockcode">
             
         <Higlight code ={cod2}  lang={"js"} />
          
           
        
            
              
          </div>
        
  
   <h2 style={{marginLeft:"4px",marginTop:"10px"}}>Advice</h2>
 
    <p style={{marginLeft:"35px",marginBottom:"10px" }} >  ● After generating the answer, you should send it back to the remote peer using<strong>WebSocket</strong>  or your signaling server.</p>
    <p style={{marginLeft:"35px",marginBottom:"10px" }} > ● Always set the local <strong>description</strong> after creating the <strong>answer</strong> .</p>
    <p style={{marginLeft:"35px",marginBottom:"10px" }} >● Make sure the offer was properly set as the remote description before creating the <strong>answer</strong> </p>
   <p style={{marginLeft:"35px",marginBottom:"10px" }} >● and handel inside try and <strong>catch</strong> in the code when you handel with <strong>asynchronous</strong>  (async) functions </p>

 
       </div>
     </div>
   )
 }

export default CreateAnswer