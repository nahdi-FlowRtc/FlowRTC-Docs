import Higlight from "../../../Higlight"
import "../CreateAnswer/CreateAnswer.css"  
const Events = () => {
    const code =`
const Fni = (foo) => {
console.log(foo)
}
PeerConnection.current.on("candidate",Fni)  
// fired when you ice coming  and dont forget you should send this ice to other peer
PeerConnection.current.on("ConnectionState",Fni)  
// fire when connectionState change
//  "new"|"connecting"|"failed"|"close"|"disconnected"|"closed"
PeerConnection.current.on("RemoteDescription",Fni)  
// get you "Succes-RemoteDescription" when  your RemoteDescritption
//  is ready and this time to eat ice from buffer or from other peer

// and of course you should cleanup the function after the componet unmount
//exmple 
useEffect(()=>{
    const Fni = (foo)=>{
        console.log(foo)
    }
    PeerConnection.current.on("ExempleEvent",Fni)  
    return()=>{
          PeerConnection.current.off("ExempleEvent",Fni)  
        }
},[])

    `
  return (
    <div>


      <div className="blockcode">
         <Higlight code ={code}  lang={"js"} />
     </div>

    </div>
  )
}

export default Events