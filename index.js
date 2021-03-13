
$(window).on('load', function () {
    // code here
    console.log(`ready`)
    document.cookie = 'cookie1=test; expires=Sun, 1 Jan 2023 00:00:00 UTC; path=/'
});

// $('.tabroomLoginBtn').on("click", function () {
//     var settings = {
//         // "url": `https://tabroomapi.herokuapp.com/login`,
//         "url": `http://localhost:8080/login`,
//         "method": "POST",
//         "timeout": 0,
//         "headers": {
//             "Content-Type": "application/x-www-form-urlencoded"
//         },
//         "data": {
//             "apiauth": "",
// "username": "yfang@college-prep.org",
//             "password": ""
//         }
//     };
//     console.log(`sent`)
//     $.ajax(settings).done(function (response) {
//         console.log(response);
//         console.log(response.token)
//         var slicedToken = response.token.replace("TabroomToken=","").substring(0,response.token.replace("TabroomToken=","").indexOf(';'))
//         document.cookie = (`TabroomToken=${slicedToken}; expires=${response.expiration}; path=/;`)
//     });
// });
$('#jtwGet').submit(function (e) {
    var settings = {
        // "url": `https://tabroomapi.herokuapp.com/login`,
        "url": `http://localhost:8080/jitsiurl`,
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        "data": {
            "apiauth": "",
            "jwt": document.getElementById('jwtToken').value
        }
    };
    console.log(`sent`)
    $.ajax(settings).done(function (response) {
        console.log(response);
        $('.copyJitsiLink').on("click", function () {
            var tempInput = document.createElement("input");
            tempInput.value = response;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand("copy");
            document.body.removeChild(tempInput);
        })
    });
    return false
})
