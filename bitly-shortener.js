$(document).ready(function(){
	//Get your Access Token at https://bitly.com/a/oauth_apps
	var accessToken = "";
	//The the long URL is taken from a link tag with the long-url class
	var longUrl = $('.long-url').attr('href');
	//This encodes the URL for the GET request
	var encodeLongUrl = encodeURIComponent(longUrl);
	$.ajax({
		method: "GET",
		url: "https://api-ssl.bitly.com/v3/shorten?access_token="+accessToken+"&longUrl="+encodeLongUrl+"",
		dataType: "json",
		success: function(bitly){
			//Dot notation for the shortened URL
			var shortenedUrl = bitly.data.url;
			console.log(bitly);
			//Bitly Shortned URL is output to link tag with the short-url class
			$('.short-url').attr('href',shortenedUrl);
			//Limit Exceeded Alert
			var status = bitly.status_code;
			if (status == 403) {
				alert('Bitly Monthly Rate Limit Exceeded');
			} else if (status == 500) {
				alert("Missing Access Token. Sign in to Bitly and go to https://bitly.com/a/oauth_apps in order to get your access token");
			}
		},
		error: function(){
			alert('Bitly API was not able to shorten your URL');
		}
	});
});