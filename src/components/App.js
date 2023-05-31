import React, { useEffect ,useState} from "react";
import "../styles/App.css";

var colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

const App = () => {
const[quote,setQuote]=useState("");
const [author,setAuthor] = useState("")
const [backgroundColor, setBackgroundColor] = useState("")

const fetchQuote=async()=>{
try{
const res= await fetch('https://api.quotable.io/random');
const data=await res.json();
setQuote(data.content);
setAuthor(data.author);
changeBackgroundColor();
}catch(error){
      console.log("Error fetching api" , error);
}


}

useEffect(()=>{
fetchQuote()  
},[])



const handleClick=()=>{
  fetchQuote()
}

const changeBackgroundColor=()=>{
const randomColor = colors[Math.floor(Math.random() * colors.length)]
  setBackgroundColor(randomColor);
}



    return (
      <div id="main" style={{backgroundColor}}>
       <div id="quote-box" className="quote-text">{quote}</div>
      
        <div className="quote-author">{author}</div>
          <button className="button" id="new-quote" onClick={handleClick}>New Quote</button>
          </div>
    );
};

export default App;
