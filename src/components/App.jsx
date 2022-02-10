import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function EmojiInfo(props){
  return(
    <Entry 
      key={props.id}
      emoji={props.emoji}
      name={props.name} 
      description={props.meaning} 
    />
  );
}


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(EmojiInfo)} </dl>
    </div>
  );
}

export default App;
