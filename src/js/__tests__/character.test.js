import Bowman from "../classes/Bowman";
import Character from "../classes/Character";
import Daemon from "../classes/Daemon";
import Magician from "../classes/Magician";
import Swordsman from "../classes/Swordsman";
import Undead from "../classes/Undead";
import Zombie from "../classes/Zombie";

// Функция-помощник для сравнения объектов типа Character 
function compare(obj1, obj2) {
    if (obj1.level === obj2.level && obj1.level &&
        obj1.health === obj2.health && obj1.health &&
        obj1.atack === obj2.atack && obj1.atack &&
        obj1.defence === obj2.defence &&
        obj1.type === obj2.type &&
        obj1.name === obj2.name) {
            return true
        }
    return false;
}

// Персонажи, которые понадобятся нам для тестирования
let bowman = new Bowman("bowman");
let daemon = new Daemon("daemon");
let magician = new Magician("magician");
let swordsman = new Swordsman("swordsman");
let undead = new Undead("undead");
let zombie = new Zombie("zombie");

// Проверим начальные характеристики
test.each([
    [bowman, {name: "bowman", type: "Bowman", health: 100, level: 1, atack: 25, defence: 25}],
    [daemon, {name: "daemon", type: "Daemon", health: 100, level: 1, atack: 10, defence: 40}],
    [magician, {name: "magician", type: "Magician", health: 100, level: 1, atack: 10, defence: 40}],
    [swordsman, {name: "swordsman", type: "Swordsman", health: 100, level: 1, atack: 40, defence: 10}],
    [undead, {name: "undead", type: "Undead", health: 100, level: 1, atack: 25, defence: 25}],
    [zombie, {name: "zombie", type: "Zombie", health: 100, level: 1, atack: 40, defence: 10}],
])('atack', (character, state) => {
    const result = character;
    expect(JSON.stringify(result)).toBe(JSON.stringify(state));
});

// Проверка повышения уровня зомби
test("zombie levelup", () => {
    zombie.levelUp();

    const expected = 
        {
            name: 'zombie', 
            type: "Zombie",
            health: 100,
            atack: 48,
            defence: 12,
            level: 2
        };

    const result = zombie;

    expect(compare(expected, result)).toBeTruthy();
});

// Проверка получения урона лучником
test("bowman damage 5", () => {
    const expected = 96.25;
    bowman.damage(5);
    const result = bowman.health;
    expect(result).toBeCloseTo(expected);
});

// Проверка на неправильное введение имени персонажа
test("long name", () => {
    expect(() => new Undead("Mikhail Romanovich")).toThrow(Error);
});

// Проверка на тип персонажа
test("invalid type", () => {
    expect(() => new Character("Jonny", "Archer")).toThrow(Error);
});

// Проверка на повышение уровня уже мертвого персонажа
test("dead character levelup", () => {
    magician.damage(100000);
    expect(() => magician.levelUp()).toThrow(Error);
})