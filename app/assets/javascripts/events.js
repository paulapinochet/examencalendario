$(document).ready(function() {

  $('#calendar').fullCalendar({
      header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay'
      },
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: {
      	url: 'getevents',
      	type: 'GET',
      	color: 'lightblue',   // an option!
    	textColor: 'white'
      }
      
    });

});