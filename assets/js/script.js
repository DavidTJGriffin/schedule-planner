var currentDate = moment().format("dddd, MMM Do YYYY");
console.log(currentDate)
var currentDay = document.getElementById('currentDay').textContent = currentDate


$('.time-block').on('click', 'p', function () {
    var text = $(this)
        .text()
        .trim();

    var textInput = $('<textarea>')
        .addClass('form-control')
        .val(text);

    $(this).replaceWith(textInput);

    textInput.trigger('focus');
});

$(".time-block").on("blur", "textarea", function () {
    // get the textarea's current value/text
    var text = $(this)
        .val()
        .trim();

    // recreate p element
    var taskP = $("<p>")
        .addClass("m-1 textarea")
        .text(text);

    // replace textarea with p element
    $(this).replaceWith(taskP);
});


var currentTime = moment().hour();
console.log(currentTime);



var changeColor = function () {
if (currentTime > 17) {
 document.getElementById("9am").classList.add('past');
 document.getElementById("10am").classList.add('past');
 document.getElementById("11am").classList.add('past');
 document.getElementById("12pm").classList.add('past');
 document.getElementById("1pm").classList.add('past');
 document.getElementById("2pm").classList.add('past');
 document.getElementById("3pm").classList.add('past');
 document.getElementById("4pm").classList.add('past');
 document.getElementById("5pm").classList.add('past');
}
else if (currentTime < 9) {
    document.getElementById("9am").classList.add('future');
    document.getElementById("10am").classList.add('future');
    document.getElementById("11am").classList.add('future');
    document.getElementById("12pm").classList.add('future');
    document.getElementById("1pm").classList.add('future');
    document.getElementById("2pm").classList.add('future');
    document.getElementById("3pm").classList.add('future');
    document.getElementById("4pm").classList.add('future');
    document.getElementById("5pm").classList.add('future');
}
else if (currentTime === 9) {
    document.getElementById("9am").classList.add('present');
    document.getElementById("10am").classList.add('future');
    document.getElementById("11am").classList.add('future');
    document.getElementById("12pm").classList.add('future');
    document.getElementById("1pm").classList.add('future');
    document.getElementById("2pm").classList.add('future');
    document.getElementById("3pm").classList.add('future');
    document.getElementById("4pm").classList.add('future');
    document.getElementById("5pm").classList.add('future');
}
else if (currentTime === 10) {
    document.getElementById("9am").classList.add('past');
    document.getElementById("10am").classList.add('present');
    document.getElementById("11am").classList.add('future');
    document.getElementById("12pm").classList.add('future');
    document.getElementById("1pm").classList.add('future');
    document.getElementById("2pm").classList.add('future');
    document.getElementById("3pm").classList.add('future');
    document.getElementById("4pm").classList.add('future');
    document.getElementById("5pm").classList.add('future');
}
else if (currentTime === 11) {
    document.getElementById("9am").classList.add('past');
    document.getElementById("10am").classList.add('past');
    document.getElementById("11am").classList.add('present');
    document.getElementById("12pm").classList.add('future');
    document.getElementById("1pm").classList.add('future');
    document.getElementById("2pm").classList.add('future');
    document.getElementById("3pm").classList.add('future');
    document.getElementById("4pm").classList.add('future');
    document.getElementById("5pm").classList.add('future');
}
else if (currentTime === 12) {
    document.getElementById("9am").classList.add('past');
    document.getElementById("10am").classList.add('past');
    document.getElementById("11am").classList.add('past');
    document.getElementById("12pm").classList.add('present');
    document.getElementById("1pm").classList.add('future');
    document.getElementById("2pm").classList.add('future');
    document.getElementById("3pm").classList.add('future');
    document.getElementById("4pm").classList.add('future');
    document.getElementById("5pm").classList.add('future');
}
else if (currentTime === 13) {
    document.getElementById("9am").classList.add('past');
    document.getElementById("10am").classList.add('past');
    document.getElementById("11am").classList.add('past');
    document.getElementById("12pm").classList.add('past');
    document.getElementById("1pm").classList.add('present');
    document.getElementById("2pm").classList.add('future');
    document.getElementById("3pm").classList.add('future');
    document.getElementById("4pm").classList.add('future');
    document.getElementById("5pm").classList.add('future');
}
else if (currentTime === 14) {
    document.getElementById("9am").classList.add('past');
    document.getElementById("10am").classList.add('past');
    document.getElementById("11am").classList.add('past');
    document.getElementById("12pm").classList.add('past');
    document.getElementById("1pm").classList.add('past');
    document.getElementById("2pm").classList.add('present');
    document.getElementById("3pm").classList.add('future');
    document.getElementById("4pm").classList.add('future');
    document.getElementById("5pm").classList.add('future');
}
else if (currentTime === 15) {
    document.getElementById("9am").classList.add('past');
    document.getElementById("10am").classList.add('past');
    document.getElementById("11am").classList.add('past');
    document.getElementById("12pm").classList.add('past');
    document.getElementById("1pm").classList.add('past');
    document.getElementById("2pm").classList.add('past');
    document.getElementById("3pm").classList.add('present');
    document.getElementById("4pm").classList.add('future');
    document.getElementById("5pm").classList.add('future');
}
else if (currentTime === 16) {
    document.getElementById("9am").classList.add('past');
    document.getElementById("10am").classList.add('past');
    document.getElementById("11am").classList.add('past');
    document.getElementById("12pm").classList.add('past');
    document.getElementById("1pm").classList.add('past');
    document.getElementById("2pm").classList.add('past');
    document.getElementById("3pm").classList.add('past');
    document.getElementById("4pm").classList.add('present');
    document.getElementById("5pm").classList.add('future');
}
else if (currentTime === 17) {
    document.getElementById("9am").classList.add('past');
    document.getElementById("10am").classList.add('past');
    document.getElementById("11am").classList.add('past');
    document.getElementById("12pm").classList.add('past');
    document.getElementById("1pm").classList.add('past');
    document.getElementById("2pm").classList.add('past');
    document.getElementById("3pm").classList.add('past');
    document.getElementById("4pm").classList.add('past');
    document.getElementById("5pm").classList.add('present');
}

};

changeColor();
// 9 = 9 
// 10 = 10
// 11 = 11
// 12 = 12
// 1 = 13
// 2 = 14
// 3 = 15
// 4 = 16