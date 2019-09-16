export const db = {
	characters: [
		{hp: 100, attackPower: 10, attackSpeed: 500, speed: 2, inventaryMax: 50, inventary: [], wearing: {
			helmet: null, sword: null, armor: null, shield: null, boots: null
		}}
	],
	monsters: [
		{hp: 20, attackPower: 2, attackSpeed: 100, speed: 1},
		{hp: 40, attackPower: 3, attackSpeed: 200, speed: 1},
		{hp: 60, attackPower: 5, attackSpeed: 300, speed: 1}
	],
	items: {
		helmets: [
			{hp: 10, minLvl: 1, bgi: 'pickelhaube-grey'},
			{hp: 12, minLvl: 1, bgi: 'pickelhaube-olive'},
			{hp: 14, minLvl: 1, bgi: 'pickelhaube-orange'},
			{hp: 16, minLvl: 1, bgi: 'pickelhaube-red'},
		],
		swords: [
			{attackPower: 1, attackSpeed: -100, minLvl: 1, bgi: 'gladius-grey'},
			{attackPower: 2, attackSpeed: -150, minLvl: 1, bgi: 'gladius-olive'},
			{attackPower: 3, attackSpeed: -70, minLvl: 1, bgi: 'gladius-orange'},
			{attackPower: 20, attackSpeed: -100, minLvl: 1, bgi: 'gladius-red'},
		],
		armors: [
			{hp: 10, minLvl: 1, bgi: 'chest-armor-grey'},
			{hp: 20, minLvl: 1, bgi: 'chest-armor-olive'},
			{hp: 30, minLvl: 1, bgi: 'chest-armor-orange'},
			{hp: 40, minLvl: 1, bgi: 'chest-armor-red'},
		],
		shields: [
			{hp: 10, minLvl: 1, bgi: 'round-shield-grey'},
			{hp: 20, minLvl: 1, bgi: 'round-shield-olive'},
			{hp: 30, minLvl: 1, bgi: 'round-shield-orange'},
			{hp: 40, minLvl: 1, bgi: 'round-shield-red'},
		],
		pantss: [ // лишняя 's', чтобы искать по [type + 's']
			{hp: 7, minLvl: 1, bgi: 'leg-armor-grey'},
			{hp: 9, minLvl: 1, bgi: 'leg-armor-olive'},
			{hp: 11, minLvl: 1, bgi: 'leg-armor-orange'},
			{hp: 13, minLvl: 1, bgi: 'leg-armor-red'},
		],
		bootss: [ // лишняя 's', чтобы искать по [type + 's']
			{hp: 2, minLvl: 1, bgi: 'steeltoe-boots-grey'},
			{hp: 4, minLvl: 1, bgi: 'steeltoe-boots-olive'},
			{hp: 6, minLvl: 1, bgi: 'steeltoe-boots-orange'},
			{hp: 8, minLvl: 1, bgi: 'steeltoe-boots-red'},
		]
	}
};