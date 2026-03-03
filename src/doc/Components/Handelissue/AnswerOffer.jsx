import Higlight from "../../../Higlight"
import "./AnswerIssue.css"

const AnswerOffer = () => {
  const code = `await PeerConnection.current.createAnswer(<Execpt Offer>)`
  
const code2 = `await PeerConnection.current.createAnswer(uncode(offer))
// or if you wanna do it manually you can do 
await PeerConnection.current.createAnswer(JSON.parse(offer)) `
  return (
    <div className="answer">

    <p className="inforamtion111">🛠  commun issue when you call this methode <strong>"createAnswer()"</strong> first thing you can happend you dont pass
    offer to the params 
     
    </p>
      <div className="blockcode">
           <Higlight code ={code}  lang={"js"} />
      </div>

    <p  className="inforamtion111"> 
   🛠  Common Issue :  One frequent mistake is passing an invalid offer to the <code>"createAnswer()"</code> method. 
  The method expects an <strong>object</strong>, but sometimes a <strong>string</strong> is sent instead.
  This usually happens when the offer is serialized using <strong>JSON.stringify ()</strong>  
   before being sent through the signaling channel.To fix this, make sure to decode the offer before passing it to <code>createAnswer</code>. 
  Use a dedicated helper method (e.g., <strong>uncode()</strong>) that internally calls 
  <strong>JSON.parse(offerText)</strong> to convert the string back into a valid object.
  Always ensure that <strong>createAnswer</strong> receives a properly formatted object.
    </p>

    <div className="blockcode">
           <Higlight code ={code2}  lang={"js"} />
      </div>
    
    
    </div>
  )
}

export default AnswerOffer 