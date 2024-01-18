//function
//return number value
const sum = (a: number, b: number): number => {
    return a + b;
}

//void: not return  
const handleLog = (message: string): void => {
    console.log("check message: ", message);
}

//never
function handleException(errorMessage: string): never {
    throw Error(errorMessage);
    // console.log(errorMessage);
}

//handleException("just a test error");

//union = join, 1 bien co nhieu kieu

//alias
//dinh danh cho type

type a_type = number | string | boolean;
function addNumberOrString(a: a_type, b: any) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return a.concat(b);
    }
    throw new Error("Parameters must be number or string");
}

console.log("check union", addNumberOrString("my", "ngoc"));




