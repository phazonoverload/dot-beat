// Settings some absolute variables around timings

var beatInSecs = 86.4;
var secsInBeat = 0.011574;

// This takes epoch time and converts to a more friendly time
// Used for friendly time display

function unixTimestampToTime(unixTimestamp) {
    var date = new Date(unixTimestamp * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    var formattedTime = hours + ':' + minutes.substr(-2);
    return formattedTime;
}

// Makes an API call to get the base time for Biel, where .beat is set

function getBielTime() {
    var result = null;
    $.ajax({
        url: "http://api.timezonedb.com/?key=" + key + "&zone=Europe/Zurich&format=json",
        type: "get",
        dataType: "json",
        async: false,
        success: function(data) {
            result = data;
        }
    });
    return result;
}

// This takes the current time in Biel Meantime and finds the .beats value

function getBeats() {
    var biel = new Date(0);
    biel.setUTCSeconds(getBielTime().timestamp);
    var midnight = new Date(biel);
    midnight.setHours(0,0,0,0);
    var difference = (biel - midnight) / 1000;
    var beats = difference / beatInSecs;
    return beats.toFixed(3);
}

// Update values on page and grab new value if there's more than 1000 .beats

function updatePage() {
    var currentBeats = Number($(".beats span").html());
    var newBeats = (currentBeats + secsInBeat);
    if(newBeats > 1000) {
        var getBeats = getBeats();
        $(".beats span").html(getBeats);
        $(".progress span").css({
            "width": getBeats / 10 + "vw"
        });
    } else {
        var getBeats = newBeats.toFixed(3);
        $(".beats span").html(getBeats);
        $(".progress span").css({
            "width": getBeats / 10 + "vw"
        });
    }
}

// On page load

$(document).ready(function() {
    $(".beats span").html(getBeats());
});

// Update every second

setInterval(function() {
    updatePage();
}, 1000);
