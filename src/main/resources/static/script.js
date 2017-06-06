$(function() {


    $('#calendar').fullCalendar({
        firstDay: 1,
        header: {
            left:   'title',
            center: 'month,agendaWeek,agendaDay',
            right:  'today prev,next'
        },
        selectable: true,
        select: function( start, end, jsEvent, view ) {
            alert(start);
            alert(end);
            alert(jsEvent.pageX + ',' + jsEvent.pageY);
            alert(view.name)
        }

    })

});