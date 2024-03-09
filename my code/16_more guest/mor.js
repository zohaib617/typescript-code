//16. More Guests: You just found a bigger dinner table, so now more space is
//available. Think of three more guests to invite to dinner.
var GuestList = ["kamran", "Irfan", "Asif"];
for (var i = 0; i < GuestList.length; ++i) {
    console.log("Mr ".concat(GuestList[i], " you are invited to dinner. "));
}
var NotAttand = "Asif";
console.log("\n Unfortunately ".concat(NotAttand, " can't make it dinner."));
var NewGuest = "Naveed";
GuestList[GuestList.indexOf(NotAttand)] = NewGuest;
console.log("\n Good News ! we found a new biger dinner table");
// Add one new guest to the beginning of the array
GuestList.unshift("Zohaib");
// Add one new guest to the middle of the array
GuestList.splice(Math.floor(GuestList.length / 2), 0, "Izhaar");
// Use push() to add one new guest to the end of the list
GuestList.push("shah saab");
console.log("\n Update Invitation Message:");
for (var i = 0; i < GuestList.length; ++i) {
    console.log("Mr ".concat(GuestList[i], " you are invited to dinner. "));
}
