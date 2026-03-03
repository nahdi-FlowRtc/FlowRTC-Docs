import Higlight from "../../../Higlight"
import "./globalcss.css"

const Camera_not_initialized = () => {
  const code = `const offer = await PeerConnection.current.createOffer()
  // this error fired when you pass thorw this params null
instance = new PeerSetup({
rtcConfig: iceConfiguration,      
constraint: constraint,            
localVideoRef: null,
remoteVideoRef: remoteVideoRef.current
});
  `
  return (
    <div className="Camera_not_initialized">

    <p className="inforamtion111">🛠  commun issue when you call this methode <strong>"createOffer()"</strong> first thing you can happend you dont pass
      <strong>"rtcConfig"</strong> or <strong> "constraint"  </strong>or <strong>"localVideoRef"</strong>  int init function 
    </p>
      <div className="blockcode">
           <Higlight code ={code}  lang={"js"} />
      </div>

    <p  className="inforamtion111"> 
     🛠  other commun issue  CameraError : Camera user DenidPermision 
      it's simple just give the Permision to use your camera
    </p>
    <div className="blockImages">
      <img src="/errorStuff/x.png"/>
    
    </div>
      <div className="blockImages">
      <img src="/errorStuff/y1.png"/>
    
    </div>    
    </div>
  )
}

export default Camera_not_initialized