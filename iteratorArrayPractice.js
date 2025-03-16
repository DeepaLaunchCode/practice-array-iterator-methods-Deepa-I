// Task 1: Decode the Following Reversed Messages
function reverseMessage(message) {
    return message.split('').reverse().join('');
}

let message1 = reverseMessage(" !yako eb ll'uoy dna ,gniog peeK !sgnittes fo yteirav a ni slliks gnidoc esu osla nac uoY !ti teg ll'uoy ,tsisrep uoy fi tub ,tsrif ta drah mees yam gnidoC");
let message2 = reverseMessage("!ecitcarp htiw retteb teg ll‘uoy ,emit ekaT .tsrif ta drah leef lliw gnitirw edoc tuB");
let message3 = reverseMessage("!elpoep rehto morf tnereffid on era uoy ,elbuort evah uoy fI .lanoisseforp a ekil leef ot evah t'nod uoY");
let message4 = reverseMessage(".rettam llits yeht ,smargorp llams etirw ylno nac uoy fI .tnemom tcefrep eht rof tiaw t'noD .yadot trats tsuJ");

console.log("Decoded Messages:");
console.log(message1);
console.log(message2);
console.log(message3);
console.log(message4);

// Task 2: Write Your Own Reverse Messages
let myMessage1 = "Launchcode is my way to learn new skill !";
let myMessage2 = "You should meditate for at least 20 min.";
let myMessage3 = "Success comes from consistency and hard work.";

let reversedMyMessage1 = reverseMessage(myMessage1);
let reversedMyMessage2 = reverseMessage(myMessage2);
let reversedMyMessage3 = reverseMessage(myMessage3);

console.log("\nReversed Messages:");
console.log(reversedMyMessage1);
console.log(reversedMyMessage2);
console.log(reversedMyMessage3);