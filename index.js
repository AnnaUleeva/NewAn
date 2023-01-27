const a = 5;

function myFn() {
  function innerFn() {
    console.log("🚀 ~ file: index.js:2 ~ a", a)
    console.log("RESULT ====", a)
  }
  innerFn();
}
myFn();
