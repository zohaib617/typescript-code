//16. More Guests: You just found a bigger dinner table, so now more space is
//available. Think of three more guests to invite to dinner.


let GuestList:string[]=["kamran", "Irfan", "Asif"];
for(let i =0; i <GuestList.length; ++i) {
    console.log(`Mr ${GuestList[i]} you are invited to dinner. `);
}

let NotAttand:string="Asif";

console.log(`\n Unfortunately ${NotAttand} can't make it dinner.`);
let NewGuest:string="Naveed";
GuestList[GuestList.indexOf(NotAttand)]=NewGuest;
console.log("\n Good News ! we found a new biger dinner table");


// Add one new guest to the beginning of the array
GuestList.unshift("Zohaib");

// Add one new guest to the middle of the array
GuestList.splice(Math.floor(GuestList.length / 2), 0, "Izhaar");


// Use push() to add one new guest to the end of the list
GuestList.push("shah saab");


console.log("\n Update Invitation Message:");

for(let i =0; i <GuestList.length; ++i) {
    console.log(`Mr ${GuestList[i]} you are invited to dinner. `);
}


