import "../CreateAnswer/CreateAnswer.css"

 


import { useState } from "react"
  
import Higlight from "../../../Higlight"
 const IinitialiSession = () => {
     const [showcode,setshowcode] = useState(false)
     const code  = `
const MakeNewConnection = async () => {
  try {
    await PeerConnection.current.initializeNewVideoSession();
  } catch (err) {
    console.log(err);
  }
};
`
     const cod2 = ` 
const code = (data) => {
return JSON.stringify(data);
     };`
   return (
     <div className="doc-container">
 
         <div className="header">
        <h2>initializeNewVideoSession() API Documentation</h2>
        <p>
         The <strong  style={{backgroundColor:"rgb(27 28 26)",borderRadius:"5px",padding:"2px"}}>  “initializeNewVideoSession()”  </strong>
         method is responsible for creating and preparing a <strong> new WebRTC video session </strong>. It initializes the peer connection,
          sets up media streams, and prepares the environment for exchanging <strong>offers  , answers and ICE candidates</strong>  .
         This method is usually called before creating an <strong>offer or answer</strong>, to ensure that the connection is ready.
         </p>
         <h2 style={{marginTop:"4px"}}>Function Definition</h2>
           <div className="blockcode">
              <Higlight code ={code}  lang={"js"} />
          
             
          </div>
        
         <h2 style={{marginLeft:"4px",marginTop:"10px"}}>What This Method Does</h2>
 
        
        <p style={{marginLeft:"28px"}}> ● Creates a new RTCPeerConnection instance (if not already created). </p>
        <p style={{marginLeft:"28px"}}>● Initializes local media devices (camera and microphone). </p>
        <p style={{marginLeft:"28px"}}>● Attaches media tracks to the peer connection. </p>
        <p style={{marginLeft:"28px"}}>● Prepares internal buffers for ICE candidates. </p>
        <p style={{marginLeft:"28px"}}>● Resets previous session data if needed. </p>
        <p style={{marginLeft:"28px"}}>● Makes the connection ready for signaling (offer/answer exchange) </p>
      










 
 
 
     





      
   
        
  
        <h2 style={{marginLeft:"4px",marginTop:"10px"}}>When to Use This Method</h2>
        <p style={{marginLeft:"35px",marginBottom:"10px" }} >● Call initializeNewVideoSession() when:</p>
        <p style={{marginLeft:"35px",marginBottom:"10px" }} >● Starting a new video call.</p>
        <p style={{marginLeft:"35px",marginBottom:"10px" }} >● Reconnecting after a disconnect.</p>
        <p style={{marginLeft:"35px",marginBottom:"10px" }} >● Restarting a session.</p>
        <p style={{marginLeft:"35px",marginBottom:"10px" }} >● Creating a new peer after calling HandelClose().</p>
    
        <h2 style={{marginLeft:"4px",marginTop:"10px"}}>Advice / Notes</h2>
        <p style={{marginLeft:"35px", marginBottom:"10px"}}>● Always call <strong>initializeNewVideoSession()</strong> before creating an offer or answer.</p>
        <p style={{marginLeft:"35px", marginBottom:"10px"}}>● Make sure the user has granted camera and microphone permissions before calling this method.</p>
        <p style={{marginLeft:"35px", marginBottom:"10px"}}>● If a previous connection exists, close it first using <strong>HandelClose()</strong> to avoid conflicts.</p>
        <p style={{marginLeft:"35px", marginBottom:"10px"}}>● Handle permission and device errors gracefully, especially on mobile devices.</p>
        <p style={{marginLeft:"35px", marginBottom:"10px"}}>● Do not call this method multiple times without resetting the connection.</p>

       </div>


     </div>
   )
 }

export default IinitialiSession
