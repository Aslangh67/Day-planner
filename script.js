var todaysTime=$("#todays-time");
var dayOfWeek=$("#day-of-week");
var hoursInDay=$("#hours-in-day")
var hoursInTheDay=["09AM","10AM","11AM","12PM","01PM","02PM","03PM","04PM","05PM"];

    // Top of the page day of the week
    dayOfWeek.text(moment().format("dddd"));
    // top of the page date and time
    function mainTimeUpdat() {
       interval = setInterval(function() {
         
        todaysTime.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
        }, 1000);
      };
      hoursInTheDay.forEach(function(i){
        var Container = $("<div>");
        Container.addClass("container ");
        var row=$("<div>")
        row.addClass("row jumbotron border border-dark rounded-pill jumbo-style")
        Container.append(row)
        var col1=$("<div>")
        col1.addClass("col-md-2")
        col1.text(i)
        var col2=$("<div>")
        col2.addClass("col-md-8")
        var input=$("<input>")
        input.addClass("form-control")
        input.attr("type", "text")
        input.attr("placeholder", "Any plans?")
        col2.append(input)
        var col3=$("<div>")
        col3.addClass("col-md-2")
        var button=$("<button>")
        button.addClass("btn btn-primary submit-button")
        button.attr("type", "button")
        button.text("Add !")
        col3.append(button)
        row.append(col1, col2, col3)
        hoursInDay.append(Container)

      });

      mainTimeUpdat();