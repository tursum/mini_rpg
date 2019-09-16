import {state} from './state.js';

function findDistance(first, second) {
	let x = first.x - second.x;
	let y = first.y - second.y;

	let thicksX = first.width / 2 + second.width / 2;
	let thicksY = first.height / 2 + second.height / 2;

	let hypotenuse = Math.sqrt(x * x + y * y);

	let distanceX = hypotenuse - thicksX;
	let distanceY = hypotenuse - thicksY;

	return {x: distanceX, y: distanceY};
}

function updateMonster(monster, frequency) {
	state.characters.forEach(character => {
		let distance = findDistance(character, monster);

		if (distance.x < 50 && distance.y < 50 && character.isAlive && !monster.battleTarget) { // живой персонаж в зоне агра
			monster.battleTarget = character;
			monster.isAttacking = true;
		}
	});

	if (monster.isAttacking) {
		if (!monster.battleTarget.isAlive) { // ...и он умер
			monster.stopAttack(true);
			monster.stop();
			monster.battleTarget = null;
		} else { // ...и он все еще живой
			monster.moveTo(monster.battleTarget);

			let distance = findDistance(monster, monster.battleTarget);

			if (distance.x < 10 && distance.y < 10) { // ...в зоне удара
				monster.attack();
			} else { // ...вне зоны удара
				monster.stopAttack(false);
				monster.step(frequency);
			}	
		}
	}
} // updateMonster()

function updateCharacter(character, frequency) {
	if (character.pickTarget) {
		character.moveTo(character.pickTarget);

		let distance = findDistance(character, character.pickTarget);

		if (distance.x < 2 && distance.y < 2) {
			character.stop();
			character.pick(character.pickTarget);
		}
	}

	if (!character.isAttacking) {
		if (Math.abs(character.x - character.newX) > 3 || Math.abs(character.y - character.newY) > 3) {
			character.step(frequency);
		}	
	}

	if (character.battleTarget) {
		if (character.isAttacking) { // Если мы кого-то бьем
			if (!character.battleTarget.isAlive) { // ...и он умер
				character.stopAttack(true);
				character.stop();
				character.battleTarget = null;
			} else { // ...и он все еще живой
				character.moveTo(character.battleTarget);

				let distance = findDistance(character, character.battleTarget);

				if (distance.x < 12 && distance.y < 12) { // ...в зоне удара
					character.attack();
				} else { // ...вне зоны удара
					character.stopAttack(false);
					character.step(frequency);
				}	
			}
		} else {
			if (!character.battleTarget.isAlive) {
				character.battleTarget = null;
			}
		}
	}	
} // updateCharacter()

export function update(frequency) {
	state.monsters.forEach(monster => {
		updateMonster(monster, frequency);
	});

	state.characters.forEach(character => {
		updateCharacter(character, frequency);
	});
};