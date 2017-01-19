

exports.homepage = function(request, response){

		response.setHeader("Content-Type", "text/html");
		response.end("hello world!");
}


exports.profile = function(request, response){
	var profile = {
		name: "aj",
		age: 29,
	}

	response.setHeader("Content-Type", "application/json");
	response.end(JSON.stringify(profile));

}


exports.notFound= function(request, response){
		response.statusCode = 404;
		response.setHeader("Content-Type", "text/html");
		response.end("404 notFound!");
}
