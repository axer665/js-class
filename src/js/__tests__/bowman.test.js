import Bowman from "../classes/Bowman";

test("Bowman creation", () => {
    const bowman = new Bowman("bowman");
    const correct = {name: "bowman", type: "Bowman", health: 100, level: 1, atack: 25, defence: 25};
    expect(bowman).toEqual(correct);
});