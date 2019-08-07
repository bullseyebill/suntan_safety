function fetchGoogleInformation(event) {
    
    var place =$("beach-input").val();
    if (!place) {
        $("#gm-user-data").html(`<h2>Please enter location</h2>`);
    return;
}

$.when(
    $.getJSON(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?&key=AIzaSyBf7HMHGCXUjaGwoKuPbWfTlez8wLJBwVs/${place}`)
    ).then(
        )

}

