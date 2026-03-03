 

const Card = ({item}) => {
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
            <span class="material-symbols-outlined">arrow_upward</span> 
            <span>{item.votes}</span>
            </div>
            <div className="stuffQuestion">
                <p>{item.title}</p>

                 <div className="containertool">
                  {item.tags.map((item)=>tags(item))}
                   <p className="grey-color">{item.author} asked {item.time}</p>
                 </div>
                 
            </div>
        </div>
        <div className="rightside">
            <div className="imagesRightSide">
                
                {item.images.map((item)=><img src={item}/>)}
             
            </div>
            <div className="seenerQuestions">
             <img src="/iconsvg/user.svg"/>
             <span>{item.views}</span>
            </div>
        </div>
    </div>
  )
}

export default Card