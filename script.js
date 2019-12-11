var todaysTime = $("#todays-time");
var dayOfWeek = $("#day-of-week");
var hoursInDay = $("#hours-in-day")
var hoursInTheDay = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
var timeFOrColor=[9]


// Top of the page day of the week
dayOfWeek.text(moment().format("dddd"));
// top of the page date and time
function mainTimeUpdat() {
  interval = setInterval(function () {

    todaysTime.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
  }, 1000);
};

var currentHour = parseInt(moment().format("HH"))

$(document).on("click", '.submit-button', function () {
  var temp = $(`#input-hour-${$(this).attr('data-id')}`).val()
  console.log(temp)
  // var key = $(this).parent().siblings('.input-div').children('.input-text').attr('id')
  if(temp.length){
  // var thisInputValue = $("#input-hour-" + i).val();
  // console.log(thisInputValue);
  // todos.attr("placeholder", thisInputValue)
  // input.val("")
  $(`#input-hour-${$(this).attr('data-id')}`).val("")
    localStorage.setItem(
      ("todos" + $(this).attr('data-id')),
      JSON.stringify(temp)
    );
  }
  returnTodos()
})

returnTodos = () => {
  for (var i = 0; i <9; i++){
    var planned = JSON.parse(localStorage.getItem("todos" + i));
  // console.log(planned);
  if (planned !== null) {
    $("#this" + i).text(". "+planned)
  }
  }
}

function consolelog(){
  console.log('im a function')
}

hoursInTheDay.map((hour, i)=>{

})


// list of the days of the week
hoursInTheDay.forEach(function (hour, i) {
  hoursInDay.append(`<div class='container rows'><div class='row jumbotron border border-dark jumbo-style row${i}' data-time='${i+9}' 
  style='background-color:${(i+9<currentHour)? 'grey': (i+9=== currentHour)? 'green': 'blue'}'><div class='col-sm-2'>${hour}</div><form 
  class='col-sm-8 input-div'><input class='form-control input-text' id='input-hour-${i}' type='text' placeholder='Any plans?'/><div id='this${i}'> 
  </div></form><div class='col-sm-2'><button class='btn btn-primary submit-button submit-text' type='button' data-id=${i}>Add !</button></div></div>`)
})
  // var Container = $("<div>");
  // Container.addClass("container");
  // var row = $("<div>")
  // row.addClass(`row jumbotron border border-dark  jumbo-style row${i}`)
  // row.attr("data-time", timeFOrColor++)
 
  
  // Container.append(row)
  
  // // console.log(row);
  
  // var col1 = $("<div>")
  // col1.addClass("col-sm-2 time-on-page"+i)
  // col1.text(i)
  // var col2 = $("<form>")
  // col2.addClass("col-sm-8 input-div")
  // var input = $("<input>")
  // input.addClass("form-control input-text")
  // input.attr("id", "input-hour-" + i)
  // input.attr("type", "text")
  // input.attr("placeholder", "Any plans?")
  // col2.append(input)
  // var todos = $("<div>")
  // todos.attr("id", "this" + i)
  // col2.append(todos)
  // var col3 = $("<div>")
  // col3.addClass("col-sm-2")
  // var button = $("<button>")
  // button.addClass("btn btn-primary submit-button submit-text")
  // button.attr("type", "button")
  // button.text("Add !")
  // $(document).on("click", '.submit-button', function () {
  //   if(input.val()!==""){
  //   var thisInputValue = $("#input-hour-" + i).val();
  //   console.log(thisInputValue);
  //   todos.attr("placeholder", thisInputValue)
  //   input.val("")
  //   function saveTodos() {
  //     localStorage.setItem(
  //       ("todos" + i),
  //       JSON.stringify(thisInputValue)
  //     );
  //   }
  //   console.log();
  //   saveTodos()
  //   returnTodos(hour)
  // }})
  // col3.append(`<button class='btn btn-primary submit-button submit-text' type='button'>Add !</button>`)
  // // console.log($(".time-on-page").text());
  // row.append(col1, col2, col3)
  // hoursInDay.append(Container)
  // returnTodos(i)
  // function returnTodos(i) {
  //   var planned = JSON.parse(localStorage.getItem("todos" + i));
  //   // console.log(planned);
  //   if (planned !== null) {
  //     $("#this" + i).text(". "+planned)
  //   }
  // }
 
  // console.log(timeNow);
//  console.log(row);
 
  // console.log(row[0].attributes[1].nodeValue);
  // console.log(parseInt(row[0].attributes[1].nodeValue));
  // console.log((parseInt(row[0].attributes[1].nodeValue)) - (parseInt(moment().format("HH"))))
  // if(parseInt(row[0].attributes[1].nodeValue) < parseInt(moment().format("HH"))){
  // console.log("it dosn't");
  // $(`.row${i}`).css("background-color", "blue")
  // }else if(parseInt(row[0].attributes[1].nodeValue) === parseInt(moment().format("HH"))){
  //   console.log("this hour"); 
  //  $(`.row${i}`).css("background-color", "red")
  // }
  // else if(parseInt(row[0].attributes[1].nodeValue) > parseInt(moment().format("HH"))){    
  //  $(`.row${i}`).css("background-color", "green")
  // }


returnTodos()
mainTimeUpdat();
// console.log($(".time-on-page"));
