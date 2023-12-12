import Undead from "../classes/Undead";

test("Undead creation", () => {
    const undead = new Undead("undead");
    const correct = {name: "undead", type: "Undead", health: 100, level: 1, atack: 25, defence: 25};
    expect(undead).toEqual(correct);
});