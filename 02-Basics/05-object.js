const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}
// keys ki value ko acces ka krne ka ek or tarika hai // or esme chaye to  key ka nam bhi bdl skte hai,usse value pr koi frk nhi pdta hai
const {courseInstructor} = course
console.log(courseInstructor);

const {coursename : Name} = course
console.log(Name);

// JSON
// {
//     "name" : "yogesh",
//     "topic" : "objects",
//     "price" : "free"
// }
