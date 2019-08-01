var firebaseConfig = {
    apiKey: "AIzaSyCiCoVgVP12u9CmItfF3Br2JNWhpMSgr_I",
    authDomain: "myfirstproject-bc128.firebaseapp.com",
    databaseURL: "https://myfirstproject-bc128.firebaseio.com",
    projectId: "myfirstproject-bc128",
    storageBucket: "",
    messagingSenderId: "980150634025",
    appId: "1:980150634025:web:84505a62e9f039ab"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Assign the reference to the database to a variable named 'database'
var database = firebase.database();

var trainName = "";
var destination = "";
var firstTrainTime;
var frequency;


database.ref().on("value", function (snapshot) {
    $("tbody").empty();
    snapshot.forEach(function(snapshot){
        var s = snapshot.val();
    $("<tr><td>"+s.name +"</td><td>"+ s.destination+"</td><td>"+s.frequency +"</td><td></td><td></td></tr>").appendTo("tbody");
    });


}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});

$("#add-train").on("click", function (event) {
    event.preventDefault();

    trainName= $("#train-name-input").val();
    $("#train-name-input").val("");
    destination= $("#destination-input").val();
    $("#destination-input").val("");
    firstTrainTime= $("#first-train-time").val();
    $("#first-train-time").val("");
    frequency= $("#frequency-input").val();
    $("#frequency-input").val("");


    database.ref().push({
        name: trainName,
        destination: destination,
        firstTime: firstTrainTime,
        frequency: frequency,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
});