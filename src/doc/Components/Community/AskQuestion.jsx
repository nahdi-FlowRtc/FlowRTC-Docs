import React, { useState } from "react";
import "./askQuestion.css";
import axios from "axios";

function AskQuestion({handel,passdata}) {
   
  const [formData, setFormData] = useState({
    question: "",
    tags: "",
    author: ""
  });

 
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const D = new Date()
    try{
         await axios.post("https://backend-w648.onrender.com/tutorials/upload",{
        "question": formData.question,
        "Author": formData.author,
        "seen": 0,
        "up": 0,
        "users": ["https://picsum.photos/200/300?1"],
        "tags":formData.tags.split(",")
        })
        passdata({question:formData.question,Author:formData.author,seen:0,up:0,users:["https://picsum.photos/200/300?1"]
            ,tags:formData.tags.split(",") ,updatedAt : D.toString()
        })
         
       handel(false)
    }catch(err){
        console.log(err)
    }
  };
  const [f,setf] = useState(null)

  return (
    <div className="ask-wrapper" style={{display:f && "none"}} >
      <form className="ask-card" onSubmit={handleSubmit}>
        <h2 style={{color:"red"}} onClick={()=>{setf(true) 
             handel(false)
        }}>X</h2>
        <h2 className="ask-title">Ask a Question</h2>

        <div className="ask-field">
          <label className="ask-label">Question</label>
          <textarea
            className="ask-input"
            name="question"
            placeholder="Write your question..."
            value={formData.question}
            onChange={handleChange}
            required
          />
        </div>

        <div className="ask-field">
          <label className="ask-label">Tags</label>
          <input
            className="ask-input"
            type="text"
            name="tags"
            placeholder="bug, webrtc, nodejs"
            value={formData.tags}
            onChange={handleChange}
          />
        </div>

        <div className="ask-field">
          <label className="ask-label">Author</label>
          <input
            className="ask-input"
            type="text"
            name="author"
            placeholder="Your name"
            value={formData.author}
            onChange={handleChange}
          />
        </div>

        <button className="ask-submit">Post Question 🚀</button>
      </form>
    </div>
  );
}

export default AskQuestion;