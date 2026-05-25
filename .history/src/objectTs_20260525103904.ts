const chai = {
    name: "Masala Chai",
    price: 20,
    isHot:true
}

// {
//     name: string;
//     price: number;
//     isHot:boolean
// }


// declarative Object Type
let tea: {
    name: string;
    price: number;
    isHot:boolean
}

tea = {
    name: "Ginger Tea",
    price: 25,
    isHot:true
}


type Tea = {
    name: string;
    price: number;
    ingredients:string[]
}

const adrakChai: Tea = {
    name: "Adrak Chai",
    price: 25,
    ingredients:["ginger","tea leaves"]
}


type Cup = { size: string };
let smallCup: Cup = { size: "200ml" };

let bigCup = {  material: "steel" };


smallCup = bigCup;