//number: int, float => number
let count8: number = 10;
let count_float: number = 9.6;

//string
let name_88 = "khoi";
let name_8: string = `${name_88} luong "my ngoc"`;
console.log("check name 8: ", name_8);

//boolean
let status8: boolean = true;

//oject
let pro: {
    name: string,
    age: number
} = {
    name: "ngoc",
    age: 25
}


console.log("check pro", pro);

//array
let test8: (string | number)[] = ["ngoc"];
test8.push("khoi");
test8.push(15);
console.log("check array 8", test8);

//tuple: length limit of array
// datatype/size/order
let skill: [boolean, string, number?];
skill = [true, "ngoc"];

//enum: list more const in on var

//any: ko lam dung kieu du lieu freedom
let name_any: any = "ngoc";
name_any = true;
name_any = 25;
console.log("check any", name_any);

//void


