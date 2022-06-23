const m = moment();
console.log(m.format("LLLL"));

// const currentDate = moment().format('LLLL'); // get current date
// document.getElementById("currentDay").textContent = currentDate; // display inside the element

let renderClock = function(){
    document.querySelector("#currentDay").innerHTML =
    `
    <h5> ${moment().format('MMMM Do YYYY, h:mm:ss a')}<h5>
    `;
};


renderClock();
setInterval(renderClock, 1000);