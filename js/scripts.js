//facebook button - does not really show
  (function(d, s, id) {
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) return;
     js = d.createElement(s);
     js.id = id;
     js.src ='https://connect.facebook.net/en_US/sdk.js#xfbm=1&version=v3.0';
     fjs.parentNode.insertBefore(js, fjs);
   }
   (document, 'script', 'facebook-jssdk'));

//twitter
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

//google maps

   function initMap() {
        var mapLoc = {lat: 51.2161548, lng: 6.7557461};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: mapLoc
        });

        var marker = new google.maps.Marker({
          position: mapLoc,
          map: map,
          draggable: true,
          animation: google.maps.Animation.DROP,
          title: 'Maps are cool!'
        });

        map.addListener('center_changed', function() {
        // 3 seconds after the center of the map has changed, pan back to the
        // marker.
        window.setTimeout(function() {
          map.panTo(marker.getPosition());
        }, 3000);
        });

        marker.addListener('click', toggleBounce);
        }

        function toggleBounce() {
          if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
          } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
          }
        }
    
//load DOM
$(document).ready(function(){

  //tooltip
  $(function () {
   $('[data-toggle="tooltip"]').tooltip();
  });

  //submit message
  $('#submit-button').on('click', function() {
   var comment = $('.message-box').val();
   if(comment === "") {
        $('.message-box').css('border', '2px solid red');
    } else {
        $('#visible-comment').html('Thank you! We have received your message.');
        $('#visible-comment').css({'border': '2px solid blue', 'background-color':  '#cceeff'});
        $('.message-box').hide('slow');
        $('#submit-button').hide();
    };
    return false;
  });

  //message character count
  $(".message-box").on("keyup", function() {
        console.log("keyup happened"); //here we make sure we're catching the keyup

        // in here is where the rest of our code for this Exercise will go
        var charCount = $(".message-box").val().length;//here we set the length of the content of the textarea to a variable
        console.log(charCount); //here we make sure we set it to the right value
        $("#char-count").html('Message character count: ' + charCount); //here we show a running character count to the user
        if(charCount > 50) {
          $("#char-count").css('color', 'red');
          $("#char-count").html('Maximum character is 50')
          $('#submit-button').hide();
        } else {
          $('#submit-button').show();
          $("#char-count").css("color", "black"); // need it to be black
        };
  });


  //smooth scrolling
  var $root = $('html, body');
   $('.navbar-nav a').click(function() {
   var href = $.attr(this, 'href');
     if (href != undefined && href != '#') {
     $root.animate({
     scrollTop: $(href).offset().top
     }, 500, function () {
     window.location.hash = href;
     });
     }
   return false;
  });

  // work section
    for(var i = 0; i < works.length; ++i ) {
      $('#work-images').append("\
        <div class='col-sm-3 col-md-3'>\
          <a href='#' class='work-img'>\
            <img class='img-responsive' src='" + works[i].pic + "'>\
            <span class='info'><p class='proj-title'>Title:</p>" + works[i].title + "</span>\
          </a>\
        </div>\
    ");
    };
    //add different border colors
    var images = $('#work-images img');
        //index is even, i is always the index
    if(i % 2 === 0){
      $(images[i]).css("border", "2px solid DodgerBlue");
      } else {
        $(images[i]).css("border", "2px solid salmon");
      };

    //display work title on hover
    $(".work-img").mouseenter(function(){
      $(".info", this).show();
    }).mouseleave(function(){
      $(".info", this).hide();
    });




});
