import Daemon from "../classes/Daemon";

test("Daemon creation", () => {
    const daemon = new Daemon("daemon");
    const correct = {name: "daemon", type: "Daemon", health: 100, level: 1, atack: 10, defence: 40};
    expect(daemon).toMatchObject(correct);
});