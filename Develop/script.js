// display date inside the jumbotron
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

//variables
// let timeBlock = document.querySelector('.timeBlock');
// let time = document.querySelector('.time');

var saveBtn = $(".saveBtn");

//color time blocks based on hour of the day past = gray present = red futire = green
function renderHourColor(){
   var time = moment().hours();
   console.log(time);
    //.each to loop over id's in html 
   $(".time-block").each(function () {
    //PrseInt returns values as a string and returns first intenger
            var hourBlock = parseInt($(this).attr("id"));
            console.log( hourBlock);
            // console.log(this);
            // if then statement that adds class from css style page 
            if (hourBlock < time) {
                $(this).addClass("past");
                // console.log(this);
            }
            else if (hourBlock === time){
                $(this).addClass("present");
            }

            else {
                $(this).addClass("future");
            }

    })
    console.log(this);
};

saveBtn.on("click", function() {

   
    var hour = $(this).siblings(".time").text();
    var task = $(this).siblings(".task").val();

    // the text is saved in local storage
    localStorage.setItem(hour, task);;
    console.log(saveBtn)
});
    //get the text from local storage and display on webpage even after refresh
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
console.log(workDay);