 
import Card from "./Card"
import "./Community.css"
const Community = () => {
      const questionsData = [
  {
    id: 1,
    votes: 17,
    title: "Remote Stream not rendering in production",
    tags: ["bug", "webrtc"],
    author: "gaith",
    time: "2 hours ago",
    views: 5,
    images: [
      "https://picsum.photos/200/300?1",
      "https://picsum.photos/200/300?2",
      "https://picsum.photos/200/300?3",
    ],
  },

  {
    id: 2,
    votes: 9,
    title: "React useEffect running twice",
    tags: ["react", "hooks"],
    author: "power",
    time: "5 hours ago",
    views: 12,
    images: [
      "https://picsum.photos/200/300?4",
      "https://picsum.photos/200/300?5",
    ],
  },

  {
    id: 3,
    votes: 25,
    title: "WebRTC ICE candidate not working",
    tags: ["webrtc", "network"],
    author: "sami",
    time: "1 day ago",
    views: 40,
    images: [
      "https://picsum.photos/200/300?6",
    ],
  },

  {
    id: 4,
    votes: 4,
    title: "CSS Grid layout breaking on mobile",
    tags: ["css", "responsive"],
    author: "ahmed",
    time: "30 minutes ago",
    views: 3,
    images: [
      "https://picsum.photos/200/300?7",
      "https://picsum.photos/200/300?8",
    ],
  },

  {
    id: 5,
    votes: 14,
    title: "Node.js API slow in production",
    tags: ["nodejs", "backend"],
    author: "lina",
    time: "6 hours ago",
    views: 22,
    images: [
      "https://picsum.photos/200/300?9",
      "https://picsum.photos/200/300?10",
    ],
  },
];


  return (
    <div className="Community">
      
       <div className="search"> <input type="text" placeholder="search about your question ...."/></div>
             
          {questionsData.map((item)=><Card key={item.id} item={item}/>)}
                   
    </div>
  )
}

export default Community