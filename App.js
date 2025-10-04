import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1",{ id:"heading", xyz:"abc"},"hello world from react");
//          const root = ReactDOM.createRoot(document.getElementById("root"));
//          root.render(heading);


  // const parent = React.createElement("div",{id:"parent"}, React.createElement("div",{id:"child"},
  //  [ React.createElement("h1",{},"i am a h1tag"), React.createElement("h2",{},"i am a h2tag")]
  // ));


  const AppLayout = () => {
  return <div className ="app">
    Mansi
  </div>;
  }
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<AppLayout/>);



  