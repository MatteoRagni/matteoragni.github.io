$(document).ready(function($) {
  /* Details for ie */
	$('html').addClass($.fn.details.support ? 'details' : 'no-details');
	$('details').details();

  $("#message-length").html($("textarea[name='message']").attr("maxlength"));

  $('textarea[name="message"]').on("change keyup paste", function(e) {
    var max = $(this).attr("maxlength");
    var act = $(this).val().length;
    $("#message-length").html((max - act).toString());
  });

  $('.level-bar-inner').css('width', '0');
  $(window).on('load', function() {
    $('.level-bar-inner').each(function() {
      var itemWidth = $(this).data('level');
        $(this).animate({
          width: itemWidth
        }, 800);
      });
    });

  /* Procedure for sending form data */
  $("#submit").click(function(e) {
    sendMessage();
  });
  /*$("#submit").click(function(e) {
    var mess = $("input[name='subject']").val() + "\n\n" + $("textarea[name='message']").val();
    var mail = $("input[name='mail']").val();
    if (mess != "") {
      $.post("http://mragni.altervista.org/respond.php",
        {message: mess, mail: mail}).
        done(function(d) { console.log(d);
          if(d == "NO") {
            alert("There was an error...");
          }
          if (d == "OK") {
            alert("Message sent!");
            $("textarea[name=message]").val("");
            $("input[name=mail]").val("");
          }
        });
    }
    return false;
  });*/
});
