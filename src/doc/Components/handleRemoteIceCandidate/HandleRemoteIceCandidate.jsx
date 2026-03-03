import "../CreateAnswer/CreateAnswer.css"
import Higlight from "../../../Higlight"

 const HandleRemoteIceCandidate = () => {
    
     const code  = `
await PeerConnection.current.handleRemoteIceCandidate(element);
     `
     const cod2 = ` 
this.buffer.forEach(async (element) => {
  await PeerConnection.current.handleRemoteIceCandidate(element);
  // and in the built in function called eatMyStore() working like this in the background
});
`
   return (
     <div className="doc-container">
 
         <div className="header">
        <h2>handleRemoteIceCandidate() Usage  Documentation</h2>
        <p>
         The <strong  style={{backgroundColor:"rgb(27 28 26)",borderRadius:"5px",padding:"2px"}}>  “handleRemoteIceCandidate()”  </strong>
        The following usage demonstrates how to apply a buffered or received ICE candidate to the active peer connection 
        using the handleRemoteIceCandidate() method.
        This call is usually made when processing stored ICE candidates or when receiving candidates
         from a signaling server.
         </p>
         <h2 style={{marginTop:"4px"}}>Usage Example</h2>
           <div className="blockcode">
              <Higlight code ={code}  lang={"js"} />
          
             
          </div>
        
         <h2 style={{marginLeft:"4px",marginTop:"10px"}}>What This Function Does</h2>
 
        
           <p style={{marginLeft:"28px"}}>● Takes a single ICE candidate stored in element. </p>
           <p style={{marginLeft:"28px"}}>● Validates the candidate data internally.   </p>
           <p style={{marginLeft:"28px"}}>● Checks if the remote description is set.   </p>
           <p style={{marginLeft:"28px"}}>● Creates a new RTCIceCandidate instance.   </p>
           <p style={{marginLeft:"28px"}}>● Adds the candidate to the active RTCPeerConnection.   </p>
           <p style={{marginLeft:"28px"}}>● Logs success or failure for debugging.   </p>
       

   <h2 style={{marginLeft:"4px",marginTop:"10px"}}>What This Function Does</h2>
 
   <p style={{marginLeft:"28px"}}>● You are processing buffered ICE candidates.  </p>
    <p style={{marginLeft:"28px"}}>● The remote description has already been applied.  </p>
    <p style={{marginLeft:"28px"}}>●You are synchronizing ICE after offer/answer exchange.  </p>
    <p style={{marginLeft:"28px"}}>●You are restoring a connection after delay. </p>
       

 <h2 style={{marginLeft:"4px",marginTop:"10px"}}>Common usage inside your buffer handler:</h2>
 



   <div className="blockcode">
              <Higlight code ={cod2}  lang={"js"} />
          
             
          </div>













 
 
 
     





      
  
 
  
        <h2 style={{marginLeft:"4px",marginTop:"10px"}}>Advice/Notes</h2>
        <p style={{marginLeft:"35px", marginBottom:"10px", color:"red"}}>⚠️ ICE candidate handling is crucial. Missing or mismanaging it will prevent peers from connecting.</p>
        <p style={{marginLeft:"35px", marginBottom:"10px"}}>● Call this method only after <strong>EsatblishConection()</strong> or <strong>setRemoteDescription()</strong> has completed.</p>
        <p style={{marginLeft:"35px", marginBottom:"10px"}}>● If the remote description is not ready, store ICE candidates first using <strong>StoreIce()</strong>.</p>
        <p style={{marginLeft:"35px", marginBottom:"10px"}}>● Always use <strong>await</strong> to ensure ICE candidates are added in the correct order.</p>
        <p style={{marginLeft:"35px", marginBottom:"10px"}}>● Handle errors properly to avoid silent connection failures.</p>
        <p style={{marginLeft:"35px", marginBottom:"10px"}}>● Do not call this method multiple times with the same candidate.</p>
        
       </div>
     </div>
   )
 }

export default HandleRemoteIceCandidate