import {db} from './db.js';
import {state} from './state.js';
import {animateAttack, animateDamage, removeMonster} from './animateFunctions';

const inventaryActive = document.getElementById('inventary-active');
const inventaryPassive = document.getElementById('inventary-passive');

export class Entity {
	constructor(type, lvl, name, x, y, elem, width, height) {
		this.newX = undefined;
		this.newY = undefined;
		this.angle = 0;
		this.battleTarget = null;
		this.isAttacking = false;
		this.isAlive = true;
		this.pickTarget = null;
		this.timer = null;
		
		this.type = type;
		this.lvl = lvl;
		this.name = name;
		this.x = x;
		this.y = y;
		this.elem = elem;
		this.width = width;
		this.height = height;

		this.currentHp = db[type + 's'][lvl - 1].hp;
		this.maxHp = db[type + 's'][lvl - 1].hp;
		this.attackPower = db[type + 's'][lvl - 1].attackPower;
		this.attackSpeed = db[type + 's'][lvl - 1].attackSpeed;
		this.speed = db[type + 's'][lvl - 1].speed;
		this.inventaryMax = db[type + 's'][lvl - 1].inventaryMax;
		this.inventary = db[type + 's'][lvl - 1].inventary;
		this.wearing = db[type + 's'][lvl - 1].wearing;

		this.id = state[type + 's'].length;
	}

	moveTo(target) {
		this.newX = target.x;
		this.newY = target.y;

		let dx = this.newX - this.x;
		let dy = this.newY - this.y;

		this.angle = Math.atan2(dy, dx);
	}

	step(frequency) {
		let velX = Math.cos(this.angle);
		let velY = Math.sin(this.angle);

		this.x += velX * this.speed * frequency;
		this.y += velY * this.speed * frequency;
	}

	stop() {
		this.newX = this.x;
		this.newY = this.y;
	}

	attack() {
		if (!this.timer) {
			this.timer = setInterval(() => {
				this.battleTarget.currentHp -= this.attackPower;
				if (!this.battleTarget.battleTarget) {
					this.battleTarget.battleTarget = this;
				}
				if (this.battleTarget.currentHp <= 0) {
					this.battleTarget.die();
				}
				animateAttack(this.elem);
				animateDamage(this.battleTarget, this.attackPower);
			}, this.attackSpeed);
		}		
	}

	stopAttack(check) {
		if (this.timer) {
			clearInterval(this.timer);
			this.timer = null;
		}
		this.isAttacking = !check;
	}

	pick(item) {
		if (this.inventary.length < this.inventaryMax) {
			this.inventary.push(item);
			inventaryPassive.appendChild(item.elem);
			item.isInInventary = true;
			item.x = undefined;
			item.y = undefined;
			item.elem.classList.remove('outside');
			item.elem.classList.add('inside');
		}
		this.stopPicking();
	}

	stopPicking() {
		if (this.pickTarget) this.pickTarget = null;
	}

	wear(item) {
		let cell = inventaryActive.querySelector(`.${item.type}-cell`);

		item.isWearing = true;
		this.wearing[item.type] = item;
		this.currentHp += item.hp || 0;
		this.maxHp += item.hp || 0;
		this.attackPower += item.attackPower || 0;
		this.attackSpeed += item.attackSpeed || 0;
		this.speed += item.speed || 0;
		cell.appendChild(item.elem);
	}

	unwear(item) {
		inventaryPassive.appendChild(item.elem);
		this.currentHp -= item.hp || 0;
		this.maxHp -= item.hp || 0;
		this.attackPower -= item.attackPower || 0;
		this.attackSpeed -= item.attackSpeed || 0;
		this.speed -= item.speed || 0;
		item.isWearing = false;
		this.wearing[item.type] = null;
	}

	die() {
		this.stop();
		this.stopAttack(true);
		this.stopPicking();
		this.isAlive = false;
		if (this.type == 'monster') {
			removeMonster(this);
			setTimeout(() => {
				state.monsters.splice(state.monsters.findIndex(x => x.id == this.id), 1);	
			}, 500);
		}
	}
};