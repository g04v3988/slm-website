$(document).ready(function() {
	
		$('#calendar').fullCalendar({
		
			// US Holidays
			events: 'https://www.google.com/calendar/feeds/vanderlinde.henry%40gmail.com/public/basic',
			
			eventClick: function(event) {
				// opens events in a popup window
				window.open(event.url, 'gcalevent', 'width=700,height=600');
				return false;
			},
			
			loading: function(bool) {
				$('#loading').toggle(bool);
			}
			
		});
		
});