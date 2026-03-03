import { useState } from "react"
import "./GetStarted.css"
import Higlight from "../../../Higlight"
const GetStarted = () => {
  
  
  const code1 = `
  const peer = new PeerSetup({
    localVideoRef,
    remoteVideoRef,
    autoStartCamera: true,
    autoAttachRemoteStream: true
  })

  await peer.initializeVideoSession()

 // send offer to remote user
  const offer = await peer.createOffer()
  
 // send answer back
  const answer = await peer.createAnswer(offer)
  

  await peer.establishConnectionFromAnswer(answer)
  `

  const code2 = `
  
  Peer A        Signaling Server       Peer B
 |                 |                  |
 | createOffer()   |                  |
 |---------------->|                  |
 |                 | sendOffer()      |
 |                 |----------------->|
 |                 |                  | receiveOffer()
 | onCandidate()   |                  |
 |---------------->|                  |
 |                 | send ICE         |
 |                 |----------------->|
 |                 |                  | eatIceFromPeerA()
 | createAnswer()  |                  |
 |---------------->|                  |
 |                 | sendAnswer()     |
 |                 |----------------->|
 |                 |                  | receiveAnswer()
 | onCandidate()   |                  |
 |---------------->|                  |
 |                 | send ICE         |
 |                 |----------------->|
 |                 |                  | eatIceFromPeerB()`

 const codrtx = `
<pre style="font-family:monospace;color: rgb(68, 68, 68); background-color: rgb(243, 243, 243); font-weight: 400;">

<span style="color: rgb(105,112,112);">// Initialize Peer Connection</span>

<span style="color: rgb(68,68,68); font-weight:700;">useEffect</span>(() =&gt; {

  <span style="color: rgb(68,68,68); font-weight:700;">const</span> 
  <span style="color: rgb(136,0,0); font-weight:700;">init</span> = 
  <span style="color: rgb(68,68,68); font-weight:700;">async</span> () =&gt; {

    <span style="color: rgb(68,68,68); font-weight:700;">try</span> {

      PeerConnection.current = 
      <span style="color: rgb(68,68,68); font-weight:700;">new</span> 
      <span style="color: rgb(136,0,0); font-weight:700;">PeerSetup</span>({

        rtcConfig: iceConfiguration,
        constraint: constraint,

        localVideoRef: localVideoRef.current,
        remoteVideoRef: remoteVideoRef.current,

        autoStartCamera: <span style="color: rgb(0,0,255);">true</span>,
        autoStartRemote: <span style="color: rgb(0,0,255);">true</span>,

      });

    } 
    <span style="color: rgb(68,68,68); font-weight:700;">catch</span> (error) {

      console.<span style="color: rgb(136,0,0); font-weight:700;">error</span>(
        <span style="color: rgb(136,0,0);">"Failed to initialize PeerConnection:"</span>,
        error
      );

    }

  };

  init();

  <span style="color: rgb(68,68,68); font-weight:700;">return</span> () =&gt; {

    <span style="color: rgb(68,68,68); font-weight:700;">if</span> (PeerConnection.current) {

      PeerConnection.current.<span style="color: rgb(136,0,0); font-weight:700;">close</span>();

    }

  };

}, []);

</pre>
`;


 const Buzz = `import { PeerSetup, code, uncode } from "nahdi-flowrtc" 
 useEffect(() => {
  const init = async () => {
    try {
        PeerConnection.current = new PeerSetup({
        rtcConfig: iceConfiguration,
        constraint,
        localVideoRef: localVideoRef.current,
        remoteVideoRef: remoteVideoRef.current,
      });
    } catch (error) {
      console.error(error);
    }
  };

  init();
}, []);`;

  return (
    <div className="GetStarted">
      
      <span className="title-start">Getting Started</span>

      {/* <p>Add beautiful p2p to your React app with  <a href="https://github.com/devtunis">react-web-rtc</a></p> */}

      <div className="data">
         <h3>Install with NPM</h3>
          <div className="block">
            
            {<Higlight code ={`npm install nahdi-flowrtc`}
            lang={"bash"}
            />}
          </div> 
      </div> 

     <div className="data">
         <h3>Basic Usage</h3>
          <div className="block2">
              
              <Higlight code ={Buzz} lang={"js"}/>
          </div> 
      </div> 


      <div className="footer">
       <p> © 2026 FLOWRTC · Built by <a href="https://github.com/devtunis" > Nahdi Ghaith</a></p> 
      </div>
       
    </div>
  )
}

export default GetStarted