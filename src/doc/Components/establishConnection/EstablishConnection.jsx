import { useState } from "react"
import "../CreateAnswer/CreateAnswer.css"  
import Higlight from "../../../Higlight"
 const EstablishConnection = () => {
     const [showcode,setshowcode] = useState(false)
     const code  = `
const EsatblishConection = async () => {
  try {
   await PeerConnection.current.establishConnection(uncode(answer));
   } catch (errr) {
    console.log(errr);
  }
 }
}
     `
     const cod2 = ` 
const uncode = (data) => {
return JSON.parse(data)  
}`
   return (



     <div className="doc-container">
 
         <div className="header">
        <h2>EsatblishConection () API Documentation</h2>
        <p>
         The <strong  style={{backgroundColor:"rgb(27 28 26)",borderRadius:"5px",padding:"2px"}}>  EsatblishConection()”  </strong>
        function is responsible for establishing a <strong>WebRTC</strong> peer connection using a remote answer. It takes a <strong>serialized</strong> JSON answer, 
        deserializes it using the <strong>uncode() </strong>utility, and applies it to the current RTCPeerConnection to complete the handshake with the remote peer.
        </p>

         <h2 style={{marginTop:"4px"}}>Function Definition &&  usage exmple</h2>


        <div className="blockcode">
          <Higlight code ={code}  lang={"js"} /> 
          </div>
        
         <h2 style={{marginLeft:"4px",marginTop:"10px"}}>What This Function Does</h2>
 
        
         <p style={{marginLeft:"28px"}}> ● Deserializes the remote answer JSON using uncode(answer).</p>
         <p style={{marginLeft:"28px"}}> ● Calls <strong>establishConnection() </strong> on the active PeerConnection.</p>
         <p style={{marginLeft:"28px"}}> ● Completes the <strong>WebRTC</strong> handshake with the remote peer. </p>
         <p style={{marginLeft:"28px"}}> ● Catches and logs any errors that occur during connection. </p>
       










 
 
 
         







      
  
          <div className="blockcode">
             
           <Higlight code ={cod2}  lang={"js"} />
      
              
          </div>
        
  
   <h2 style={{marginLeft:"4px",marginTop:"10px"}}>Advice / Notes</h2>
 
    <p style={{marginLeft:"35px",marginBottom:"10px" }} >●ensure the answer is received from the remote peer before calling <strong>EsatblishConection()</strong>.</p>
    <p style={{marginLeft:"35px",marginBottom:"10px" }} >●Usually, you would receive the answer via a <strong>WebSocket</strong> or <a href="#">signaling</a> server.</p>
    <p style={{marginLeft:"35px",marginBottom:"10px" }} >●Always handle errors gracefully, as failed connections can occur if the answer is malformed or the remote peer is not ready.</p>
  
 
       </div>
     </div>
   )
 }

export default EstablishConnection