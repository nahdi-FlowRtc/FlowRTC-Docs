import { Link, NavLink, Outlet } from "react-router-dom"
 
import "./doc.css"
import { useEffect, useState } from "react"
import { backgrounds } from "../Tehmes/backgrounds"
import { useNavigate } from "react-router-dom"
const Doc = () => {
 const Nav = useNavigate()
 const [countImage,setImage] = useState(0)
 const [counter,setcounter] = useState(0)
 const Image = [
  "/imagesUi/heartWithlogo.png",
  "/imagesUi/flowrtcnew-removebg-preview.png",
  "/imagesUi/flowrtcnewnew-removebg-preview.png"

 ]
  useEffect(() => {
 
    let Interval = setInterval(() => {
       
       setcounter((prev)=>(prev+1)%backgrounds.length)
      
      
    }, 30000);
    return()=>  clearInterval(Interval)
    

  }, []);  
  

  //   useEffect(() => {
 
  //   let Interval = setInterval(() => {
       
  //      setImage((prev)=>(prev+1)%Image.length)
      
      
  //   }, 30000);
  //   return()=>  clearInterval(Interval)
    

  // }, []);  
//background:  backgrounds[counter] "#0a0a0a"  
 



  return (
    <div className="container" style={{background:backgrounds[counter]}}>

        <div className="overview-data">

            <div className="global-navigation">
               <img src={Image[countImage]} onClick={()=>Nav("/")} style={{cursor:"pointer"}}/>
                {/* {image ?  <img src="/imagesUi/flowrtcnew-removebg-preview.png"/> :   <img src="/imagesUi/flowrtcnewnew-removebg-preview.png"/>} */}
                <a href="https://github.com/devtunis" rel="noopener noreferrer" target="_blank">GitHub</a>
            </div>
           <div className="containerOverview">
              <div className="information">
                <span className="info-color">OVERVIEW</span>
                 <Link to={""}>◆ Get Started</Link>
                <span className="info-color">View</span>
                <Link to={"VisualizeView"}>⬢ VisualizeView </Link>
                 <span className="info-color">API</span>
                
                   <NavLink  to="IceConfiguration" style={({ isActive }) => ({  textDecoration: isActive ? "underline" : "none"})} > ⚙ IceConfiguration  </NavLink>
                   <NavLink  to="initializeVideoSession" style={({ isActive }) => ({  textDecoration: isActive ? "underline" : "none"})} > ⬢ initializeVideoSession()  </NavLink>
                   <NavLink  style={({ isActive }) => ({  textDecoration: isActive ? "underline" : "none"})} to={"initializeNewVideoSession"}>⧉ initializeNewVideoSession()</NavLink >
                   <NavLink  style={({ isActive }) => ({  textDecoration: isActive ? "underline" : "none"})}  to={"CreateOffer"}>✚ createOffer()</NavLink >
                   <NavLink  style={({ isActive }) => ({  textDecoration: isActive ? "underline" : "none"})} to={"CreateAnswer"}>↩ createAnswer()</NavLink >
                   <NavLink  style={({ isActive }) => ({  textDecoration: isActive ? "underline" : "none"})} to={"handleIceCandidate"}>◎ handleIceCandidate</NavLink >
                   <NavLink  style={({ isActive }) => ({  textDecoration: isActive ? "underline" : "none"})} to={"HandleRemoteIceCandidate"}>☍ handleRemoteIceCandidate()</NavLink>
                   <NavLink  style={({ isActive }) => ({  textDecoration: isActive ? "underline" : "none"})} to={"closeConnection"}> ⨯ closeConnection()</NavLink >
                   <NavLink  style={({ isActive }) => ({  textDecoration: isActive ? "underline" : "none"})} to={"establishConnection"}>⛓ establishConnection()</NavLink >
                    <NavLink  style={({ isActive }) => ({  textDecoration: isActive ? "underline" : "none"})} to={"allEvents"}>● allEvents </NavLink >

                   
                   <NavLink  style={({ isActive }) => ({  textDecoration: isActive ? "underline" : "none"})} to={"Community"}>☰ Community</NavLink >
                
                 <details>  
                  <summary>  <span className="info-color" style={{cursor:"pointer"}}>● Common Issue</span> </summary> 
                  <NavLink  style={({ isActive }) => ({  textDecoration: isActive ? "underline" : "none",marginLeft:"10px"})} to={"Camera_not_initialized"}><span style={{color:"#4493F8"}}>#1</span> createOffer</NavLink >
                  <br/>
                  <NavLink  style={({ isActive }) => ({  textDecoration: isActive ? "underline" : "none",marginLeft:"10px"})} to={"AnswerOfferIssue"}><span style={{color:"#4493F8"}}>#2</span> answer</NavLink >
                   <br/>
                  <NavLink  style={({ isActive }) => ({  textDecoration: isActive ? "underline" : "none",marginLeft:"10px"})} to={"establishConnectionError"}><span style={{color:"#4493F8"}}>#3</span> establishConnection</NavLink >
                 </details>
               
                 <details className="doc-image">
                 <summary>  <span className="info-color" style={{cursor:"pointer"}}>● Tutorials</span> </summary>
                    <NavLink  className={"xdoc"} style={({ isActive }) => ({  textDecoration: isActive ? "underline" : "none",marginLeft:"10px"})} to={"vanilla"}><span style={{color:"#4493F8"}}>#1</span> Vanill Js <img src="/OrganizationImage/JavaScript.png"/></NavLink >
                     <NavLink className={"xdoc"} style={({ isActive }) => ({  textDecoration: isActive ? "underline" : "none",marginLeft:"10px"})} to={"establishConnectionError"}><span style={{color:"#4493F8"}}>#2</span> React   <img src="/OrganizationImage/React.png"/></NavLink >     
                     <NavLink className={"xdoc"} style={({ isActive }) => ({  textDecoration: isActive ? "underline" : "none",marginLeft:"10px"})} to={"establishConnectionError"}><span style={{color:"#4493F8"}}>#3</span> FullStackApp   <img src="/OrganizationImage/Node.js.png"/> <img src="/OrganizationImage/React.png"/> <img src="/OrganizationImage/JavaScript.png"/> </NavLink >   
                     
                </details>    
              <span className="info-color" style={{cursor:"pointer"}}>● pushVideos</span>
              </div>
              <div className="rightinforamtion">
                <Outlet/>
              </div>
              
           </div>
        </div>
          
    </div>
  )
}

export default Doc