use("CrudDb")
db.createCollection("courses")
// db.courses.insertOne({
//     name: "python",
//     price: 5000,
//     assignments: 10,
//     projects: 18
// })

// db.courses.insertMany([
//   {
//     "name": "javascript",
//     "price": 4500,
//     "assignments": 8,
//     "projects": 12
//   },
//   {
//     "name": "java",
//     "price": 5200,
//     "assignments": 9,
//     "projects": 15
//   },
//   {
//     "name": "c++",
//     "price": 4000,
//     "assignments": 7,
//     "projects": 10
//   },
//   {
//     "name": "reactjs",
//     "price": 6000,
//     "assignments": 6,
//     "projects": 14
//   },
//   {
//     "name": "nodejs",
//     "price": 5500,
//     "assignments": 5,
//     "projects": 11
//   },
//   {
//     "name": "mongodb",
//     "price": 5000,
//     "assignments": 6,
//     "projects": 13
//   },
//   {
//     "name": "html_css",
//     "price": 3000,
//     "assignments": 4,
//     "projects": 8
//   },
//   {
//     "name": "data_science",
//     "price": 7000,
//     "assignments": 10,
//     "projects": 20
//   },
//   {
//     "name": "machine_learning",
//     "price": 7500,
//     "assignments": 9,
//     "projects": 22
//   },
//   {
//     "name": "cloud_computing",
//     "price": 6800,
//     "assignments": 8,
//     "projects": 17
//   }
// ]
// )


let a = db.courses.find({price: 5000})
console.log(a)

db.courses.updateOne({price: 6000}, {$set:{price: 8000}})