'use strict';

import {state} from './state.js';
import {initializeGame, initializeMap} from './initializeFunctions.js';
import {update} from './updateFunctions';
import {render} from './renderFunctions';

const body = document.documentElement;
const rootNode = document.getElementById('root');
const mapNode = document.getElementById('map');
const mainPanel = document.getElementById('main-panel');
const inventary = document.getElementById('inventary');
const inventaryActive = document.getElementById('inventary-active');
const inventaryPassive = document.getElementById('inventary-passive');
const targetPanel = document.getElementById('targetPanel');
const targetPanelLvl = targetPanel.children[0];
const targetPanelName = targetPanel.children[1];
const targetPanelHp = targetPanel.children[2].firstElementChild;

initializeGame();
initializeMap();

let currentTime = 0;

window.requestAnimationFrame(function step(time) {
	let frequency = Math.floor((time - currentTime) / 13);

	update(frequency);
	render();
	
	currentTime = time;
	window.requestAnimationFrame(step);
});