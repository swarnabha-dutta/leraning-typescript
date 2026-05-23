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


class MasalaChai implements TeaRecepie{
    water = 100;
    milk= 57;
}


interface CupSize{
    size: "small" | "large";
}



class Chai implements CupSize{
    size: "small" | "large"= "large";
}



type Response = { okay: boolean } | { okay: boolean };

class myRes implements Response{
    okay: boolean = true;
}

type TeaType = "masala" | "ginger "