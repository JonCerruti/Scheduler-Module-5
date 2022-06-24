// display date and time inside the jumbotron

let renderDateTime = function(){
    document.querySelector("#currentDay").innerHTML =
    `
    <h5> ${moment().format('MMMM Do YYYY, h:mm:ss a')}<h5>
    `;
};


renderDateTime();
setInterval(renderDateTime, 1000);

//