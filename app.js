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
    {
      type: "h2",
      children: [
        {
          type: "text",
          value: "It Works!",
        },
      ],
    },
    {
      type: "aside",
      children: [
        {
          type: "p",
          children: [
            {
              type: "text",
              value: "Clicked : ",
            },
            {
              type: "strong",
              children: [
                {
                  type: "em",
                  children: [
                    {
                      type: "text",
                      value: "1 ",
                    },
                  ],
                },
              ],
            },
            {
              type: "text",
              value: "times",
            },
          ],
        },
        {
          type: "button",
          children: [
            {
              type: "text",
              value: "Click Me!",
            },
          ],
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

makeElements(markup, rootElement);
