const constantNode = document.getElementById("main");
constantNode.style.backgroundColor = "skyblue";
constantNode.addEventListener("mouseover", function () {
  this.style.backgroundColor = "grey";
});

const rootNode = document.getElementById("root");
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App));

function App() {
  return React.createElement(
    "section",
    null,
    React.createElement("h2", null, "Counters"),
    React.createElement("section", null, React.createElement(Counter))
  );
}

function Counter() {
  return React.createElement(
    "article",
    null,
    React.createElement("h2", null, "Counter"),
    React.createElement("p", null, "Clicked 1 times"),
    React.createElement("button", null, "Click Me!")
  );
}

// const articleElements = document.getElementsByTagName("aside");
// const articleElement = document.getElementsByTagName("aside")[0];
// console.log(articleElements);
// console.log(articleElement);

// setTimeout(() => {
//   const articleElements = document.getElementsByTagName("aside");
//   const articleElement = document.getElementsByTagName("aside")[0];
//   console.log(articleElements);
//   console.log(articleElement);
// }, 500);
