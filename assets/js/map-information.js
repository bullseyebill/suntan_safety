function fetchGoogleInformation(event) {

    var place = $("#address").val();
    if (!place) {
        $("#address").html(`<h2>Please enter location</h2>`);
        return;
    }
}

/* Data handling with lat and long from Google map into UV api */

function getUVIndex(lat, lng) {
    $.ajax({
        type: 'GET',
        dataType: 'json',
        async: false,
        beforeSend: function(request) {
            request.setRequestHeader('x-access-token', 'a32799ed6a34e3b2db9df5e1f53fb64c');
        },
        url: 'https://api.openuv.io/api/v1/uv?lat=' + lat + '&lng=' + lng,
        success: function(response) {
            console.log(response);
            console.log(response.result.uv_max);
            var result = response.result.uv_max;
            var uvindexelement = document.createElement("DIV");
            
/* math.ceil is used to round up the number returned from the uv api */   

            uvindexelement.appendChild(document.createTextNode(Math.ceil(result)));
            var dataElement=document.getElementById("data");
            dataElement.innerHTML="";
            dataElement.appendChild(uvindexelement);
            
            return result;
        },
        error: function(response) {
            return 0;
        }
    });
}