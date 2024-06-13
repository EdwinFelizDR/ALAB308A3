// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };

//   if (id >= 1 || id <= 4){
   let db1Token = dbs.db1(id);   
   db1Token.then(function(result){console.log(result)});
//   }

//   if (id >= 5 || id <= 7) {
//    let db2Token = dbs.db2(id);   
//    db2Token.then(function(result){console.log(result)});
//   }

//   if (id >= 8 || id <= 10){
//    let db3Token = dbs.db3(id);   
//    db3Token.then(function(result){console.log(result)});
//   }
}

getUserData(1);