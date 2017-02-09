function articleCountBasedOnYear(year){
	console.log(year);
	var query_year_url = "http://ld.iospress.nl:3030/ios/query?query=PREFIX+bibo%3A+%3Chttp%3A%2F%2Fpurl.org%2Fontology%2Fbibo%2F%3E%0D%0APREFIX+dcterms%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0Aselect+%28count%28%3Farticle%29+as+%3Fcount%29+where%7B%0D%0A%09%3Farticle+a+bibo%3AAcademicArticle.%0D%0A++%3Farticle+dcterms%3Acreated+%3Fyear.filter%28contains%28str%28%3Fyear%29%2C+%22"+year+"%22+%29%29%0D%0A%7D";
	console.log(query_year_url);
	$.ajax({
      		type: "GET",
      		url: query_year_url,
		crossDomain: true,
      		dataType: "json",
      		success: function(data) {
      			console.log(data);
      			data.results.bindings.forEach(function (count_array){
      				console.log(count_array.count.value);
      				var count = count_array.count.value;
      				$('#year').empty();
                	$('#year').append("<p><b>"+count+"</b> Journal articles were published in <b>"+year+"</b></p>");
      			});
      			
      		},
      		error: function(a,b,c) {
          		alert("error");
    		}
      	});
}
