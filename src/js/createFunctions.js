import {state} from './state.js';
import {Entity} from './Entity.js';
import {Equipment} from './Equipment.js';

const mapNode = document.getElementById('map');

export function createEntity(type, lvl, name, x, y) {
	let newElem = document.createElement('div');
	newElem.className = `entity ${type} lvl${lvl} ${name} alive`;
	newElem.id = `${type.slice(0, 1)}${state[type + 's'].length}`;

	let inner = document.createElement('div');
	inner.className = 'entity-inner';
	newElem.appendChild(inner);

	let indicator = document.createElement('div');
	indicator.className = 'indicator';
	newElem.appendChild(indicator);

	let identify = document.createElement('div');
	identify.className = 'identify';
	identify.innerHTML = `${lvl}. ${name}`;
	newElem.appendChild(identify);

	mapNode.appendChild(newElem);

	let newEntity = new Entity(type, lvl, name, x, y, newElem, newElem.offsetWidth, newElem.offsetHeight);
	state[type + 's'].push(newEntity);

	return newEntity;
};

export function createEquipment(type, id, x, y) {
	let newElem = document.createElement('div');
	newElem.id = `i${state.items.length}`;
	newElem.className = `equipment ${type}`;
	newElem.classList.add(x ? 'outside' : 'inside');
	if (x && y) {
		mapNode.appendChild(newElem);
		newElem.style.left = x - newElem.offsetWidth / 2 + 'px';
		newElem.style.top = y - newElem.offsetHeight / 2 + 'px';
	} else {
		inventaryPassive.appendChild(newElem);
	}

	let newEquipment = new Equipment(type, id, x, y, newElem, state.items.length);
	state.items.push(newEquipment);

	newElem.classList.add(newEquipment.bgi);

	return newEquipment;
};