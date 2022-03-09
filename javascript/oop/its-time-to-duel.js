class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, resilience) {
        super (name, cost);
        this["power"] = power;
        this["resilience"] = resilience;
    }
    attack(target) {
        target.resilience -= this.power;
    }

    showStats() {
        console.log(`Name: ${this.name}, Cost: ${this.cost}, Power: ${this.power}, Resilience: ${this.resilience}`)
    }
}

class Effect extends Card {
    constructor (name, cost, text, stat, magnitude) {
        super (name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play(target) {
        if( target instanceof Unit ) {
            target[this.stat] += this.magnitude
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);

const hardAlgo = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", +3);
const unhandledProRej = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
const pairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", "power", +2);

hardAlgo.play(redBeltNinja);
redBeltNinja.showStats();

unhandledProRej.play(redBeltNinja);
redBeltNinja.showStats();

pairProgramming.play(redBeltNinja);
redBeltNinja.showStats();

redBeltNinja.attack(blackBeltNinja);
blackBeltNinja.showStats();
