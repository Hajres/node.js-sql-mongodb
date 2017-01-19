import http from "http" ;
import handlers from  "./handlers";

var server = http.createServer((request, response) => {
	var url = request.url;

	

	if(url === "/"){
		handlers.homepage(request, response);
	

	} else if(url === "/profile"){
		handlers.profile(request, response);

	} else {
		handlers.notFound(request,response)
	}
});

server.listen(3000);