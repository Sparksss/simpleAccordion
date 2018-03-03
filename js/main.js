window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
// DON'T use "var indexedDB = ..." if you're not in a function.
// Moreover, you may need references to some window.IDB* objects:
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
let DBOpenRequest, store, request, db, tx;
indexedDB = window.indexedDB || window.msIndexedDB || window.webkitIndexedDB;
tx = window.IDBTransaction || window.webkitIDBTransaction;


DBOpenRequest = window.indexedDB.open("users", 1);
DBOpenRequest = indexedDB.open("MyFirstDataBase");
const user = {
  username: "007",
  firstName: "James",
  lastName: "Bond",
  password: "foo"
};
DBOpenRequest.onerror = function(event){
  //Error in open Base
  console.log("Something bad happened while trying to open: " + event.target.errorCode);
};
DBOpenRequest.onsuccess = function(event){
  console.log("Database initialised.");

  db = DBOpenRequest.result;


};

DBOpenRequest.onupgradeneeded = function(event) {
  var db = event.target.result;

  db.onerror = function(event) {
    console.log("Error loading database.");
  };

    store = db.createObjectStore("users", { keyPath : "username" });

    store.createIndex("firstName", "firstName", { unique: false });
    store.createIndex("lastName", "lastName", { unique: false });
    store.createIndex("password", "password",{ unique: false });
  };


// function showData(){
//   let objectStore = db.transaction('username').objectStore('username');
//   objectStore.openCursor().onsuccess = function(event) {
//     let cursor  = event.target.result;
//     if(cursor){
//      console.log(cursor);
//   }
//   cursor.continue();
// }
//

// call an object store that's already been added to the database
let objectStore = transaction.objectStore("users");
console.log(objectStore.indexNames);
console.log(objectStore.keyPath);
console.log(objectStore.name);
console.log(objectStore.transaction);
console.log(objectStore.autoIncrement);


var objectStoreRequest = objectStore.add(users);
  objectStoreRequest.onsuccess = function(event) {
      console.log(firstName.value);
      console.log(lastName.value);
      console.log(password.value);
  }





// let indexedDB = window.indexedDB || window.msIndexedDB || window.webkitIndexedDB;
// let db,store, index, tx = window.IDBTransaction || window.webkitIDBTransaction;
// let request = indexedDB.open("MyTestDatabase");
//
// let user = {
//   username: "007",
//   firstName: "James",
//   lastName: "Bond",
//   password: "foo"
// };
//
// request.onupgradeneeded = function(e){
//   let db = request.result;
//   store = db.createObjectStore("StoreUsers", {keyPath: "username"});
//   index = store.createIndex("firstName", "firstName", {unique: false});
// };
//
// request.onerror = function(event){
//   alert("Почему Вы не позволяете моему веб-приложению использовать IndexedDB?!");
//   console.log(event.terget.errorCode);
// };
//
// request.onsuccess = function(event) {
//   db = request.result;
//   tx = db.transaction("StoreUsers", "readwrite");
//   store = tx.objectStore("StoreUsers");
//   index = store.index("firstName");
//
//   db.onerror = function(e){
//     console.log(e.target.errorCode);
//   };
//   store.put(user);
//   tx.oncomplete = function(){
//     db.close();
//   };
// };
//
// console.log(transaction);




// if(db != "1.0"){
//   request = dataBase.setVersion("1.0");
//   request.onerror = function(event){
//     //don't set version dataBase
//     console.log("Something bad happened while trying to set version: " + event.target.errorCode);
//   };
//   request.onsuccess = function(event){
//     // Inicialization complete
//     console.log("Database initialization complete. Database name : " + dataBase.name + "; Version: " + dataBase.version);
//   };
// }else{
//   //Database has already initialized
//   console.log("Database already initialized. Database name: " + dataBase.name + "; Version: " + dataBase.version);
// }
