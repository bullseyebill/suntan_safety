function fetchGoogleInformation(event) {

    var place = $("#address").val();
    if (!place) {
        $("#address").html(`<h2>Please enter location</h2>`);
        return;
    }
}


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
            uvindexelement.appendChild(document.createTextNode(result));
            var dataElement=document.getElementById("data");
            dataElement.innerHTML="";
            dataElement.appendChild(uvindexelement);
            //document.getElementById("data").appendChild(uvindexelement);
            return result;
        },
        error: function(response) {
            return 0;
        }
    });
}