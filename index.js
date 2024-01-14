"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const setPilot = (newPilot, spaceship) => __awaiter(void 0, void 0, void 0, function* () {
    spaceship.pilot = newPilot;
});
const accelerate = (targetSpeed, spaceship) => __awaiter(void 0, void 0, void 0, function* () {
    spaceship.speed = targetSpeed;
});
const sendToMission = (spaceship) => __awaiter(void 0, void 0, void 0, function* () {
    spaceship.inMission = true;
});
const spaceship = {
    name: '',
    pilot: '',
    speed: 0,
    inMission: false
};
const pilot = 'Morgs';
spaceship.name = 'Estrela da morte';
setPilot(pilot, spaceship);
accelerate(100, spaceship);
sendToMission(spaceship);
