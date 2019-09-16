import {state} from './state.js';

const rootNode = document.getElementById('root');
const mapNode = document.getElementById('map');
const targetPanel = document.getElementById('targetPanel');
const targetPanelLvl = targetPanel.children[0];
const targetPanelName = targetPanel.children[1];
const targetPanelHp = targetPanel.children[2].firstElementChild;

function positionMap() {
	let character = state.characters[0];

	let centerScreenX = rootNode.offsetWidth / 2;
	let centerScreenY = rootNode.offsetHeight / 2;

	let characterCoords = character.elem.getBoundingClientRect();

	let characterLeft = characterCoords.left + character.elem.offsetWidth / 2;
	let characterTop = characterCoords.top + character.elem.offsetHeight / 2;

	if (characterLeft < centerScreenX && character.x > centerScreenX) {
		state.translateMap.x += (centerScreenX - characterLeft);
	}
	if (characterLeft > centerScreenX && character.x < mapNode.offsetWidth - centerScreenX) {
		state.translateMap.x -= (characterLeft - centerScreenX);
	}	

	if (characterTop < centerScreenY && character.y > centerScreenY) {
		state.translateMap.y += (centerScreenY - characterTop);
	}
	if (characterTop > centerScreenY && character.y < mapNode.offsetHeight - centerScreenY) {
		state.translateMap.y -= (characterTop - centerScreenY);
	}

	mapNode.style.transform = `translate(${state.translateMap.x}px, ${state.translateMap.y}px)`;
}

function countHp(entity) {
	return entity.currentHp / (entity.maxHp / 100);
}

function renderEntity(entity) {
	entity.elem.style.left = `${entity.x - entity.width / 2}px`;
	entity.elem.style.top = `${entity.y - entity.height / 2}px`;
	entity.elem.children[0].style.transform = `rotate(${(entity.angle + 1.5707) * 57.2958}deg)`;
	entity.elem.children[1].style.background = `linear-gradient(to right, red ${countHp(entity)}%, grey ${countHp(entity)}%)`;

	if (!entity.isAlive) {
		entity.elem.classList.remove('alive');
		entity.elem.classList.add('dead');
	}
}

function renderTargetPanel() {
	let character = state.characters[0];
	if (character.battleTarget) {
		targetPanel.style.display = 'grid';
		if (targetPanelLvl.innerHTML != character.battleTarget.lvl) targetPanelLvl.innerHTML = character.battleTarget.lvl;
		if (targetPanelName.innerHTML != character.battleTarget.name) targetPanelName.innerHTML = character.battleTarget.name;
		targetPanelHp.style.background = `linear-gradient(to right, red ${countHp(character.battleTarget)}%, grey ${countHp(character.battleTarget)}%)`;
	} else {
		targetPanel.style.display = 'none';
	}
}

export function render() {
	state.characters.forEach(character => renderEntity(character));
	state.monsters.forEach(monster => renderEntity(monster));
	renderTargetPanel();
	positionMap();
};