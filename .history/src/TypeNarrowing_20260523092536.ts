// Type Narrowing

function getChai(kind: string | number) {
    if (typeof kind === "string") {
        return `type is ${kind}`;
    }
    return `type is number type`;
}



function serveChai(msg?: string) {
    if (msg) {
        return `Serving ${msg}`;
    }

    // msg does not exist
    return `Serving default things`;
}

// Exhaustive Checks

function orderChai(size: "small" | "medium" | "large" | number) {
    if (size === "small") {
        return `small cutting chai`;
    }
    if (size === "medium" || size === "large") {
        return `make extra chai`
    }

    return `Chai Order #${size}`
}


class KulhadChai{
    serve() {
        return `Serving kulhadChai`
    }
}


class CuttingChai{
    serve() {
        return `Serving cuttingChai`
    }
}


function serve(chai: KulhadChai | CuttingChai) {
    if (chai instanceof KulhadChai) {
        return chai.serve();
    }
}


type ChaiOrder = {
    type: string,
    sugar:number,
}

function isChaiOrder(obj: any): obj is ChaiOrder{
    return (
        typeof obj === "object" && obj !== null && typeof obj.type ==="string"
    )
}