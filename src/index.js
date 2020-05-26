import _ from 'lodash'
import './index.css'
import img from './cat.jpg'
import Data from './data.xml'

function component() {
  var element = document.createElement('div');
  
  element.innerHTML = _.join(['Hello', 'Webpack'], '');
  // 添加css
  element.classList.add('head');

  // 添加图像
  var myImg = new Image();
  myImg.src = img;
  element.appendChild(myImg);

  // 控制栏查看数据
  console.log(Data);

  return element;
}

document.body.appendChild(component())