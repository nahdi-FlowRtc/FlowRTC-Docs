 
import "../CreateAnswer/CreateAnswer.css"
import { useState } from "react"
import Higlight from "../../../Higlight"

 const ChangeIce = () => {
    
    const code = `
    StoreIce(<RTCIceCandidate>)
    // Stores an ICE candidate temporarily if the remote description is not yet set.
    // Make sure you have an event listener called 'RemoteDescription'.
    // when your remotedesc ready  you should receive 'Succes-RemoteDescription'
    // Usage:
    //   peerConnection.current.on("RemoteDescription", (foo) => {
    //       console.log(foo);
    //   });
    // so  the game here put variable and chek if your remotedescription is ready or 
    // no if ready call methode eatMyStore()
    // else store your ice in the buffer using StoreIce(<RTCIceCandidate>)
    `;
  const cod2 = `
// Call this after your remote description is ready
eatMyStore();

//Example usage:
PeerConnection.current.on("RemoteDescription", (foo) => {
eatMyStore(foo);;
 });
// Example: Handle ICE from signaling
if (action.type === "ice") {
  if (isReadyTogetIce.current) {

    // Process all stored ICE candidates
    await PeerConnection.current.eatMyStore();

    // Add the new ICE candidate
    // This helps keep the connection between Peer A and Peer B stable
    await PeerConnection.current.handleRemoteIceCandidate(action.message);

  } else {

    // Store ICE until the connection is ready
    PeerConnection.current.StoreIce(action.message);

  }
}
`;
   return (
     <div className="doc-container">
 
         <div className="header">

        <h2><h5 style={{color:"red"}}>Important !</h5> ICE Candidate Handling |  API Documentation</h2>
        <p>
        In <strong>WebRTC</strong>, ICE <strong style={{color:"#0b6c0b"}}>(Interactive Connectivity Establishment) </strong>candidates are used to find the best possible network path between two peers. Even if two devices are behind NATs or firewalls, ICE allows them to discover and use reachable IP addresses and ports to establish a
        reliable peer-to-peer connection. Without ICE, peers might not be able to connect at all, especially over different networks.
         </p>

         
         <h2>Why ICE Is Needed</h2>
        <p>● <strong>Connectivity Discovery:</strong> Determines the <strong>network paths</strong> between peers.</p>
        <p>● <strong>NAT/Firewall Traversal:</strong> Helps peers behind <strong>routers or firewalls</strong> communicate.</p>
        <p>● <strong>Resilience:</strong> Ensures the connection can <strong>adapt</strong> if a path becomes <strong>unreachable</strong>.</p>
        <p>● <strong>Stepwise Connection:</strong> <strong>ICE candidates</strong> are often exchanged after an <strong>offer/answer</strong>, allowing the connection to be <strong>incrementally established</strong>.</p>

         


     <h2 style={{marginTop:"6px"}}>built in Functions && usage</h2>
      <div className="blockcode">
        <Higlight code ={code}  lang={"js"} />
       </div>



       





 
 
 
       
      





      
  
    <div className="blockcode">
             
         <Higlight code ={cod2}  lang={"js"} />
          
           
        
            
              
          </div>
        
  
   <h2 style={{marginLeft:"4px",marginTop:"10px"}}>Advice/Notes</h2>
 
    <p style={{marginLeft:"35px", marginBottom:"10px"}}>● Always wait until the remote description is set before calling <strong>eatMyStore()</strong>, otherwise ICE candidates may fail to apply.</p>
    <p style={{marginLeft:"35px", marginBottom:"10px"}}>● If ICE candidates arrive before the peer is ready, store them using <strong>StoreIce()</strong> to avoid losing connection data.</p>
    <p style={{marginLeft:"35px", marginBottom:"10px"}}>● Exchange ICE candidates through a reliable signaling channel such as <strong>WebSocket</strong> or a signaling server.</p>
    <p style={{marginLeft:"35px", marginBottom:"10px"}}>● Always handle errors when adding ICE candidates, as network changes or invalid candidates may cause failures.</p>
    <p style={{marginLeft:"35px", marginBottom:"10px"}}>● Clear the buffer after calling <strong>eatMyStore()</strong> to prevent duplicate ICE processing.</p>
    <p style={{marginLeft:"35px", marginBottom:"10px"}}>● For handleRemoteIceCandidate  you can read about it <a href={"HandleRemoteIceCandidate"}>handleRemoteIceCandidate</a></p>
    
       </div>
     </div>
   )
 }

export default ChangeIce