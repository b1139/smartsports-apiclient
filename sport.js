
hostname = "http://localhost:8080";
username = "user1";
password = "TestUser";

function resourceLoading(method, api_endpoint){
    URL = hostname+"/"+api_endpoint+"/";
//    alert('welcome resource loading');
    $.ajax({
        url: URL,
        type: "get",
        contentType: "application/json",
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

series = {
            "name": "",
            "date_start": "",
            "date_end": "",
};

tournament = {
                "series": [
                ],
                "city": "",
                "country": "",
                "name": "",
                "date_start": "",
                "date_end": ""
          };

// Receives JSON Array and converts to JSON Object
(function ($) {
    $.fn.serializeFormJSON = function () {

        var o = {};
        var a = this.serializeArray();
        $.each(a, function () {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };
})(jQuery);

$(document).ready(function() {
  $("#addtournament").submit(function(e){
            e.preventDefault();
            var data = $(this).serializeFormJSON();
            alert(data.city);
            tournament.city = data.city
            tournament.country = data.country
            tournament.date_start = data.date_start
            tournament.date_end = data.date_end
            alert(data.series);
//            var formData = JSON.parse(JSON.stringify($('#addtournament').serializeArray()));
//            for (x in formData) {
//                alert(formData[x]);
//            }
//            alert(formData['series']);
//            console.log(formData);
         });
   });