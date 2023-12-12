import Zombie from "../classes/Zombie";

test("Zombie creation", () => {
    const zombie = new Zombie("zombie");
    const correct = {name: "zombie", type: "Zombie", health: 100, level: 1, atack: 40, defence: 10};
    expect(zombie).toEqual(correct);
});