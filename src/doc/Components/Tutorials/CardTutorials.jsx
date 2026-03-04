 
import "./CardTutorials.css"
const CardTutorials = ({videoImage,description,infoSteps}) => {
  return (
    <div className='CardTutorials'>
        <section className='video-section'>
            <div className="video-section-image">
                <img src={videoImage} alt='webrtc' loading='lazy'/>
                <img src='../public/tutorials/icon/play.png' alt='play' loading='lazy'/>
            </div>
        </section>

        <section className='description-section'>
             <div className="random-info">{description}</div>
             <div className="text-description-section">Short explantion text here ..</div>
             <div className="steps-description-section">Steps</div>
             <div className="steps-description-params">
                <div className="inforamtion">
                    <img src="../public/tutorials/icon/point.png"/>
                    <h3>Intialize Peer</h3>
                </div>
                {infoSteps.map((item)=> <>
                  <div className="inforamtion">
                    <img src="../public/tutorials/icon/point.png"/>
                    <h3>{item}</h3>
                </div>
                </>)}
             </div>
           
        </section>
    </div>
  )
}

export default CardTutorials