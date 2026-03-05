 
import { useState } from "react"
import "./CardTutorials.css"
const CardTutorials = ({videoImage,description,infoSteps,linkvideo,shortExplantion}) => {
  
  const [Show_Content,SetShowContent] = useState(false)
  return (
    <div className='CardTutorials'>
        <section className='video-section'>
            <div className="video-section-image">
               
                {Show_Content ? 
                 <video controls   muted preload="metadata" width="100%" height={"100%"}>
                  <source  src={linkvideo} type="video/mp4" />
                </video> :   <> <img src={videoImage} alt='webrtc' loading='lazy'/>
                <img src='../public/tutorials/icon/play.png'
                onClick={()=>SetShowContent(true)}
                alt='play' loading='lazy'/></>
                
                }
                
            </div>
        </section>

        <section className='description-section'>
             <div className="random-info">{description}</div>
             <div className="text-description-section">{shortExplantion}</div>
             <div className="steps-description-section">Steps</div>
             <div className="steps-description-params">
                
                {infoSteps.map((item)=> <>
                  <div className="inforamtion">
                    <img src="../public/tutorials/icon/point.png"/>
                    <h5>{item}</h5>
                </div>
                </>)}
             </div>
           
        </section>
    </div>
  )
}

export default CardTutorials