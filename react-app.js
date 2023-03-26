const constantNode = document.getElementById("main");
constantNode.style.backgroundColor = "skyblue";
constantNode.addEventListener("mouseover", function () {
  this.style.backgroundColor = "grey";
});

const rootNode = document.getElementById("root");
const root = ReactDOM.createRoot(rootNode);
let counterName = "One";
root.render(React.createElement(App));

function App() {
  return (
    <section>
      <h2>Counters</h2>
      <section>
        Counter
        <Counter1 />
      </section>
    </section>
  );
}

function Counter1() {
  return (
    <article>
      <h2>Counter One</h2>
      <p>Clicked 1 times</p>
      <button className="button" type="button">
        Click Me!
      </button>
    </article>
  );
}

function Counter2(props) {
  return React.createElement(
    "article",
    null,
    React.createElement("h2", null, "Counter Two ", props.name),
    React.createElement("p", null, "Counter Value is 1"),
    React.createElement(
      "button",
      { className: "button", type: "button" },
      "Click Me!"
    )
  );
}

function rerender() {
  console.log("Rerendering....");
  counterName = "Two";
  root.render(React.createElement(App));
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
