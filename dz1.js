// const user = {
//   name: "Jamshid",
//   age: 20,
//   job: "Student",
//   info: function () {
//     return `Mening ismim ${this.name} va mening yoshim : ${this. age}  da`
//   }
// }
// console.log(user.info());


const productlist = {
  meat: {
    name: " Qo'y go'shti",
    weight: 2,
    price: 90000,
  },
  potato: { 
    name: "Qizil ",
    weight: 2,
    price: 5000
  },
  tomato: {
    name: "Pushti",
    weight: 1,
    price: 10000,
  },
  cucumber: {
    name: "Orzu",
    weight: 1,
    price: 12000
  },
  oil: {
    name: "Pista yog' ",
    amout: 1,
    price: 20000,

  },
  cola: {
    name: "Coca-Cola",
    amout: 3,
    price: 15000
  },
  sok: {
    name: "Tip-Top",
    amout: 3,
    price: 12000
  },
  choyxona:{
    info: "Diyor",
    amout: 1,
    price: 250000
  } 
}
let totalPrice = 0
for (const key in productlist) {
  totalPrice += productlist[key].price * (productlist[key].weight ? productlist[key].weight : productlist[key].amout )
}
console.log(totalPrice);