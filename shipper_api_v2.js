import $ from 'jQuery'

var API_KEY = "Your API Key";

function getAreas_postCode(num)
{
    var _arr = [];

    $.ajax({
        url: "https://api.sandbox.shipper.id/public/v1/details/" + num,
        async: false,
        type: 'GET',
        dataType: 'JSON',
        contentType: 'application/json',
        data: {
            apiKey : API_KEY,
        },
        success: function (data) {
            _arr = data.data.rows.reverse();
        },
        error: function(){
            console.log("Cannot get data");
        }
    });

    return _arr;
}

export {
    getAreas_postCode
}
