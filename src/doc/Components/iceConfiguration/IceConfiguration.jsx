import "../CreateAnswer/CreateAnswer.css"
import Higlight from "../../../Higlight"

 const IceConfiguration = () => {
    
     const code  = `
const iceConfiguration = {
  iceServers: [
    {
      urls: "stun:stun.relay.metered.ca:80",
    },
    {
      urls: "turn:standard.relay.metered.ca:80",
      username: "***",
      credential: "***",
    },
    {
      urls: "turn:standard.relay.metered.ca:80?transport=tcp",
      username: "***",
      credential: "***",
    },
    {
      urls: "turn:standard.relay.metered.ca:443",
      username: "***",
      credential: "***",
    },
    {
      urls: "turns:standard.relay.metered.ca:443?transport=tcp",
      username: "***",
      credential: "***",
    },
  ],
};
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
        <h2>CE Configuration — Step-by-Step Guide</h2>
        <p>
        The iceConfiguration object tells WebRTC how to connect two users over the internet, even if they are behind routers, firewalls, or private networks
        Without this configuration, many connections will fail.
         </p>

        <h2>Step 1: Understand Why This Is Needed</h2>
        <p style={{marginLeft:"28px"}}>●     When two peers try to connect: </p>
        <p style={{marginLeft:"28px"}}>●  First, WebRTC tries to connect directly (fastest).    </p>
        <p style={{marginLeft:"28px"}}>● If that fails, it uses a relay server (TURN).    </p>
        <p style={{marginLeft:"28px"}}>●    These servers are defined in iceConfiguration.</p>
        <p style={{marginLeft:"28px"}}>●   This process is called ICE (Interactive Connectivity Establishment).</p>
        <h2>Step 2: Create Your Own Configuration</h2>

<p style={{marginLeft:"28px"}}>● Free / Cheap TURN Server Providers</p>  
<p style={{marginLeft:"28px"}}>● You asked about free 20GB — you’re probably thinking about:</p>  

<p style={{marginLeft:"28px"}}>● ✅ Metered.ca ✅ (What you are using)</p>  
<p style={{marginLeft:"28px"}}>● 👉<a href="https://www.metered.ca/stun-turn"> https://www.metered.ca/stun-turn</a></p>  
<p style={{marginLeft:"28px"}}>● They offer:  Free tier ~20GB bandwidth/month </p>  


  

 
         <h2 style={{marginTop:"4px"}}>Usage Example</h2>
           <div className="blockcode">
              <Higlight code ={code}  lang={"js"} />
          
             
          </div>
        
   
 












 
 
 
     





      
  
 
  
      
       </div>
     </div>
   )
 }

export default IceConfiguration