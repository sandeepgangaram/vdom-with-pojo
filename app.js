const markup = {
  type: "main",
  children: [
    {
      type: "h2",
      children: [
        {
          type: "text",
          value: "Hello World!",
        },
      ],
    },
  ],
};

const rootElement = document.getElementById("root");

const makeElements = function (pojoElement, parentNode) {
  const newNode =
    pojoElement.type === "text"
      ? document.createTextNode(pojoElement.value)
      : document.createElement(pojoElement.type);

  if (pojoElement.children) {
    pojoElement.children.forEach((child) => {
      makeElements(child, newNode);
    });
  }

  console.log(newNode);

  parentNode.appendChild(newNode);
};
