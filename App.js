// Manipulated the HTML DOM using Javscript
// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste Everyone";
// const root = document.getElementById("root");
// root.appendChild(heading);

// Manipulate the HTML DOM using React

// Create nested React Elements
import React from "react";
import ReactDOM from "react-dom/client";
const heading1 = React.createElement("h1", { id: "title1" }, "Heading 1 from parcel");
const heading2 = React.createElement("h2", { id: "title2" }, "Heading 2");
const containerX = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);
const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(containerX);

