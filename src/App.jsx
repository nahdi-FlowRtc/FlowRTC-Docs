import {Routes,Route} from "react-router-dom"
import Doc from "./doc/Doc"
import GetStarted from "./doc/Components/getstart/GetStarted"
import InitializeVideoSession from "./doc/Components/InitializeVideoSession/InitializeVideoSession"
import CreateOffer from "./doc/Components/CreateOffer/CreateOffer"
import CreateAnswer from "./doc/Components/CreateAnswer/CreateAnswer"
import VisualizeView from "./doc/Components/VisualizeView/VisualizeView"
import Higlight from "./Higlight"
import EstablishConnection from "./doc/Components/establishConnection/EstablishConnection"
import CloseConnection from "./doc/Components/closeConnection/CloseConnection"
import ChangeIce from "./doc/Components/ChangeIce/ChangeIce"
 
import IinitialiSession from "./doc/Components/initializeNewVideoSession/IinitialiSession"
import HandleRemoteIceCandidate from "./doc/Components/handleRemoteIceCandidate/HandleRemoteIceCandidate"
import IceConfiguration from "./doc/Components/iceConfiguration/IceConfiguration"
import Community from "./doc/Components/Community/Community"
 
import Camera_not_initialized from "./doc/Components/Handelissue/Camera_not_initialized"
import AnswerOffer from "./doc/Components/Handelissue/AnswerOffer"
import EstablisConnectionError from "./doc/Components/Handelissue/EstablisConnectionError"
import Events from "./doc/Components/AllEvents/Events"
import Overview from "./Overview/Overview"
import Vanilla from "./doc/Tutorials/VanillaJs/Vanilla"
 
 
 
 
 
 
 
 
const App = () => {

  return (

    <>
    <Routes>
      <Route path="/doc" element={<Doc/>}>
       <Route path="" element={<GetStarted/>}/>
       <Route path="initializeVideoSession" element={<InitializeVideoSession/>}/>
       <Route path="CreateOffer" element={<CreateOffer/>}/>
       <Route path="CreateAnswer" element={<CreateAnswer/>}/>
       <Route path="VisualizeView" element={<VisualizeView/>}/>
       <Route path="establishConnection" element={<EstablishConnection/>}/>
       <Route path="closeConnection" element={<CloseConnection/>}/>
       <Route path="handleIceCandidate" element={<ChangeIce/>}/>
       <Route path="initializeNewVideoSession" element={<IinitialiSession/>}/>
       <Route path="HandleRemoteIceCandidate" element={<HandleRemoteIceCandidate/>}/>
       <Route path="IceConfiguration" element={<IceConfiguration/>}/>
       <Route path="Community" element={<Community/>}/>
       <Route path="Camera_not_initialized" element={<Camera_not_initialized/>}/>
       <Route path="AnswerOfferIssue" element={<AnswerOffer/>}/>
       <Route path="establishConnectionError" element={<EstablisConnectionError/>}/>
       <Route path="allEvents" element={<Events/>}/>
       <Route path="vanilla" element={<Vanilla/>}/>
     

       
      </Route>
      <Route path="/Higlight" element={<Higlight/>}/>
       <Route path="/" element={<Overview/>}/>
    
    </Routes>
    </>
  )
}

export default App

 