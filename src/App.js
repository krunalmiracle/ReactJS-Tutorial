import React from 'react'; //To work on the file like a reactJs
import './App.css'; //Stylesheet
import Tweet from './Tweet';//Import our created component
import {useState} from 'react';//Import to able to use state
function App() {

  //Function to handle the Add Msg using State on a immutable array
  const handleAdd = () => {
    console.log(inputTxt);
    const newMsg = {name:'John', message:inputTxt};
    console.log(msgs);
    const newMsgsArr = msgs.slice();
    newMsgsArr.push(newMsg);
    setMsg(newMsgsArr);
    console.log(msgs);
  }
  function inputTxtFunction(textIn) {
    inputTxt = textIn;
    console.log(inputTxt);
  }
  var inputTxt = '';
  const [msgs, setMsg] = useState([ //state Variable for Msg Array
    {name:'John', message:'Well Hello There!'},
    {name:'John', message:'Solo Talking Active :p'}
  ]);
  //event => setTitle(event.target.value)
  return (
    <div>
      <h1 className="TitleTxt">TweetBox</h1>
      {msgs.map(msg=>(
        <Tweet name={msg.name} message={msg.message} />
      ))}
      <input className="chat_inline" name="msgBox" type="text"onChange={event => inputTxtFunction(event.target.value)}></input>
      <button className="chat_inline" onClick={handleAdd}>Press Me!</button>
    </div>
  );
}
export default App;
