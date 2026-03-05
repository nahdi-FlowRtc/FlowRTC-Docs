import { useEffect, useRef} from "react"
function  UpdateUi(postion,imageSize,ContainerSize,f){
           postion+imageSize   >= ContainerSize && (f.current = true)
           postion   <= 0 && (f.current = false)
}
 
const Float = ({posx,posy,floatReft,Speed,image}) => {
      
      
      const position  = useRef({x:posx,y:posy})
      const imageRef = useRef(null)
      const LockWidth = useRef(false)
      const LockHeight = useRef(false)
     
        
      useEffect (()=>{
        
        let animationFrameId;
          const animate = () => {
            

          const ContainerSizeWidth = floatReft.current.getBoundingClientRect().width
          const imageSizeWidth   = imageRef.current.getBoundingClientRect().width  
           
           const ContainerSizeHeight = floatReft.current.getBoundingClientRect().height
           const imageSizeHeight   = imageRef.current.getBoundingClientRect().height  
           
          UpdateUi(position.current.x,imageSizeWidth,ContainerSizeWidth,LockWidth)
          LockWidth.current ?  position.current.x -= Speed.x :    position.current.x+=Speed.x

          UpdateUi(position.current.y,imageSizeHeight,ContainerSizeHeight,LockHeight)
          LockHeight.current ?  position.current.y -= Speed.y :    position.current.y+=Speed.y
          


                    

        imageRef.current.style.transform = `translate(${position.current.x}px, ${position.current.y}px)`;
       
           
      
           animationFrameId = requestAnimationFrame(animate);
          }
        animationFrameId = requestAnimationFrame(animate);
       return () => cancelAnimationFrame(animationFrameId);
    },[])
  return (
             <>  
           {/* <div ref={imageRefD}
              style={{color:"white"}}>Tool</div> */}
         <img 
            onMouseOver={()=>console.log(image)}
            src={image}
            ref={imageRef}
            style={{transition: "transform 0.1s ease"
              ,willChange: "transform",objectFit:"cover"
            }}
           />
           </>
  )
}

export default Float

//repo
// really thanks chat i sit with my self for  a while and i think if the i can chagnes the ui
// from the render what should be do ? so i close react in my mind and i start thinking like lder days 
// vanilla js and i i rember  how you can push something from js to the doom 
// and i rember this element.style.somethign and i   did it and it work and i make this coompoent
// reusable and i did function for make thing cleans and i pass 3 hours coding and trying stuff 
// really i dont feel the time pass and really it worth it  i learnd something good toady about the redner 
// and how should be get attention from it thanks really <3