 
import "./EstablisConnectionError.css"
const EstablisConnectionError = () => {
  return (
    <div className="EstablisConnectionError">

    <p className="info-connection-error">
    🛠 <strong>Common Issue : </strong>  
    You call <strong>establishConnection()</strong>, everything seems correct, and you expect it to work perfectly — but suddenly, nothing works.  
    The console shows everys things okay, and the connection fails.
    In many cases, mabe  the real problem is the <strong>ICE configuration</strong>.  
    If you don’t properly configure your ICE servers, both peers (local and remote) will not know how to reach each other.
 
    Always ensure that your <strong>RTCPeerConnection</strong> is initialized with a valid <strong>iceServers</strong> configuration
    <span style={{color:"green"}}> and the most imporant thing changes the ice between A and b and you can return read more about we talked about it in our doc to the </span>
    <a href="handleIceCandidate">h..ice</a> 
    </p>
  <p className="info-connection-error">
    ● the follwing exmple how look like the opeartion when all thing good and you dont change the ice entre A and B
  </p>

  
    <div className="blockImages">
      <img src="/errorStuff/d.png"/>
    </div>
  <p className="info-connection-error">
    ●  the follwing exmple how look like the opeartion when    A and B changes ice
  </p>
   <div className="blockImages">
      <img src="/errorStuff/e.png"/>
    </div>

   <p className="info-connection-error-yellow">
    of course we do all this  by hand right now to get the idea later in reall app  
    you should use <strong>socket.io</strong> to make signal entre a && b 
    and for sure we will do videos in ths documention and exmple demo in html,css,js (vanilla js)
    and we will do other playlist react+nodejs+socket.io
  </p>
    </div>
  )
}

export default EstablisConnectionError