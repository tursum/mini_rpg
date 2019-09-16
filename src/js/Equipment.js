import {db} from './db.js';

export class Equipment {
	constructor(type, model, x, y, elem, id) {
		this.hp = db.items[type + 's'][model].hp || 0;
		this.attackPower = db.items[type + 's'][model].attackPower || 0;
		this.attackSpeed = db.items[type + 's'][model].attackSpeed || 0;
		this.minLvl = db.items[type + 's'][model].minLvl;
		this.bgi = db.items[type + 's'][model].bgi;

		this.type = type;
		this.x = x;
		this.y = y;
		this.width = 10;
		this.height = 10;
		this.elem = elem;
		this.model = model;
		this.id = id;

		this.isWearing = false;
		this.isInInventary = (x == null && y == null);
	}
};