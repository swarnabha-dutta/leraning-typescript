type ChaiOrder = {
    type: string;
    sugar: number;
    strong: boolean
}


function makeChai(order: ChaiOrder) {
    console.log(order);
}


function serveChai(order: ChaiOrder) {
    console.log(order);
}


type TeaRecepie = {
    water: number;
    milk: number;
}


// class MasalaChai implements TeaRecepie{
//     water = 100;
//     milk= 57;
// }


interface CupSize{
    size: "small" | "large";
}



class Chai implements CupSize{
    size: "small" | "large"= "large";
}

// Give Error 

// type Response = { okay: boolean } | { okay: boolean };

// class myRes implements Response{
//     okay: boolean = true;
// }

type TeaType = "masala" | "ginger" | "lemon";


function orderChai(t: TeaType) {
    console.log(t);
}

type BaseChai = { teaLeaves: number };
type Extra = { masala: number };


type MasalaChai = BaseChai & Extra;


const cup: MasalaChai = {
    teaLeaves: 1,
    masala:3
}