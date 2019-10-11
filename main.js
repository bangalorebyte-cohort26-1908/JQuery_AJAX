$(document).ready(function () {


    // $('h1').hide();

    // $('p#parah1').hide();

    // $('p.temp1').hide();

    console.log('Changing color to red');
    $('ul li').css('color', 'red');
    // $('body')

    $('ul li:first').click(function(){
        console.log('Changing to apple image');
        $('#imagediv').html('<img src="/istockphoto-683494078-612x612.jpg">')
        // $('#imagediv').html('<img src="/fresh-mango-500x500.jpg">')
    })

    $('ul li:nth-child(2)').click(function(){
        console.log('Changing to apple image');
        // $('#imagediv').html('<img src="/istockphoto-683494078-612x612.jpg">')
        $('#imagediv').html('<img src="/fresh-mango-500x500.jpg">')
    })

    $('#btn').click(function(){
        console.log('Changing color to blue');
        $('ul li').css('color', 'blue');
        let newfruit = $('#fruits').val();
        console.log(newfruit);
        $('ul').append('<li>'+newfruit+'</li>');
    });



    // $('#btn').dblclick(function(){
    //     console.log('Changing color to blue');
    //     $('ul li').css('color', 'green');
    // });

    //Fetch, Axios, AJAX

    $('#showfruit').click(function(){$('#result').load("/hello.html", '#mango', function (response, status, request) {
        
        // console.log('RESONSE :: ' + response);
        // console.log('STATUS :: ' + status);
        // console.log('REQUEST :: ' + request);
        if(status == 'success'){
            console.log('REQUEST :: ' + request);
        }
        // this; // dom element
        
    })});

    let newfruit = $('#fruits').val();
    $.ajax({
        type: "POST",
        url: "/hello.html",
        data: newfruit,
        success: function (response) {
            
        }
    });
});