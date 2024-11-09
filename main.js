// let ds=[{info:1,val:2},{info:3,val:2},{info:2,val:1}]
// localStorage.setItem("Danh sách",JSON.stringify(ds))

let ds=JSON.parse(localStorage.getItem("Danh sách"))
console.log(ds)