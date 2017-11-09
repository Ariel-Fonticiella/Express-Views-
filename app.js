const express = require("express");
const layouts = require("express-ejs-layouts");

const app = express();

// SETUP---------------------------------------------
// change the name of the folder here
//                                |
//                      -----------
//                      |
// app.set("views", "views");
app.set("view engine","ejs");

app.use(express.static("public"));

// Tell Express that we want to use the "express-ejs-layouts" package
// (helps us keep our HTML DRY)
app.use(layouts);
//          |
// const layouts = require("express-ejs-layouts");
// Tell Express that we want to use the "master-template.ejs"
//                                                  |
//                        ---------------------------
//                        |
app.set("layout", "master-template.ejs");

// END SETUP-----------------------------------------------

// ROUTES--------------------------------------------------

app.get("/", (req, res, next) => {
    const randomNumber = Math.floor(Math.random() * 1000);

    res.locals.theNumber = randomNumber;
    res.locals.myName = "Ariel Fonticiella";
    //             |
    //             -----------------
    //                             |
    // creates a local variable "myName" for use in the ejs

    res.render("home-page.ejs");
});


const myCars = [
  "Tesla Model13",
  "Honda Civic",
  "Batmobile",
  "Mystery Machine",
  "DeLorean",
  "Audi S5",
  "Kia Rio"
];

app.get("/cars", (req, res, next) => {
  // we are taking the myCars Array and sending it to the ejs file as "carList"
  res.locals.carList = myCars;
  res.render("car-page.ejs");
});

const myAwards = [
  {
    recipient: "Dapper Dan",
    title: "Best Ironhack TA... at fixing Phones",
    id: 77
  },
  {
    recipient: "Nizar",
    title: "Best Chicken Kitchen Customer",
    id: 99
  },
  {
    recipient: "Aje Poggi",
    title: "Most Security-minded Student",
    id: 101
  },
  {
    recipient: "Rapid Robert",
    title: "Best Computer Decision",
    id: 105
  },
  {
    recipient: "Guy Upstairs",
    title: "Most Passionate Speaker",
    id: 190
  },
];

app.get("/awards", (req, res, next) => {
  const randomIndex = Math.floor(Math.random() * myAwards.length);
  res.locals.featureAward = myAwards[randomIndex];
  // send the "myAwards" array to the ejs file as "awardList"
  res.locals.awardList = myAwards;

  res.render("award-view.ejs");
});


// END ROUTES -----------------------------------------------

app.listen(3000);
