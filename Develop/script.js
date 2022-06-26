// display date inside the jumbotron
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

//variables
// let timeBlock = document.querySelector('.timeBlock');
// let time = document.querySelector('.time');

var saveBtn = $(".saveBtn");

//color time blocks based on hour of the day past = gray present = red futire = green
function renderHourColor(){
   var time = moment().hours();

   $(".time-block").each(function () {
            var hourBlock = parseInt($(this).attr("id"));
            // console.log( hourBlock);
            // console.log(this);

            if (hourBlock > time) {
                $(this).addClass(".future");
                // console.log(this);
            }
            else if (hourBlock === time){
                $(this).addClass(".present");
            }

            else {
                $(this).addClass(".past");
            }

    })

};

saveBtn.on("click", function() {

    // console.log(this); //save button
    var hour = $(this).siblings(".time").text();
    var task = $(this).siblings(".task").val();

    // THEN the text for that event is saved in local storage
    localStorage.setItem(hour, task);
});

function workDay(){
    $(".time").each(function(){
        var hourBlock = $(this).text();
        var currentTask = localStorage.getItem(hourBlock);

        if (currentTask!== null){
            $(this).siblings(".task").val(currentTask);
        }
    });
}

renderHourColor();
console.log(renderHourColor);
workDay();