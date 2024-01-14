import { spaceShip } from "./export";

interface BattleSpaceShip extends spaceShip {
  weapons: number
}

let estrelaDaMorte: BattleSpaceShip = {
   name: "estrela da morte",
   pilot: "anakin do mal",
   speed: 1000,
   weapons: 2034 
}