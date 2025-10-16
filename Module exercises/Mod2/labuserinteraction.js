let contacts = [{
name: "Maxwell Wright",
phone: "(0191) 719 6495",
email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
name: "Raja Villarreal",
phone: "0866 398 2895",
email: "posuere.vulputate@sed.com"
}, {
name: "Helen Richards",
phone: "0800 1111",
email: "libero@convallis.edu"

},
{
    name:prompt("Name:"),
    phone:prompt("Phone number:"),
    email:prompt("Email:")
}];

alert(contacts[3].name+" "+contacts[3].phone+" "+contacts[3].email);
let confrim=confirm("Is this correct?");
confrim=confrim ? "correct":"false";
console.log(confrim);

let last = contacts.length - 1;

console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
console.log(contacts[3]);