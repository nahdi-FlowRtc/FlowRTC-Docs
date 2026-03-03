import { useState } from "react"
import "./InitializeVideoSession.css"
import Higlight from "../../../Higlight"
const InitializeVideoSession = () => {
    const code = `
useEffect(() => {
  const init = async () => {
    try {
   
      PeerConnection.current = new PeerSetup({
        rtcConfig: iceConfiguration,      
        constraint: constraint,            
        localVideoRef: localVideoRef.current,
        remoteVideoRef: remoteVideoRef.current,
        autoStartCamera: true,
        autoStartRemote: true,
      });
    } catch (error) {
      console.error("Failed to initialize PeerConnection:", error);
    }
  };

  init();


  return () => {
    if (PeerConnection.current) {
      PeerConnection.current.close();
    }
  };
}, []);
    `


  const   cod2 =`
  <video ref={localVideoRef} autoPlay muted />
  <video ref={remoteVideoRef} autoPlay />
    `

    const rtxcodef = `
const PeerConnection   = useRef(null)   
const localVideoRef = useRef(null)   
const remoteVideoRef = useRef(null)  
             
    `
    const [showcode,setshowcode] = useState(false)
  return (
    <div className="doc-container">
      
      <div className="header">
       <h2>Video Session Initialization Guid</h2>
       <p>
        The <strong  style={{backgroundColor:"rgb(27 28 26)",borderRadius:"5px",padding:"2px"}}>  “initializeVideoSession()”  </strong>
        API is responsible 
        for setting up a peer-to-peer
        video connection between users. It 
        configures local and remote video 
        streams and prepares the connection 
        for real-time communication.This guide
         explains how to properly initialize and
          use the video session in your application.
        </p>
        <h2 style={{marginTop:"4px"}}>Prerequisites</h2>
        
      
        <p>   • Before using initializeVideoSession(), ensure:  </p>
        <p style={{marginLeft:"14px"}}>  ● You are working inside a <strong>“React component”. </strong>
       </p>
       <p style={{marginLeft:"14px"}}>   ● You have created:</p>
       
       
       <p style={{marginLeft:"28px"}}> <strong> ● “localVideoRef” </strong> (React ref for local video element) </p>
       <p  style={{marginLeft:"28px"}} >  <strong>● “remoteVideoRef”</strong>  (React ref for remote video element) </p>
       <p  style={{marginLeft:"28px"}}>    <strong> ● “PeerConnection”</strong>  (React ref to store the peer instance)   </p>
       <p style={{marginLeft:"14px"}}> ● Required dependencies are installed and configured. </p>

        <h2 style={{marginLeft:"4px"}}>Example</h2>

         <div className="blockcode">
            
           <Higlight code ={rtxcodef}  lang={"js"} />
           
             
         </div>

            <h2 style={{marginLeft:"4px",marginTop:"10px"}}>How to Initialize a Video Session</h2>
            <p   style={{marginLeft:"28px",marginBottom:"10px" }}> ●  Use the API inside a  <strong>useEffect</strong> hook to ensure the session initializes
      when the <strong>  component</strong> mounts .</p>
        <div className="blockcode">
           <Higlight code ={code}  lang={"js"} />
           
        </div>
      <h2 style={{marginLeft:"4px",marginTop:"10px"}}>Configuration Options</h2>


<p style={{marginLeft:"14px"}}> 
● When <strong >  creating </strong> a new PeerSetup instance, you can pass the following <strong  > options</strong> 
</p>
        

<div className="api-table-wrapper">
  <table className="api-table">
    <thead>
      <tr>
        <th>Option</th>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>localVideoRef</code></td>
        <td>Ref</td>
        <td>Reference to the local video element</td>
      </tr>
      <tr>
        <td><code>remoteVideoRef</code></td>
        <td>Ref</td>
        <td>Reference to the remote video element</td>
      </tr>
      <tr>
        <td><code>autoStartCamera</code></td>
        <td>Boolean</td>
        <td>Automatically starts camera if true</td>
      </tr>
      <tr>
        <td><code>autoStartRemote</code></td>
        <td>Boolean</td>
        <td>Automatically attaches remote stream to video element</td>
      </tr>
      <tr>
        <td><code>rtcConfig</code></td>
        <td>Object</td>
        <td>Configuration object for the RTCPeerConnection, including ICE servers, optional settings, and media constraints.</td>
      </tr>
      <tr>
        <td><code>constraint</code></td>
         <td>Ref&lt;HTMLVideoElement&gt;</td>
         <td>Reference to the local video element used for displaying the local camera stream.</td>
      </tr>
    </tbody>
  </table>
</div>

 <h2 style={{marginLeft:"4px",marginTop:"10px"}}>Video Elements Setup</h2>
<p style={{marginLeft:"14px",marginBottom:"10px"}}>
   ● Make sure your <strong> component </strong>  includes video elements connected to the refs:
</p>


<div className="blockcode">
  
     <Higlight code ={cod2}  lang={"html"} />
           
</div>
<p style={{marginLeft:"14px",marginBottom:"10px"}}>
   ● muted is required for the local <strong>video </strong>  to avoid echo
</p>
 <p style={{marginLeft:"14px",marginBottom:"10px"}}>  ●  autoPlay ensures<strong> streams</strong>  start automatically. </p>



      </div>

      

      {/* <div className="code-block">
        <img 
          src="/PictuercodeUsage/intialzevideo.png" 
          alt="initialize video session example"
        />
      </div> */}

    </div>
  )
}

export default InitializeVideoSession