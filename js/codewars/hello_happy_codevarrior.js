function Warrior(n) {
    var name = n;
    this.name = function (n) {
        if (n) name = n;
        return name;
    }
}

Warrior.prototype.toString = function () {
    return "Hi! my name's " + this.name();
};


var albert = new Warrior("Al");
var boris = new Warrior("Boris");

console.log(albert.toString());