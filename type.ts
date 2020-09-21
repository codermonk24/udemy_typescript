//type  -- easy way to refer to the different properties + functions that a value has
//labels we are describing the different properties ans methods that as single value has
//every value in a typescript has a type

//string
//number(+ve,-ve,decimals)
//boolean
//Date new Date()
//t-odo

//1.Primitive types -- number,boolean,void,undefined,string,symbol,null
//2.Object types -- functions, arrays, classes, objects

//types are used by the typescript compiler to analyze our code for errors
//types allow other engineers to understanf what values are flowing around our codebase

const today = new Date();

// console.log(today.getMonth());

const person = {
  age: 20,
};

class Color {}
const red = new Color();
