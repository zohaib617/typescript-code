/*17. Shrinking Guest List: You just found out that your new dinner
 table won’t arrive in time for the dinner, and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that
 prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list.
 Each time you pop a name from your list, print
a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list,
 letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list.
Print your list to make sure you actually have an empty list at the end
of your program.
*/
var guestList = ["kamran", "Irfan", "Asif"];
var NotAttand = "Asif";
console.log("Unfortunately Mr ".concat(NotAttand, " can't make it dinner "));
var NewGuest = "Imran";
guestList[guestList.indexOf(NotAttand)] = NewGuest;
for (var i = 0; i < guestList.length; i++) {
    console.log("Mr ".concat(guestList[i], ", \nyou are invited to dinner "));
}
// Found a bigger dinner table 
console.log("Good News!  we found bigger dinner table");
// add bigging of array
guestList.unshift("Zohaib");
// add misddle of array
guestList.splice(Math.floor(guestList.length / 2), 0, "Izhaar");
// add  end of array
guestList.push("Shah");
console.log("\nUpdate invitation");
for (var i = 0; i < guestList.length; i++) {
    console.log("Mr ".concat(guestList[i], " \nyou are invite to dinner"));
}
console.log("\nUnfortunetly we can invite only two people for dinner");
while (guestList.length > 2) {
    var removedgust = guestList.pop();
    if (removedgust) {
        console.log("Sorry, ".concat(removedgust, " we can't invite you to dinner "));
    }
}
console.log("\nInvitation Remaing Two guest:");
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ",\nyou are still invited to dinner"));
}
guestList.pop();
guestList.pop();
console.log("\nFinel Empty Guest List", guestList);
