import {state} from './state.js';
import {animateClick} from './animateFunctions.js';

const rootNode = document.getElementById('root');
const mapNode = document.getElementById('map');

let character = state.characters[0];

export function clickOnMonster(monster) {
	let character = state.characters[0];
	if (!character.isAlive) return;
	if (character.battleTarget && character.battleTarget.elem == monster) {
		character.isAttacking = true;
	} else {
		character.battleTarget = state.monsters[state.monsters.findIndex(x => x.id == monster.id.slice(1))];
	}
};

export function clickOnEquipmentInInventary(e, equipment) {
	let character = state.characters[0];
	if (!character.isAlive) return;
	let item = state.items[equipment.id.slice(1)];
	if (item.isWearing) {
		character.unwear(item);
		return;
	}
	if (item.minLvl <= character.lvl) {
		if (character.wearing[item.type]) {
			character.unwear(character.wearing[item.type]);
			character.wear(item);
		} else {
			character.wear(item);
		}
	}
};

export function clickOnEquipmentOnField(equipment) {
	let character = state.characters[0];
	if (!character.isAlive) return;
	character.stopAttack(true);
	character.pickTarget = state.items[equipment.id.slice(1)];
};

export function clickOnTargetPanel() {
	let character = state.characters[0];
	if (!character.isAlive) return;
	character.pickTarget = null;
	character.isAttacking = true;
};

export function clickOnField(e) {
	let character = state.characters[0];
	if (!character.isAlive) return;

	character.stopAttack(true);
	character.stopPicking();
	character.moveTo({x: e.clientX - state.translateMap.x, y: e.clientY - state.translateMap.y});
	animateClick(e.clientX - state.translateMap.x, e.clientY - state.translateMap.y);
};