import _ from 'lodash'
import printMe from './print.js'

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');
  
  element.innerHTML = _.join(['Hello', 'Webpack'], '');
  btn.innerHTML = '点击我查看console';

  btn.onclick = printMe;

  element.appendChild(btn)


  return element;
}

document.body.appendChild(component())