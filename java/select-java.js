

// LOGIN JS SCRIPT


// LOGIN JS SCRIPT


// LOGIN JS SCRIPT


var validuser = "MYUSER";
     var validpass = "MYPASS";

$("#mysubmitbtn").click(function () {
    
        var username = $("#username").val();
        var password = $("#password").val();
        $(".incorrect-user").fadeOut('slow');
        $(".loader").fadeIn('slow');

        if (username === validuser && password === validpass) {

            $(".loader").fadeIn('slow');
            $(".incorrect-user").hide();
            $(".correct-user").fadeIn('slow');

            setTimeout(function() {
                $(".loader").fadeOut('slow');
                location.href = "ia_challenge.html";
              }, 2000);



        } else {
            $(".loader").fadeIn('slow');
              setTimeout(function() {
                $(".loader").fadeOut('slow');
                $(".incorrect-user").fadeIn('slow');
              }, 2000);
        }






    });