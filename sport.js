
hostname = "http://localhost:8080";
username = "user1";
password = "TestUser";

function resourceLoading(method, api_endpoint){
    URL = hostname+"/"+api_endpoint+"/";
    alert('welcome resource loading');
    $.ajax({
        url: URL,
        type: "get",
        contentType: "text/html; charset=UTF-8",
        headers: { "Access-Control-Allow-Origin": "http://localhost",
//                   'Content-Type': 'application/x-www-form-urlencoded',
                   "Access-Control-Allow-Credentials": true,
                   "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization" ,
                   "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                   "Authorization": "Basic " + btoa(username + ":" + password),
        },
//        beforeSend: function (xhr) {
//                        xhr.setRequestHeader("Access-Control-Allow-Origin", "http://127.0.0.0.1:80");
//                    },
        xhrFields:{
              "withCredentials": true
        },
        success: function(result) {
                  console.log("Success Method");
                 // Do something with the result
                 console.log(result);
         },
        error: function (error,except) {
            console.log("Error Method");
            console.log(except);
        }
     });
}

function loadTournaments(){
    resourceLoading("GET","tournament");
}


loadTournaments();