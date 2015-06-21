	// init countdown
	var countdown_time 		= jQuery("#countdown-widget").data('time');
	var countdown_timezone 	= jQuery("#countdown-widget").data('timezone');
	
	if(countdown_time != '') {

		launchTime = new Date(Date.parse(countdown_time));

	} else {

		launchTime = new Date(); 						// Set launch: [year], [month], [day], [hour]...
		launchTime.setDate(launchTime.getDate() + 15); 	// Add 15 days

	}

	if(countdown_timezone == '')
		countdown_timezone = null;
			
	jQuery("#countdown-widget").countdown({
		until: launchTime, 
		format: "dHMS",
		labels: ['','','','','','',''],
		digits:['0','1','2','3','4','5','6','7','8','9'],
		timezone: countdown_timezone,

		labels: ['Years', 'Months', 'Weeks', 'Days', 'Hours', 'Minutes', 'Seconds'],
		labels1: ['Year', 'Month', 'Week', 'Day', 'Hour', 'Minute', 'Seconduy'],
	});
