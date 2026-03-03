 
import { useState } from "react"
import "./VisualizeView.css"
const VisualizeView = () => {
    const [showcode,setshowcode] = useState(false)
    const code = `<p>heello</p>`
  return (
     <div className="doc-container">
 
         <div className="header">
        <h2>🔹 Diagram   Documentation</h2>
        <p>
         This diagram represents the full WebRTC peer connection lifecycle using manual signaling.
         </p>
          
        
         <h2 style={{marginLeft:"4px",marginTop:"10px"}}>1️⃣ Offer Creation (Peer A starts)</h2>
 
        
         <p style={{marginLeft:"28px"}}>      ● Peer A calls createOffer(). </p>
         <p style={{marginLeft:"28px"}}>  ● The offer is sent to the Signaling Server.</p>
         <p style={{marginLeft:"28px"}} > ● The server forwards it to Peer B.</p>
         <p style={{marginLeft:"28px"}}>   ● Peer B receives the offer using receiveOffer().</p>
         <p style={{marginLeft:"28px"}}>  ● At this stage, Peer B knows how Peer A wants to communicate.</p>
       
       
         <h2 style={{marginLeft:"4px",marginTop:"10px"}}>2️⃣ ICE Candidate Exchange (Peer A → Peer B)</h2>
 
        
         <p style={{marginLeft:"28px"}}>      ●        After creating the offer, Peer A begins gathering ICE candidates (onCandidate()). </p>
         <p style={{marginLeft:"28px"}}>  ● Each ICE candidate is sent to the Signaling Server..</p>
         <p style={{marginLeft:"28px"}} > ●The server forwards them to Peer B..</p>
         <p style={{marginLeft:"28px"}}>   ● Peer B calls eatIceFromPeerA() (or handleRemoteIceCandidate())..</p>
         <p style={{marginLeft:"28px"}}>  ● This step allows Peer B to discover network paths to reach Peer A..</p>
       



         <h2 style={{marginLeft:"4px",marginTop:"10px"}}>3️⃣ Answer Creation (Peer B responds)</h2>
 
        
         <p style={{marginLeft:"28px"}}>  ● Peer B creates an answer using createAnswer(). </p>
         <p style={{marginLeft:"28px"}}>  ● The answer is sent to the Signaling Server. </p>
         <p style={{marginLeft:"28px"}} > ● The server forwards it to Peer A </p>
         <p style={{marginLeft:"28px"}}>  ● Peer A receives the answer using receiveAnswer() or establishConnectionFromAnswer().</p>
         <p style={{marginLeft:"28px"}}>  ● Now both peers agree on connection parameters. </p>
       


        <h2 style={{marginLeft:"4px",marginTop:"10px"}}>4️⃣ ICE Candidate Exchange (Peer B → Peer A)</h2>
        
            
         <p style={{marginLeft:"28px"}}>  ● After setting the remote description, Peer B also gathers ICE candidates. </p>
         <p style={{marginLeft:"28px"}}>  ● These ICE candidates are sent through the Signaling Server. </p>
         <p style={{marginLeft:"28px"}} > ● Peer A receives them.</p>
         <p style={{marginLeft:"28px"}}>  ●Peer A calls eatIceFromPeerB() (or handleRemoteIceCandidate()).</p>
         <p style={{marginLeft:"28px"}}>  ● At this point, both peers have exchanged all possible network paths. </p>
       

        <h2 style={{marginLeft:"4px",marginTop:"10px"}}> ✅ once</h2>
        
            
         <p style={{marginLeft:"28px"}}>  ● Offer is exchanged</p>
         <p style={{marginLeft:"28px"}}>  ● Answer is exchanged. </p>
         <p style={{marginLeft:"28px"}} > ● ICE candidates are exchanged in both directions.</p>
         <p style={{marginLeft:"28px"}}>  ●The peer-to-peer connection is fully established, and media (video/audio) flows directly between Peer A and Peer B..</p>
 

  

 
    <h2 style={{marginLeft:"4px",marginTop:"10px"}}> 💎  Diagram</h2>
<div className="blockcodeSpecial">
   
  
   <img src="/PictuercodeUsage/signal1.png"/>  
 
  </div>


 <h2 style={{marginLeft:"4px",marginTop:"10px"}}> 💎  Server</h2>
<div className="blockcodeSpecial">
   
  
   <img src="/PictuercodeUsage/server.png"/>  
 
  </div>
  <h2 style={{marginLeft:"4px",marginTop:"10px"}}>  💎 Architecture</h2>
        

<div className="blockcodeSpecial">
   
  
   <img src="/PictuercodeUsage/arch.png"/>  
 
  </div>



 



















 
 
  





      
  
     
        
   
 
       </div>
     </div>
   )
}

export default VisualizeView