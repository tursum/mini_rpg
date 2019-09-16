/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/Entity.js":
/*!**************************!*\
  !*** ./src/js/Entity.js ***!
  \**************************/
/*! exports provided: Entity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Entity\", function() { return Entity; });\n/* harmony import */ var _db_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db.js */ \"./src/js/db.js\");\n/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state.js */ \"./src/js/state.js\");\n/* harmony import */ var _animateFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animateFunctions */ \"./src/js/animateFunctions.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar inventaryActive = document.getElementById('inventary-active');\nvar inventaryPassive = document.getElementById('inventary-passive');\nvar Entity =\n/*#__PURE__*/\nfunction () {\n  function Entity(type, lvl, name, x, y, elem, width, height) {\n    _classCallCheck(this, Entity);\n\n    this.newX = undefined;\n    this.newY = undefined;\n    this.angle = 0;\n    this.battleTarget = null;\n    this.isAttacking = false;\n    this.isAlive = true;\n    this.pickTarget = null;\n    this.timer = null;\n    this.type = type;\n    this.lvl = lvl;\n    this.name = name;\n    this.x = x;\n    this.y = y;\n    this.elem = elem;\n    this.width = width;\n    this.height = height;\n    this.currentHp = _db_js__WEBPACK_IMPORTED_MODULE_0__[\"db\"][type + 's'][lvl - 1].hp;\n    this.maxHp = _db_js__WEBPACK_IMPORTED_MODULE_0__[\"db\"][type + 's'][lvl - 1].hp;\n    this.attackPower = _db_js__WEBPACK_IMPORTED_MODULE_0__[\"db\"][type + 's'][lvl - 1].attackPower;\n    this.attackSpeed = _db_js__WEBPACK_IMPORTED_MODULE_0__[\"db\"][type + 's'][lvl - 1].attackSpeed;\n    this.speed = _db_js__WEBPACK_IMPORTED_MODULE_0__[\"db\"][type + 's'][lvl - 1].speed;\n    this.inventaryMax = _db_js__WEBPACK_IMPORTED_MODULE_0__[\"db\"][type + 's'][lvl - 1].inventaryMax;\n    this.inventary = _db_js__WEBPACK_IMPORTED_MODULE_0__[\"db\"][type + 's'][lvl - 1].inventary;\n    this.wearing = _db_js__WEBPACK_IMPORTED_MODULE_0__[\"db\"][type + 's'][lvl - 1].wearing;\n    this.id = _state_js__WEBPACK_IMPORTED_MODULE_1__[\"state\"][type + 's'].length;\n  }\n\n  _createClass(Entity, [{\n    key: \"moveTo\",\n    value: function moveTo(target) {\n      this.newX = target.x;\n      this.newY = target.y;\n      var dx = this.newX - this.x;\n      var dy = this.newY - this.y;\n      this.angle = Math.atan2(dy, dx);\n    }\n  }, {\n    key: \"step\",\n    value: function step(frequency) {\n      var velX = Math.cos(this.angle);\n      var velY = Math.sin(this.angle);\n      this.x += velX * this.speed * frequency;\n      this.y += velY * this.speed * frequency;\n    }\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      this.newX = this.x;\n      this.newY = this.y;\n    }\n  }, {\n    key: \"attack\",\n    value: function attack() {\n      var _this = this;\n\n      if (!this.timer) {\n        this.timer = setInterval(function () {\n          _this.battleTarget.currentHp -= _this.attackPower;\n\n          if (!_this.battleTarget.battleTarget) {\n            _this.battleTarget.battleTarget = _this;\n          }\n\n          if (_this.battleTarget.currentHp <= 0) {\n            _this.battleTarget.die();\n          }\n\n          Object(_animateFunctions__WEBPACK_IMPORTED_MODULE_2__[\"animateAttack\"])(_this.elem);\n          Object(_animateFunctions__WEBPACK_IMPORTED_MODULE_2__[\"animateDamage\"])(_this.battleTarget, _this.attackPower);\n        }, this.attackSpeed);\n      }\n    }\n  }, {\n    key: \"stopAttack\",\n    value: function stopAttack(check) {\n      if (this.timer) {\n        clearInterval(this.timer);\n        this.timer = null;\n      }\n\n      this.isAttacking = !check;\n    }\n  }, {\n    key: \"pick\",\n    value: function pick(item) {\n      if (this.inventary.length < this.inventaryMax) {\n        this.inventary.push(item);\n        inventaryPassive.appendChild(item.elem);\n        item.isInInventary = true;\n        item.x = undefined;\n        item.y = undefined;\n        item.elem.classList.remove('outside');\n        item.elem.classList.add('inside');\n      }\n\n      this.stopPicking();\n    }\n  }, {\n    key: \"stopPicking\",\n    value: function stopPicking() {\n      if (this.pickTarget) this.pickTarget = null;\n    }\n  }, {\n    key: \"wear\",\n    value: function wear(item) {\n      var cell = inventaryActive.querySelector(\".\".concat(item.type, \"-cell\"));\n      item.isWearing = true;\n      this.wearing[item.type] = item;\n      this.currentHp += item.hp || 0;\n      this.maxHp += item.hp || 0;\n      this.attackPower += item.attackPower || 0;\n      this.attackSpeed += item.attackSpeed || 0;\n      this.speed += item.speed || 0;\n      cell.appendChild(item.elem);\n    }\n  }, {\n    key: \"unwear\",\n    value: function unwear(item) {\n      inventaryPassive.appendChild(item.elem);\n      this.currentHp -= item.hp || 0;\n      this.maxHp -= item.hp || 0;\n      this.attackPower -= item.attackPower || 0;\n      this.attackSpeed -= item.attackSpeed || 0;\n      this.speed -= item.speed || 0;\n      item.isWearing = false;\n      this.wearing[item.type] = null;\n    }\n  }, {\n    key: \"die\",\n    value: function die() {\n      var _this2 = this;\n\n      this.stop();\n      this.stopAttack(true);\n      this.stopPicking();\n      this.isAlive = false;\n\n      if (this.type == 'monster') {\n        Object(_animateFunctions__WEBPACK_IMPORTED_MODULE_2__[\"removeMonster\"])(this);\n        setTimeout(function () {\n          _state_js__WEBPACK_IMPORTED_MODULE_1__[\"state\"].monsters.splice(_state_js__WEBPACK_IMPORTED_MODULE_1__[\"state\"].monsters.findIndex(function (x) {\n            return x.id == _this2.id;\n          }), 1);\n        }, 500);\n      }\n    }\n  }]);\n\n  return Entity;\n}();\n;\n\n//# sourceURL=webpack:///./src/js/Entity.js?");

/***/ }),

/***/ "./src/js/Equipment.js":
/*!*****************************!*\
  !*** ./src/js/Equipment.js ***!
  \*****************************/
/*! exports provided: Equipment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Equipment\", function() { return Equipment; });\n/* harmony import */ var _db_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db.js */ \"./src/js/db.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\nvar Equipment = function Equipment(type, model, x, y, elem, id) {\n  _classCallCheck(this, Equipment);\n\n  this.hp = _db_js__WEBPACK_IMPORTED_MODULE_0__[\"db\"].items[type + 's'][model].hp || 0;\n  this.attackPower = _db_js__WEBPACK_IMPORTED_MODULE_0__[\"db\"].items[type + 's'][model].attackPower || 0;\n  this.attackSpeed = _db_js__WEBPACK_IMPORTED_MODULE_0__[\"db\"].items[type + 's'][model].attackSpeed || 0;\n  this.minLvl = _db_js__WEBPACK_IMPORTED_MODULE_0__[\"db\"].items[type + 's'][model].minLvl;\n  this.bgi = _db_js__WEBPACK_IMPORTED_MODULE_0__[\"db\"].items[type + 's'][model].bgi;\n  this.type = type;\n  this.x = x;\n  this.y = y;\n  this.width = 10;\n  this.height = 10;\n  this.elem = elem;\n  this.model = model;\n  this.id = id;\n  this.isWearing = false;\n  this.isInInventary = x == null && y == null;\n};\n;\n\n//# sourceURL=webpack:///./src/js/Equipment.js?");

/***/ }),

/***/ "./src/js/animateFunctions.js":
/*!************************************!*\
  !*** ./src/js/animateFunctions.js ***!
  \************************************/
/*! exports provided: animateClick, animateAttack, animateDamage, removeMonster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"animateClick\", function() { return animateClick; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"animateAttack\", function() { return animateAttack; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"animateDamage\", function() { return animateDamage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeMonster\", function() { return removeMonster; });\nvar mapNode = document.getElementById('map');\nfunction animateClick(x, y) {\n  var effect = document.createElement('div');\n  effect.className = 'animation-click';\n  mapNode.appendChild(effect);\n  effect.style.left = x - effect.offsetWidth / 2 + 'px';\n  effect.style.top = y - effect.offsetHeight / 2 + 'px';\n  setTimeout(function () {\n    mapNode.removeChild(effect);\n  }, 310);\n}\n;\nfunction animateAttack(parent) {\n  var effect = document.createElement('div');\n  effect.className = 'animation-attack';\n  parent.firstElementChild.appendChild(effect);\n  setTimeout(function () {\n    parent.firstElementChild.removeChild(effect);\n  }, 100);\n}\n;\nfunction animateDamage(target, attackPower) {\n  var attackMes = document.createElement('div');\n  attackMes.className = 'animation-damage';\n  attackMes.innerHTML = attackPower;\n  target.elem.appendChild(attackMes);\n  setTimeout(function () {\n    target.elem.removeChild(attackMes);\n  }, 700); // 700 чтобы даже при медленной атаке успевало проигрывать анимацию прежде чем исчезнуть\n}\n;\nfunction removeMonster(monster) {\n  setTimeout(function () {\n    monster.elem.style.transition = '.5s';\n    monster.elem.style.opacity = 0;\n    setTimeout(function () {\n      mapNode.removeChild(monster.elem);\n    }, 500);\n  }, 500);\n}\n;\n\n//# sourceURL=webpack:///./src/js/animateFunctions.js?");

/***/ }),

/***/ "./src/js/createFunctions.js":
/*!***********************************!*\
  !*** ./src/js/createFunctions.js ***!
  \***********************************/
/*! exports provided: createEntity, createEquipment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createEntity\", function() { return createEntity; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createEquipment\", function() { return createEquipment; });\n/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state.js */ \"./src/js/state.js\");\n/* harmony import */ var _Entity_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Entity.js */ \"./src/js/Entity.js\");\n/* harmony import */ var _Equipment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Equipment.js */ \"./src/js/Equipment.js\");\n\n\n\nvar mapNode = document.getElementById('map');\nfunction createEntity(type, lvl, name, x, y) {\n  var newElem = document.createElement('div');\n  newElem.className = \"entity \".concat(type, \" lvl\").concat(lvl, \" \").concat(name, \" alive\");\n  newElem.id = \"\".concat(type.slice(0, 1)).concat(_state_js__WEBPACK_IMPORTED_MODULE_0__[\"state\"][type + 's'].length);\n  var inner = document.createElement('div');\n  inner.className = 'entity-inner';\n  newElem.appendChild(inner);\n  var indicator = document.createElement('div');\n  indicator.className = 'indicator';\n  newElem.appendChild(indicator);\n  var identify = document.createElement('div');\n  identify.className = 'identify';\n  identify.innerHTML = \"\".concat(lvl, \". \").concat(name);\n  newElem.appendChild(identify);\n  mapNode.appendChild(newElem);\n  var newEntity = new _Entity_js__WEBPACK_IMPORTED_MODULE_1__[\"Entity\"](type, lvl, name, x, y, newElem, newElem.offsetWidth, newElem.offsetHeight);\n  _state_js__WEBPACK_IMPORTED_MODULE_0__[\"state\"][type + 's'].push(newEntity);\n  return newEntity;\n}\n;\nfunction createEquipment(type, id, x, y) {\n  var newElem = document.createElement('div');\n  newElem.id = \"i\".concat(_state_js__WEBPACK_IMPORTED_MODULE_0__[\"state\"].items.length);\n  newElem.className = \"equipment \".concat(type);\n  newElem.classList.add(x ? 'outside' : 'inside');\n\n  if (x && y) {\n    mapNode.appendChild(newElem);\n    newElem.style.left = x - newElem.offsetWidth / 2 + 'px';\n    newElem.style.top = y - newElem.offsetHeight / 2 + 'px';\n  } else {\n    inventaryPassive.appendChild(newElem);\n  }\n\n  var newEquipment = new _Equipment_js__WEBPACK_IMPORTED_MODULE_2__[\"Equipment\"](type, id, x, y, newElem, _state_js__WEBPACK_IMPORTED_MODULE_0__[\"state\"].items.length);\n  _state_js__WEBPACK_IMPORTED_MODULE_0__[\"state\"].items.push(newEquipment);\n  newElem.classList.add(newEquipment.bgi);\n  return newEquipment;\n}\n;\n\n//# sourceURL=webpack:///./src/js/createFunctions.js?");

/***/ }),

/***/ "./src/js/db.js":
/*!**********************!*\
  !*** ./src/js/db.js ***!
  \**********************/
/*! exports provided: db */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"db\", function() { return db; });\nvar db = {\n  characters: [{\n    hp: 100,\n    attackPower: 10,\n    attackSpeed: 500,\n    speed: 2,\n    inventaryMax: 50,\n    inventary: [],\n    wearing: {\n      helmet: null,\n      sword: null,\n      armor: null,\n      shield: null,\n      boots: null\n    }\n  }],\n  monsters: [{\n    hp: 20,\n    attackPower: 2,\n    attackSpeed: 100,\n    speed: 1\n  }, {\n    hp: 40,\n    attackPower: 3,\n    attackSpeed: 200,\n    speed: 1\n  }, {\n    hp: 60,\n    attackPower: 5,\n    attackSpeed: 300,\n    speed: 1\n  }],\n  items: {\n    helmets: [{\n      hp: 10,\n      minLvl: 1,\n      bgi: 'pickelhaube-grey'\n    }, {\n      hp: 12,\n      minLvl: 1,\n      bgi: 'pickelhaube-olive'\n    }, {\n      hp: 14,\n      minLvl: 1,\n      bgi: 'pickelhaube-orange'\n    }, {\n      hp: 16,\n      minLvl: 1,\n      bgi: 'pickelhaube-red'\n    }],\n    swords: [{\n      attackPower: 1,\n      attackSpeed: -100,\n      minLvl: 1,\n      bgi: 'gladius-grey'\n    }, {\n      attackPower: 2,\n      attackSpeed: -150,\n      minLvl: 1,\n      bgi: 'gladius-olive'\n    }, {\n      attackPower: 3,\n      attackSpeed: -70,\n      minLvl: 1,\n      bgi: 'gladius-orange'\n    }, {\n      attackPower: 20,\n      attackSpeed: -100,\n      minLvl: 1,\n      bgi: 'gladius-red'\n    }],\n    armors: [{\n      hp: 10,\n      minLvl: 1,\n      bgi: 'chest-armor-grey'\n    }, {\n      hp: 20,\n      minLvl: 1,\n      bgi: 'chest-armor-olive'\n    }, {\n      hp: 30,\n      minLvl: 1,\n      bgi: 'chest-armor-orange'\n    }, {\n      hp: 40,\n      minLvl: 1,\n      bgi: 'chest-armor-red'\n    }],\n    shields: [{\n      hp: 10,\n      minLvl: 1,\n      bgi: 'round-shield-grey'\n    }, {\n      hp: 20,\n      minLvl: 1,\n      bgi: 'round-shield-olive'\n    }, {\n      hp: 30,\n      minLvl: 1,\n      bgi: 'round-shield-orange'\n    }, {\n      hp: 40,\n      minLvl: 1,\n      bgi: 'round-shield-red'\n    }],\n    pantss: [// лишняя 's', чтобы искать по [type + 's']\n    {\n      hp: 7,\n      minLvl: 1,\n      bgi: 'leg-armor-grey'\n    }, {\n      hp: 9,\n      minLvl: 1,\n      bgi: 'leg-armor-olive'\n    }, {\n      hp: 11,\n      minLvl: 1,\n      bgi: 'leg-armor-orange'\n    }, {\n      hp: 13,\n      minLvl: 1,\n      bgi: 'leg-armor-red'\n    }],\n    bootss: [// лишняя 's', чтобы искать по [type + 's']\n    {\n      hp: 2,\n      minLvl: 1,\n      bgi: 'steeltoe-boots-grey'\n    }, {\n      hp: 4,\n      minLvl: 1,\n      bgi: 'steeltoe-boots-olive'\n    }, {\n      hp: 6,\n      minLvl: 1,\n      bgi: 'steeltoe-boots-orange'\n    }, {\n      hp: 8,\n      minLvl: 1,\n      bgi: 'steeltoe-boots-red'\n    }]\n  }\n};\n\n//# sourceURL=webpack:///./src/js/db.js?");

/***/ }),

/***/ "./src/js/eventFunctions.js":
/*!**********************************!*\
  !*** ./src/js/eventFunctions.js ***!
  \**********************************/
/*! exports provided: clickOnMonster, clickOnEquipmentInInventary, clickOnEquipmentOnField, clickOnTargetPanel, clickOnField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clickOnMonster\", function() { return clickOnMonster; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clickOnEquipmentInInventary\", function() { return clickOnEquipmentInInventary; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clickOnEquipmentOnField\", function() { return clickOnEquipmentOnField; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clickOnTargetPanel\", function() { return clickOnTargetPanel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clickOnField\", function() { return clickOnField; });\n/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state.js */ \"./src/js/state.js\");\n/* harmony import */ var _animateFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animateFunctions.js */ \"./src/js/animateFunctions.js\");\n\n\nvar rootNode = document.getElementById('root');\nvar mapNode = document.getElementById('map');\nvar character = _state_js__WEBPACK_IMPORTED_MODULE_0__[\"state\"].characters[0];\nfunction clickOnMonster(monster) {\n  var character = _state_js__WEBPACK_IMPORTED_MODULE_0__[\"state\"].characters[0];\n  if (!character.isAlive) return;\n\n  if (character.battleTarget && character.battleTarget.elem == monster) {\n    character.isAttacking = true;\n  } else {\n    character.battleTarget = _state_js__WEBPACK_IMPORTED_MODULE_0__[\"state\"].monsters[_state_js__WEBPACK_IMPORTED_MODULE_0__[\"state\"].monsters.findIndex(function (x) {\n      return x.id == monster.id.slice(1);\n    })];\n  }\n}\n;\nfunction clickOnEquipmentInInventary(e, equipment) {\n  var character = _state_js__WEBPACK_IMPORTED_MODULE_0__[\"state\"].characters[0];\n  if (!character.isAlive) return;\n  var item = _state_js__WEBPACK_IMPORTED_MODULE_0__[\"state\"].items[equipment.id.slice(1)];\n\n  if (item.isWearing) {\n    character.unwear(item);\n    return;\n  }\n\n  if (item.minLvl <= character.lvl) {\n    if (character.wearing[item.type]) {\n      character.unwear(character.wearing[item.type]);\n      character.wear(item);\n    } else {\n      character.wear(item);\n    }\n  }\n}\n;\nfunction clickOnEquipmentOnField(equipment) {\n  var character = _state_js__WEBPACK_IMPORTED_MODULE_0__[\"state\"].characters[0];\n  if (!character.isAlive) return;\n  character.stopAttack(true);\n  character.pickTarget = _state_js__WEBPACK_IMPORTED_MODULE_0__[\"state\"].items[equipment.id.slice(1)];\n}\n;\nfunction clickOnTargetPanel() {\n  var character = _state_js__WEBPACK_IMPORTED_MODULE_0__[\"state\"].characters[0];\n  if (!character.isAlive) return;\n  character.pickTarget = null;\n  character.isAttacking = true;\n}\n;\nfunction clickOnField(e) {\n  var character = _state_js__WEBPACK_IMPORTED_MODULE_0__[\"state\"].characters[0];\n  if (!character.isAlive) return;\n  character.stopAttack(true);\n  character.stopPicking();\n  character.moveTo({\n    x: e.clientX - _state_js__WEBPACK_IMPORTED_MODULE_0__[\"state\"].translateMap.x,\n    y: e.clientY - _state_js__WEBPACK_IMPORTED_MODULE_0__[\"state\"].translateMap.y\n  });\n  Object(_animateFunctions_js__WEBPACK_IMPORTED_MODULE_1__[\"animateClick\"])(e.clientX - _state_js__WEBPACK_IMPORTED_MODULE_0__[\"state\"].translateMap.x, e.clientY - _state_js__WEBPACK_IMPORTED_MODULE_0__[\"state\"].translateMap.y);\n}\n;\n\n//# sourceURL=webpack:///./src/js/eventFunctions.js?");

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state.js */ \"./src/js/state.js\");\n/* harmony import */ var _initializeFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initializeFunctions.js */ \"./src/js/initializeFunctions.js\");\n/* harmony import */ var _updateFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateFunctions */ \"./src/js/updateFunctions.js\");\n/* harmony import */ var _renderFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderFunctions */ \"./src/js/renderFunctions.js\");\n\n\n\n\n\n\nvar body = document.documentElement;\nvar rootNode = document.getElementById('root');\nvar mapNode = document.getElementById('map');\nvar mainPanel = document.getElementById('main-panel');\nvar inventary = document.getElementById('inventary');\nvar inventaryActive = document.getElementById('inventary-active');\nvar inventaryPassive = document.getElementById('inventary-passive');\nvar targetPanel = document.getElementById('targetPanel');\nvar targetPanelLvl = targetPanel.children[0];\nvar targetPanelName = targetPanel.children[1];\nvar targetPanelHp = targetPanel.children[2].firstElementChild;\nObject(_initializeFunctions_js__WEBPACK_IMPORTED_MODULE_1__[\"initializeGame\"])();\nObject(_initializeFunctions_js__WEBPACK_IMPORTED_MODULE_1__[\"initializeMap\"])();\nvar currentTime = 0;\nwindow.requestAnimationFrame(function step(time) {\n  var frequency = Math.floor((time - currentTime) / 13);\n  Object(_updateFunctions__WEBPACK_IMPORTED_MODULE_2__[\"update\"])(frequency);\n  Object(_renderFunctions__WEBPACK_IMPORTED_MODULE_3__[\"render\"])();\n  currentTime = time;\n  window.requestAnimationFrame(step);\n});\n\n//# sourceURL=webpack:///./src/js/game.js?");

/***/ }),

/***/ "./src/js/initializeFunctions.js":
/*!***************************************!*\
  !*** ./src/js/initializeFunctions.js ***!
  \***************************************/
/*! exports provided: initializeGame, initializeMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initializeGame\", function() { return initializeGame; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initializeMap\", function() { return initializeMap; });\n/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state.js */ \"./src/js/state.js\");\n/* harmony import */ var _eventFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventFunctions */ \"./src/js/eventFunctions.js\");\n/* harmony import */ var _createFunctions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createFunctions.js */ \"./src/js/createFunctions.js\");\n\n\n\nvar rootNode = document.getElementById('root');\nvar mapNode = document.getElementById('map');\nvar mainPanel = document.getElementById('main-panel');\nvar inventary = document.getElementById('inventary');\nfunction initializeGame() {\n  mainPanel.style.left = 5 + 'px';\n  mainPanel.style.top = rootNode.offsetHeight - 100 - mainPanel.offsetHeight + 'px';\n  targetPanel.style.left = document.documentElement.offsetWidth / 2 - targetPanel.offsetWidth / 2 + 'px';\n  mapNode.style.transform = \"translate(-\".concat(mapNode.offsetWidth / 2 - rootNode.offsetWidth / 2, \"px, -\").concat(mapNode.offsetHeight / 2 - rootNode.offsetHeight / 2, \"px)\");\n  _state_js__WEBPACK_IMPORTED_MODULE_0__[\"state\"].translateMap.x = -(mapNode.offsetWidth / 2 - rootNode.offsetWidth / 2);\n  _state_js__WEBPACK_IMPORTED_MODULE_0__[\"state\"].translateMap.y = -(mapNode.offsetHeight / 2 - rootNode.offsetHeight / 2);\n  window.addEventListener('click', function (e) {\n    if (e.target.closest('.inventary')) {\n      if (e.target.closest('.equipment')) {\n        Object(_eventFunctions__WEBPACK_IMPORTED_MODULE_1__[\"clickOnEquipmentInInventary\"])(e, e.target.closest('.equipment'));\n      }\n\n      return;\n    }\n\n    if (e.target.closest('#map')) {\n      if (e.target.closest('.equipment')) {\n        Object(_eventFunctions__WEBPACK_IMPORTED_MODULE_1__[\"clickOnEquipmentOnField\"])(e.target.closest('.equipment'));\n        return;\n      }\n\n      if (e.target.closest('.monster')) {\n        Object(_eventFunctions__WEBPACK_IMPORTED_MODULE_1__[\"clickOnMonster\"])(e.target.closest('.monster'));\n        return;\n      }\n\n      Object(_eventFunctions__WEBPACK_IMPORTED_MODULE_1__[\"clickOnField\"])(e);\n      return;\n    }\n\n    if (e.target.closest('.target-panel')) {\n      Object(_eventFunctions__WEBPACK_IMPORTED_MODULE_1__[\"clickOnTargetPanel\"])();\n      return;\n    }\n\n    if (e.target.closest('.main-panel-button')) {\n      if (e.target.classList.contains('inventary-button')) {\n        if (inventary.classList.contains('visible')) {\n          inventary.classList.remove('visible');\n          inventary.classList.add('invisible');\n        } else {\n          inventary.classList.remove('invisible');\n          inventary.classList.add('visible');\n        }\n      }\n    }\n  });\n  window.addEventListener('selectstart', function (e) {\n    e.preventDefault();\n  });\n}\n;\nfunction initializeMap() {\n  Object(_createFunctions_js__WEBPACK_IMPORTED_MODULE_2__[\"createEquipment\"])('shield', 0, 200, 200);\n  Object(_createFunctions_js__WEBPACK_IMPORTED_MODULE_2__[\"createEquipment\"])('armor', 1, 100, 200);\n  Object(_createFunctions_js__WEBPACK_IMPORTED_MODULE_2__[\"createEquipment\"])('armor', 2, 100, 100);\n  Object(_createFunctions_js__WEBPACK_IMPORTED_MODULE_2__[\"createEquipment\"])('boots', 3, 300, 100);\n  Object(_createFunctions_js__WEBPACK_IMPORTED_MODULE_2__[\"createEquipment\"])('pants', 2, 300, 200);\n  Object(_createFunctions_js__WEBPACK_IMPORTED_MODULE_2__[\"createEquipment\"])('sword', 3, 300, 400);\n  Object(_createFunctions_js__WEBPACK_IMPORTED_MODULE_2__[\"createEquipment\"])('helmet', 3, 200, 100);\n  Object(_createFunctions_js__WEBPACK_IMPORTED_MODULE_2__[\"createEntity\"])('monster', 3, 'nego', 200, 300);\n  Object(_createFunctions_js__WEBPACK_IMPORTED_MODULE_2__[\"createEntity\"])('character', 1, 'tursum', mapNode.offsetWidth / 2, mapNode.offsetHeight / 2);\n}\n;\n\n//# sourceURL=webpack:///./src/js/initializeFunctions.js?");

/***/ }),

/***/ "./src/js/renderFunctions.js":
/*!***********************************!*\
  !*** ./src/js/renderFunctions.js ***!
  \***********************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state.js */ \"./src/js/state.js\");\n\nvar rootNode = document.getElementById('root');\nvar mapNode = document.getElementById('map');\nvar targetPanel = document.getElementById('targetPanel');\nvar targetPanelLvl = targetPanel.children[0];\nvar targetPanelName = targetPanel.children[1];\nvar targetPanelHp = targetPanel.children[2].firstElementChild;\n\nfunction positionMap() {\n  var character = _state_js__WEBPACK_IMPORTED_MODULE_0__[\"state\"].characters[0];\n  var centerScreenX = rootNode.offsetWidth / 2;\n  var centerScreenY = rootNode.offsetHeight / 2;\n  var characterCoords = character.elem.getBoundingClientRect();\n  var characterLeft = characterCoords.left + character.elem.offsetWidth / 2;\n  var characterTop = characterCoords.top + character.elem.offsetHeight / 2;\n\n  if (characterLeft < centerScreenX && character.x > centerScreenX) {\n    _state_js__WEBPACK_IMPORTED_MODULE_0__[\"state\"].translateMap.x += centerScreenX - characterLeft;\n  }\n\n  if (characterLeft > centerScreenX && character.x < mapNode.offsetWidth - centerScreenX) {\n    _state_js__WEBPACK_IMPORTED_MODULE_0__[\"state\"].translateMap.x -= characterLeft - centerScreenX;\n  }\n\n  if (characterTop < centerScreenY && character.y > centerScreenY) {\n    _state_js__WEBPACK_IMPORTED_MODULE_0__[\"state\"].translateMap.y += centerScreenY - characterTop;\n  }\n\n  if (characterTop > centerScreenY && character.y < mapNode.offsetHeight - centerScreenY) {\n    _state_js__WEBPACK_IMPORTED_MODULE_0__[\"state\"].translateMap.y -= characterTop - centerScreenY;\n  }\n\n  mapNode.style.transform = \"translate(\".concat(_state_js__WEBPACK_IMPORTED_MODULE_0__[\"state\"].translateMap.x, \"px, \").concat(_state_js__WEBPACK_IMPORTED_MODULE_0__[\"state\"].translateMap.y, \"px)\");\n}\n\nfunction countHp(entity) {\n  return entity.currentHp / (entity.maxHp / 100);\n}\n\nfunction renderEntity(entity) {\n  entity.elem.style.left = \"\".concat(entity.x - entity.width / 2, \"px\");\n  entity.elem.style.top = \"\".concat(entity.y - entity.height / 2, \"px\");\n  entity.elem.children[0].style.transform = \"rotate(\".concat((entity.angle + 1.5707) * 57.2958, \"deg)\");\n  entity.elem.children[1].style.background = \"linear-gradient(to right, red \".concat(countHp(entity), \"%, grey \").concat(countHp(entity), \"%)\");\n\n  if (!entity.isAlive) {\n    entity.elem.classList.remove('alive');\n    entity.elem.classList.add('dead');\n  }\n}\n\nfunction renderTargetPanel() {\n  var character = _state_js__WEBPACK_IMPORTED_MODULE_0__[\"state\"].characters[0];\n\n  if (character.battleTarget) {\n    targetPanel.style.display = 'grid';\n    if (targetPanelLvl.innerHTML != character.battleTarget.lvl) targetPanelLvl.innerHTML = character.battleTarget.lvl;\n    if (targetPanelName.innerHTML != character.battleTarget.name) targetPanelName.innerHTML = character.battleTarget.name;\n    targetPanelHp.style.background = \"linear-gradient(to right, red \".concat(countHp(character.battleTarget), \"%, grey \").concat(countHp(character.battleTarget), \"%)\");\n  } else {\n    targetPanel.style.display = 'none';\n  }\n}\n\nfunction render() {\n  _state_js__WEBPACK_IMPORTED_MODULE_0__[\"state\"].characters.forEach(function (character) {\n    return renderEntity(character);\n  });\n  _state_js__WEBPACK_IMPORTED_MODULE_0__[\"state\"].monsters.forEach(function (monster) {\n    return renderEntity(monster);\n  });\n  renderTargetPanel();\n  positionMap();\n}\n;\n\n//# sourceURL=webpack:///./src/js/renderFunctions.js?");

/***/ }),

/***/ "./src/js/state.js":
/*!*************************!*\
  !*** ./src/js/state.js ***!
  \*************************/
/*! exports provided: state */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"state\", function() { return state; });\nvar state = {\n  characters: [],\n  monsters: [],\n  nips: [],\n  items: [],\n  translateMap: {\n    x: null,\n    y: null\n  }\n};\n\n//# sourceURL=webpack:///./src/js/state.js?");

/***/ }),

/***/ "./src/js/updateFunctions.js":
/*!***********************************!*\
  !*** ./src/js/updateFunctions.js ***!
  \***********************************/
/*! exports provided: update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"update\", function() { return update; });\n/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state.js */ \"./src/js/state.js\");\n\n\nfunction findDistance(first, second) {\n  var x = first.x - second.x;\n  var y = first.y - second.y;\n  var thicksX = first.width / 2 + second.width / 2;\n  var thicksY = first.height / 2 + second.height / 2;\n  var hypotenuse = Math.sqrt(x * x + y * y);\n  var distanceX = hypotenuse - thicksX;\n  var distanceY = hypotenuse - thicksY;\n  return {\n    x: distanceX,\n    y: distanceY\n  };\n}\n\nfunction updateMonster(monster, frequency) {\n  _state_js__WEBPACK_IMPORTED_MODULE_0__[\"state\"].characters.forEach(function (character) {\n    var distance = findDistance(character, monster);\n\n    if (distance.x < 50 && distance.y < 50 && character.isAlive && !monster.battleTarget) {\n      // живой персонаж в зоне агра\n      monster.battleTarget = character;\n      monster.isAttacking = true;\n    }\n  });\n\n  if (monster.isAttacking) {\n    if (!monster.battleTarget.isAlive) {\n      // ...и он умер\n      monster.stopAttack(true);\n      monster.stop();\n      monster.battleTarget = null;\n    } else {\n      // ...и он все еще живой\n      monster.moveTo(monster.battleTarget);\n      var distance = findDistance(monster, monster.battleTarget);\n\n      if (distance.x < 10 && distance.y < 10) {\n        // ...в зоне удара\n        monster.attack();\n      } else {\n        // ...вне зоны удара\n        monster.stopAttack(false);\n        monster.step(frequency);\n      }\n    }\n  }\n} // updateMonster()\n\n\nfunction updateCharacter(character, frequency) {\n  if (character.pickTarget) {\n    character.moveTo(character.pickTarget);\n    var distance = findDistance(character, character.pickTarget);\n\n    if (distance.x < 2 && distance.y < 2) {\n      character.stop();\n      character.pick(character.pickTarget);\n    }\n  }\n\n  if (!character.isAttacking) {\n    if (Math.abs(character.x - character.newX) > 3 || Math.abs(character.y - character.newY) > 3) {\n      character.step(frequency);\n    }\n  }\n\n  if (character.battleTarget) {\n    if (character.isAttacking) {\n      // Если мы кого-то бьем\n      if (!character.battleTarget.isAlive) {\n        // ...и он умер\n        character.stopAttack(true);\n        character.stop();\n        character.battleTarget = null;\n      } else {\n        // ...и он все еще живой\n        character.moveTo(character.battleTarget);\n\n        var _distance = findDistance(character, character.battleTarget);\n\n        if (_distance.x < 12 && _distance.y < 12) {\n          // ...в зоне удара\n          character.attack();\n        } else {\n          // ...вне зоны удара\n          character.stopAttack(false);\n          character.step(frequency);\n        }\n      }\n    } else {\n      if (!character.battleTarget.isAlive) {\n        character.battleTarget = null;\n      }\n    }\n  }\n} // updateCharacter()\n\n\nfunction update(frequency) {\n  _state_js__WEBPACK_IMPORTED_MODULE_0__[\"state\"].monsters.forEach(function (monster) {\n    updateMonster(monster, frequency);\n  });\n  _state_js__WEBPACK_IMPORTED_MODULE_0__[\"state\"].characters.forEach(function (character) {\n    updateCharacter(character, frequency);\n  });\n}\n;\n\n//# sourceURL=webpack:///./src/js/updateFunctions.js?");

/***/ }),

/***/ "./src/sass/style.sass":
/*!*****************************!*\
  !*** ./src/sass/style.sass ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/style.sass?");

/***/ }),

/***/ 0:
/*!****************************************************!*\
  !*** multi ./src/js/game.js ./src/sass/style.sass ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/js/game.js */\"./src/js/game.js\");\nmodule.exports = __webpack_require__(/*! ./src/sass/style.sass */\"./src/sass/style.sass\");\n\n\n//# sourceURL=webpack:///multi_./src/js/game.js_./src/sass/style.sass?");

/***/ })

/******/ });