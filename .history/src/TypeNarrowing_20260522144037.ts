function getChai(kind: string | number) {
    if (typeof kind === "string") {
        return `type is ${kind}`;
    }
    return `type is ${kind}`;
}



function serveChai(msg?: string) {
    if (msg) {
        return `Serving ${msg}`;
    }

    // msg does not exist
    return `Serving default things`;
}



function orderChai(size: "small" | "medium")
