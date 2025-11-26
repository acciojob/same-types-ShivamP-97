function isSameType(value1, value2) {
    if (typeof value1 === "string" && value1.trim() !== "" && !isNaN(Number(value1))) {
        value1 = Number(value1);
    }
    if (typeof value2 === "string" && value2.trim() !== "" && !isNaN(Number(value2))) {
        value2 = Number(value2);
    }

    if (Number.isNaN(value1) && Number.isNaN(value2)) {
        return true;
    }

    return typeof value1 === typeof value2;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
