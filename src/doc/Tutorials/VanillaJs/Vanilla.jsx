 
import CardTutorials from "../../Components/Tutorials/CardTutorials"
import "./Vanilla.css"
const Vanilla = () => {
  return (
    <div className="Vanilla">
        <CardTutorials 
        videoImage={"../public/tutorials/pictuers/webrtc.png"} 
         
       description={"connection and generate an SDP offer."} 
        infoSteps={[
        "Setup project and signaling server",
        "Initialize new RTCPeerConnection()",
   
    ]}
        />

       <CardTutorials 
        videoImage={"../public/tutorials/pictuers/webrtc2.png"} 
       description={"Handle the remote answer, exchange ICE candidates"} 
        infoSteps={[
        "Use setRemoteDescription(offer)",
        "Call createAnswer() and setLocalDescription()",
      
    ]}
        />

    </div>
  )
}

export default Vanilla