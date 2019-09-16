import {state} from './state.js';
import {clickOnMonster, clickOnEquipmentInInventary, clickOnEquipmentOnField, clickOnTargetPanel, clickOnField} from './eventFunctions';
import {createEntity, createEquipment} from './createFunctions.js';

const rootNode = document.getElementById('root');
const mapNode = document.getElementById('map');
const mainPanel = document.getElementById('main-panel');
const inventary = document.getElementById('inventary');

export function initializeGame() {
	mainPanel.style.left = 5 + 'px';
	mainPanel.style.top = rootNode.offsetHeight - 100 - mainPanel.offsetHeight + 'px';

	targetPanel.style.left = document.documentElement.offsetWidth / 2 - targetPanel.offsetWidth / 2 + 'px';

	mapNode.style.transform = `translate(-${mapNode.offsetWidth / 2 - rootNode.offsetWidth / 2}px, -${mapNode.offsetHeight / 2 - rootNode.offsetHeight / 2}px)`;

	state.translateMap.x = -(mapNode.offsetWidth / 2 - rootNode.offsetWidth / 2);
	state.translateMap.y = -(mapNode.offsetHeight / 2 - rootNode.offsetHeight / 2);

	window.addEventListener('click', e => {
		if (e.target.closest('.inventary')) {
			if (e.target.closest('.equipment')) {
				clickOnEquipmentInInventary(e, e.target.closest('.equipment'));
			}
			return;
		}
		if (e.target.closest('#map')) {
			if (e.target.closest('.equipment')) {
				clickOnEquipmentOnField(e.target.closest('.equipment'));
				return;
			}
			if (e.target.closest('.monster')) {
				clickOnMonster(e.target.closest('.monster'));
				return;
			}
			clickOnField(e);
			return;
		}
		if (e.target.closest('.target-panel')) {
			clickOnTargetPanel();
			return;
		}
		if (e.target.closest('.main-panel-button')) {
			if (e.target.classList.contains('inventary-button')) {
				if (inventary.classList.contains('visible')) {
					inventary.classList.remove('visible');
					inventary.classList.add('invisible');
				} else {
					inventary.classList.remove('invisible');
					inventary.classList.add('visible');
				}
			}
		}
	});

	window.addEventListener('selectstart', e => {
		e.preventDefault();
	});
};

export function initializeMap() {
	createEquipment('shield', 0, 200, 200);
	createEquipment('armor', 1, 100, 200);
	createEquipment('armor', 2, 100, 100);
	createEquipment('boots', 3, 300, 100);
	createEquipment('pants', 2, 300, 200);
	createEquipment('sword', 3, 300, 400);
	createEquipment('helmet', 3, 200, 100);

	createEntity('monster', 3, 'nego', 200, 300);

	createEntity('character', 1, 'tursum', mapNode.offsetWidth / 2, mapNode.offsetHeight / 2);
};