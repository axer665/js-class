import Bowerman from "./classes/Bowman";
import Daemon from "./classes/Daemon";
import Magician from "./classes/Magician";

let bowerman = new Bowerman("Kris");
let daemon = new Daemon("Baelzebuth");
let magician = new Magician("Merlin");

bowerman.levelUp();
daemon.damage(10);
magician.damage(110);

console.log(bowerman);
console.log(daemon);
console.log(magician);