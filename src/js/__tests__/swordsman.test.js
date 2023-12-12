import Swordsman from "../classes/Swordsman";

test("Swordsman creation", () => {
    const swordsman = new Swordsman("swordsman");
    const correct = {name: "swordsman", type: "Swordsman", health: 100, level: 1, atack: 40, defence: 10};
    expect(swordsman).toEqual(correct);
});