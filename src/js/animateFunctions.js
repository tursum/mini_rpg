const mapNode = document.getElementById('map');

export function animateClick(x, y) {
	let effect = document.createElement('div');
	effect.className = 'animation-click';
	mapNode.appendChild(effect);
	effect.style.left = x - effect.offsetWidth / 2 + 'px';
	effect.style.top = y - effect.offsetHeight / 2 + 'px';
	setTimeout(() => {
		mapNode.removeChild(effect);
	}, 310);
};

export function animateAttack(parent) {
	let effect = document.createElement('div');
	effect.className = 'animation-attack';
	parent.firstElementChild.appendChild(effect);
	setTimeout(() => {
		parent.firstElementChild.removeChild(effect);
	}, 100);
};

export function animateDamage(target, attackPower) {
	let attackMes = document.createElement('div');
	attackMes.className = 'animation-damage';
	attackMes.innerHTML = attackPower;
	target.elem.appendChild(attackMes);
	setTimeout(() => {
		target.elem.removeChild(attackMes);
	}, 700); // 700 чтобы даже при медленной атаке успевало проигрывать анимацию прежде чем исчезнуть
};

export function removeMonster(monster) {
	setTimeout(() => {
		monster.elem.style.transition = '.5s';
		monster.elem.style.opacity = 0;
		setTimeout(() => {
			mapNode.removeChild(monster.elem);	
		}, 500);
	}, 500);
};