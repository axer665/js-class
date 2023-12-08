export default class Character {
    constructor(name, type) {
        let types = [
            "Bowman", 
            "Swordsman", 
            "Magician", 
            "Daemon", 
            "Undead", 
            "Zombie"
        ];
        console.log(name);
        if (name.length > 10 || name.length < 2) {
            throw new Error("Имя персонаджа не может быть короче 2 символов и длиннее 10");
        } 
        if (!types.includes(type)) {
            throw new Error("Тип персонажа ограничен значениями: Bowman, Swordsman, Magician, Daemon, Undead, Zombie");
        }
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.atack = 1;
        this.defence = 1;
    }

    levelUp = () => {
        if (this.health > 0) {
            this.level++;
            this.atack += Number(this.atack) * 0.2;
            this.defence += Number(this.defence) * 0.2;
            this.health = 100;
        } else {
            throw new Error("Нельзя повысить уровень умершего");
        }
    }

    damage = (points) => {
        if (this.health >= 0) {
            this.health -= points * (1 - Number(this.defence) / 100);
        }
    }
}