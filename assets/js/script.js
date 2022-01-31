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
