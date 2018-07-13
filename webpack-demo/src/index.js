import _ from 'lodash';
import './style.css';
import Icon from './icon.jpg';
import Data from './data.xml';
function component(){
	var element = document.createElement('div');
	// element.innerHTML = _.join(['Hello','webpack'],'');
	element.innerHTML = _.join(['I','Love','You'],' ');
	element.classList.add('hello');

	//add image to div
	let MyIcon = new Image();
	MyIcon.src=Icon;
	var str='zyg';

	element.appendChild(MyIcon);

	console.log(Data);

	return element;
}
document.body.appendChild(component());