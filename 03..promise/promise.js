function sayHello() {
  return new Promise((resolve, reject) => {
    resolve("hello");
    // reject(new Error());
  });
}

sayHello()
 .then((resolvedData) => {
   console.log(resolvedData);
   return resolvedData;
 })
 .then((resolvedData) => {
   console.log(resolvedData);
   return resolvedData;
 })
 .then((resolvedData) => {
  console.log(resolvedData);
})
.catch((error) => {
  console.log(error);
})