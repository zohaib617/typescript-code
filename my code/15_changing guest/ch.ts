/*Changing Guest List: You just heard that one of your guests can’t make the
dinner, so you need to send out a new set of invitations. You’ll have to think of
someone else to invite.


*/


let GuestList:string[] = ["Kamran", "Irfan", "Asif"];

let GuestNotAtand:string="Asif";
console.log(`Unfortunately Mr ${GuestNotAtand} can't make it dinner.`);


let newGuest:string="Naveed";
console.log(`Mr ${newGuest} plesure to join us`);
GuestList[GuestList.indexOf(GuestNotAtand)] = newGuest;


for (let i = 0; i < GuestList.length; i++) {
console.log("Mr",GuestList[i],"You Are Invited To Dinner");
}
