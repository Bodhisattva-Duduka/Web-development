/* 

Adjectives:
Crazy
Amazing
Fire

Shop Name:
Engine
Foods
Garments

Another word:
Bros
Limited
Hub

*/


const ad = {
    ad1 : "Crazy",
    ad2 : "Amazing",
    ad3 : "Fire"
}

const Sh = {
    Sh1 : " Engine",
    Sh2 : " Foods",
    Sh3 : " Garments"
}

const an = {
    an1 : " Bros",
    an2 : " Limited",
    an3 : " Hub"
}

let name1 = "";
let name2 = "";
let name3 = "";

for (const key in ad) {
    name1 = ad[key];

    for (const key2 in Sh) {
        name2 = Sh[key2];

        for (const key3 in an){
            name3 = an[key3];

            console.log(name1 + name2 + name3)

        }   
    }
}
