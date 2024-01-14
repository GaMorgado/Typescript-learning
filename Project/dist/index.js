"use strict";
function sendToMission(name, captain) {
    const spaceship = {
        name,
        captain,
        speed: 20,
        inMission: true,
        crew: []
    };
    alert(`Nave ${spaceship.name} foi enviada para missão`);
    return spaceship;
}
function accelerate(targetSpeed, spaceship) {
    if (spaceship.speed > targetSpeed) {
        alert('Reduzindo velocidade');
    }
    else if (spaceship.speed < targetSpeed) {
        alert('Acelerando a nave');
    }
    else {
        alert('Mantendo a velocidade');
    }
}
const spaceshipName = prompt('Digite o nome da nave');
const spaceshipCaptain = prompt('Insira o nome do capitão da nave');
const currentShip = sendToMission(spaceshipName, spaceshipCaptain);
const wantedSpeed = Number(prompt('Digite a velocidade que você deseja que a nave alcance'));
accelerate(wantedSpeed, currentShip);
