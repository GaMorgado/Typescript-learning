const setPilot = async (newPilot: string, spaceship: { name?: string; pilot: string; speed?: number; inMission?: boolean; }) => {
  spaceship.pilot = newPilot;
}

const accelerate = async (targetSpeed: number, spaceship: { name?: string; pilot?: string; speed: any; inMission?: boolean; }) => {
  spaceship.speed = targetSpeed;
}

const sendToMission = async (spaceship: { name?: string; pilot?: string; speed?: number; inMission: any; }) => {
  spaceship.inMission = true;
}

const spaceship = {
  name: '',
  pilot: '',
  speed: 0,
  inMission: false
}

const pilot = 'Morgs'

spaceship.name = 'Estrela da morte'

setPilot(pilot, spaceship)
accelerate(100, spaceship)
sendToMission(spaceship)

