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
  const counter1 = <Counter1 name={counterName} />;
  const counter2 = <Counter2 name={counterName} />;
  return (
    <section>
      <h2>Counters</h2>
      <section>
        Counter
        {counterName === "One" ? counter1 : counter2}
      </section>
    </section>
  );
}

function Counter1({ name }) {
  return (
    <article>
      <h2>Counter {name}</h2>
      <p>Clicked 1 times</p>
      <button className="button" type="button">
        Click Me!
      </button>
    </article>
  );
}

function Counter2({ name }) {
  return (
    <article>
      <h2>Counter {name}</h2>
      <p>Times Clicked : 1</p>
      <button className="button" type="button">
        Click Me!
      </button>
    </article>
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
