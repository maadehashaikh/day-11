const cookieParser = require('cookie-parser');
const express = require('express');
const app  = express();
app.use(cookieParser());
const bcrypt = require('bcrypt'); // do 2 things encryption and decrytion 
const jwt = require('jsonwebtoken');

app.get('/',function(req,res){
  // -------------------------COOKIE -------------------------------
  //  res.cookie("name", "fatima");
  //  res.send("done");

  // ----------------------------HASH ----------------------------------
  // To hash a password we do : 
   // bcrypt.genSalt(10, function(err, salt) { // => saltRounds generally 10 rakhty hain 
    //bcrypt.hash("mama7777", salt, function(err, hash) {  // => salt aik random string hoti h remember
    // console.log(salt); $2b$10$GY4HBDYfh.P.m9X.G5kudu shows this 
    //console.log(hash);  // hash it gave $2b$10$wHw17vFdxq1wizDpNIZFM.x1LaTj9Y0J.3Vh4sR7diI1DNs9RAyIO
  // });
// });

// --------------------------BCRYPT--------------------------

//    bcrypt.compare("mama7777", "$2b$10$wHw17vFdxq1wizDpNIZFM.x1LaTj9Y0J.3Vh4sR7diI1DNs9RAyIO", function(err, result) {
//     console.log(result); // giving true matlb kay password or hash same h 
// });

// -------------------------------------------JWT--------------------------------
 let token = jwt.sign({email : "maadeha@gmail.com"} , "secret") ;
 res.cookie("token" , token);
 res.send ("done");
//  console.log(token);
 // after email the string is a secret as it is very sensitive and is secret ki base p he data encrypt hoga data agar kisi ko yeh secret mil jay to hm kisi ka bh data dcrypt kar kay parh skty hain 
})

app.get('/read',function(req,res){ 
  // console.log(req.cookies);
  let data = jwt.verify(req.cookies.token , "secret");
  console.log(data);
})


// app.get('/read',function(req,res){ 
//   // console.log(req.cookies);
//   res.send("read page");
// })



app.listen(3000);