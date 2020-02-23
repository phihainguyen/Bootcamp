// Initialize Firebase
var config = {
    apiKey: "AIzaSyAOpFh-D_nf4ZEAspnrK_nn5gyIhMyX6xk",
    authDomain: "awesomebilling.firebaseapp.com",
    databaseURL: "https://awesomebilling.firebaseio.com",
    projectId: "awesomebilling",
    storageBucket: "",
    messagingSenderId: "370999565275"
};
firebase.initializeApp(config);

var database = firebase.database();
console.log(database);

$("#submit-button").on("click", function (event) {
    event.preventDefault();


    //VARIABLES from INPUTS
    var tempName = $("#name").val().trim();
    var tempRole = $("#role").val().trim();
    var tempDate = $("#date").val().trim();
    // var convertedDate = moment(), tempDate;
    var tempRate = $("#rate").val().trim();

    var totalBilled = "math";


    //make the server hold all that
    database.ref().push({
        name: tempName,
        role: tempRole,
        date: tempDate,
        rate: tempRate
    })

})

//runs on pageload + populates the table
database.ref().on("child_added", function (snapshot) {
    var childStorage = snapshot.val();
    var paraTag = $("<p>");

    //changing the html
    $("#name-table").append(childStorage.name);
    $("#role-table").append(childStorage.role);
    $("#date-table").append(childStorage.date);
    $("#rate-table").append(childStorage.rate);

}, function (errorObject) {
    console.log("Thing that went sideways: " + errorObject.code);
})

