import React from 'react'
import { useState } from "react"
import "../CreateAnswer/CreateAnswer.css"  
import Higlight from "../../../Higlight"
 const CloseConnection = () => {
     const [showcode,setshowcode] = useState(false)
     const code  = `
const HandelClose = () => {
  PeerConnection.current.close();
};`
     const cod2 = ` 
const code = (data) => {
return JSON.stringify(data);
     };`
   return (
     <div className="doc-container">
 
         <div className="header">
        <h2>HandelClose() API Documentation</h2>
        <p>
         The <strong  style={{backgroundColor:"rgb(27 28 26)",borderRadius:"5px",padding:"2px"}}>  “HandelClose()”  </strong>
         function is responsible for closing the active <strong>WebRTC</strong> peer connection. This terminates all ongoing streams,
          stops <strong>ICE candidate</strong> exchange, and frees resources associated with the <strong>RTCPeerConnection</strong>.
         </p>
         <h2 style={{marginTop:"4px"}}>Function Definition && usage</h2>
           <div className="blockcode">
              <Higlight code ={code}  lang={"js"} />
          
             
          </div>
        
         <h2 style={{marginLeft:"4px",marginTop:"10px"}}>What This Function Does</h2>
 
        
         <p style={{marginLeft:"28px"}}>● What This Function Does</p>
         <p style={{marginLeft:"28px"}}>● Calls close() on the active PeerConnection.current.   </p>
         <p style={{marginLeft:"28px"}}>● Terminates all local and remote media streams associated with the connection.   </p>
         <p style={{marginLeft:"28px"}}>● Stops any ongoing ICE candidate exchange and event listeners.   </p>
         <p style={{marginLeft:"28px"}}>● Frees memory and resources related to the peer connection. </p>













 
 
 
        







      
  
        
  
   <h2 style={{marginLeft:"4px",marginTop:"10px"}}>Advice / Notes</h2>
 
        <p style={{marginLeft:"28px",marginBottom:"10px" }}>
        ● Always ensure that any active media streams (<strong>local or remote</strong>) are <strong>stopped or released</strong> before closing, to avoid <strong>memory leaks</strong>.
        </p>

        <p style={{marginLeft:"28px",marginBottom:"10px" }}>
        ● <strong>Notify the remote peer</strong> if necessary, so they can handle the <strong>connection closure gracefully</strong>.
        </p>

        <p style={{marginLeft:"28px",marginBottom:"10px" }}>
        ● Closing a <strong>RTCPeerConnection</strong> is <strong>final</strong>; if you want to reconnect, a <strong>new RTCPeerConnection instance</strong> must be created.
        </p>

        <p style={{marginLeft:"28px",marginBottom:"10px" }}>
        ● Use <strong>HandleClose()</strong> when the <strong>session ends</strong>, the <strong>user leaves</strong>, or an <strong>error occurs</strong> that requires cleanup.
        </p>
  




     </div>
     </div>
   )
 }

export default CloseConnection
