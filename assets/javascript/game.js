//character names
var gang = ["King of the Rats", "The Enforcer", "The Golden God", "The Aluminum Monster", "Old Man"];

//character moves weak/strong
var moves = [
    ["Charlie Work", "Bird Law"],
    ["Sweet Jiu Jitsu", "Ocular Patdown"],
    ["The Implication", "D.E.N.N.I.S. System"],
    ["Talon Strike", "Dry Heave"],
    ["Gun", "Donkey Brains"]
];

//character avatars
var avatars = [
    ["charlie1.jpg", "charlie2.jpg"],
    ["mac1", "mac2"],
    ["dennis1", "dennis2"],
    ["dee1", "dee2"],
    ["frank1", "frank2"]
]
 //individualized character items and their respective icons
var item = ["Pocket Spaghetti", "Fight Milk", "Car Cereal", "Cosmo", "Wine in a Can"];
var itemPics = ["spaghetti.png", "milk.png", "cereal.png", "cosmo.png", "can.png"]
var character = {
    name: gang[characterSelector],
    weakMove: moves[characterSelector][1],
    strongMove: moves[characterSelector][2],
    hp = gangHP[characterSelector],
    xp = gangXP[characterSelector],
    attackCoeff = gangAttack[characterSelector]
}