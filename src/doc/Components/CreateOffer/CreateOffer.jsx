import { useState } from "react"
import "./CreateOffer.css" 
import Higlight from "../../../Higlight"
const CreateOffer = () => {
    const [showcode,setshowcode] = useState(false)
    const code  = `
const HandelCreateOffer = async () => {
  const offer = await PeerConnection.current.createOffer();
  if (!offer) return;
  console.log(offer);
  SetOffer(code(offer));
};`
    const cod2 = ` 
const code = (data) => {
return JSON.stringify(data);
};`
  return (
    <div className="doc-container">

        <div className="header">
       <h2>HandelCreateOffer () API Documentation</h2>
       <p>
        The <strong  style={{backgroundColor:"rgb(27 28 26)",borderRadius:"5px",padding:"2px"}}>  “HandelCreateOffer ()”  </strong>
       is responsible for generating a WebRTC offer from the current peer connection.
       This offer is used to initiate a connection with a remote peer.
       After creation, the offer is serialized into a JSON string using the custom <strong> code() </strong> 
       function and stored in state.
        </p>
        <h2 style={{marginTop:"4px"}}>Function Definition</h2>
          <div className="blockcode">
            
             <Higlight code ={code}  lang={"js"} />
         </div>
       
        <h2 style={{marginLeft:"4px",marginTop:"10px"}}>What This Function Does</h2>

       
        <p style={{marginLeft:"28px"}}>  ● Calls createOffer() on the active  <strong >PeerConnection</strong>   </p>
        <p style={{marginLeft:"28px"}}> ● Waits for the WebRTC <strong> offer</strong>  to be generated</p>
        <p style={{marginLeft:"28px"}} > ● Validates that the  <strong> offer</strong>  exists</p>
        <p style={{marginLeft:"28px"}}>   ●Logs the raw  <strong> offer</strong>  object (for debugging)</p>
        <p style={{marginLeft:"28px"}}> ● Converts the offer object to a  <strong> JSON</strong>  string</p>
        <p style={{marginLeft:"28px"}}>  ● Stores it using <strong>SetOffer()</strong> </p>
            


       <h2 style={{marginLeft:"4px",marginTop:"10px"}}>Dependencies</h2>
      
       <p   style={{marginLeft:"35px",marginBottom:"10px" }}> ● <strong> PeerConnection.current  </strong> → Active RTCPeerConnection instance</p>
       <p   style={{marginLeft:"35px",marginBottom:"10px" }}> ●<strong>SetOffer</strong>  → React state setter</p>
       <p   style={{marginLeft:"35px",marginBottom:"10px" }}>  ● <strong>code() </strong>→ Utility function that serializes the offer</p>
        

    <h2 style={{marginLeft:"4px",marginTop:"10px"}}>About code() Utility</h2>
    <p style={{marginLeft:"28px",marginBottom:"15px"}}>
        ● You mentioned you created it to stringify <strong>JSON</strong> .
       A typical implementation would look like:
    </p>
 
   <div className="blockcode">
            
        
          
     <Higlight code ={cod2}  lang={"js"} />
           
             
         </div>
       
 
  <h2 style={{marginLeft:"4px",marginTop:"10px"}}>Advice/Notes</h2>

     
  <p style={{marginLeft:"35px", marginBottom:"10px"}}>● Before calling <strong>createOffer()</strong>, ensure that <strong>PeerConnection.current</strong> is properly initialized and ready.</p>
  <p style={{marginLeft:"35px", marginBottom:"10px"}}>● After creating the offer, send it immediately to the remote peer using a <strong>WebSocket</strong> or <a href="#">signaling</a> server so the handshake can start.</p>
  <p style={{marginLeft:"35px", marginBottom:"10px"}}>● Always validate the offer object and handle potential errors gracefully, as failed offer creation can happen if the peer connection is not ready.</p>
  <p style={{marginLeft:"35px", marginBottom:"10px"}}>● Log the offer for debugging, but avoid sending raw internal objects to the client; use <strong>code()</strong> to serialize it safely.</p>
      </div>
    </div>
  )
}

export default CreateOffer