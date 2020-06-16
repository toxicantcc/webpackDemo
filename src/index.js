
// //  function getComponent() {
// //    return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
// //      const element = document.createElement('div');

// //      element.innerHTML = _.join(['Hello', 'webpack'], ' ');

// //      return element;

// //   }).catch(error => 'An error occurred while loading the component');
// //   }
// async function getComponent() {
//   const element = document.createElement('div');
//   const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');

//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//   return element;
// }


//  getComponent().then(component => {
//   document.body.appendChild(component);
//  })

import _ from 'lodash'

function component() {
  const element = document.createElement("div");
  const Button = document.createElement("button");
  const br = document.createElement("br");

  Button.innerHTML = "click me and look at the console";
  element.innerHTML = _.join(["Hello", "Webpack!"], "");
  element.appendChild(br);
  element.appendChild(Button);

  Button.onclick = (e) =>
    import(/*webpackChunkName: "prink" */ "./print.js").then((module) => {
      const print = module.default;

      print();
    });

  return element;
}

document.body.appendChild(component())