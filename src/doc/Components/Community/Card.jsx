 
 

const Card = ({item ,pass}) => {
    function tags(name){
        return(
             <div className="bute">
            <span class="material-symbols-outlined">arrow_upward</span> 
            <span>{name}</span>
            </div>
        )
    }

  

  return (
    <div className="card">
        <div className="leftside">

            <div className="top">
            <span className="material-symbols-outlined">arrow_upward</span> 
            <span>{item.up}</span>
            </div>
                   
            <div className="top">
               <span onClick={()=>pass(item._id)} >X</span> 
            </div>

            <div className="stuffQuestion">
                <p>{item.question}</p>

                 <div className="containertool">
                {item.tags.map((item)=>tags(item))}  
                   <p className="grey-color">{item.Author} asked {item.updatedAt.substring(0,item.updatedAt.indexOf("T"))}</p>
                 </div>
                 
            </div>
        </div>
        <div className="rightside">
            <div className="imagesRightSide">
                
                {item.users.map((item)=><img src={item}/>)}
             
            </div>
            <div className="seenerQuestions">
             <img src="/iconsvg/user.svg"/>
             <span>{item.seen}</span>
            </div>
        </div>
    </div>
  )
}

export default Card