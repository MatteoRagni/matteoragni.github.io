/* Contact */

function donePost(ret) {
  console.log(ret);
  var data = $.parseJSON(ret);

  // Case 0: Success
  if (data.status == 200 || data.status == "200") {
    $("#submit").css("background-color", "#4fce93");
    $("#submit span").html("Message Sent");
  }

  // Case 1: Missing Informations
  if (data.status == 406 || data.status == "406") {
    $("#submit").style("background-color", "#cf6650");
    switch(data.error) {
      case "10":
      case 10:
        $("#submit span").html("Error: Missing Contact");
      case "11":
      case 11:
        $("#submit span").html("Error: Empty Contact");
      case "20":
      case 20:
        $("#submit span").html("Error: Missing Message");
      case "21":
      case 21:
        $("#submit span").html("Error: Empty Message");
    }
  }

  // Case 2: Internal server error
  if (data.status == 500 || data.status == "500") {
    $("#submit").css("background-color", "#cf6650");
    $("#submit span").html("Error: " + data.error.toString());
  }

  // Case 3: Not authorized
  if (data.status == 401 || data.status == "401") {
    $("#submit").css("background-color", "#cf6650");
    $("#submit span").html("Error: Unhautorized");
  }
}

function failPost(ret) {
  // var data = $.parseJSON(ret);
  $("#submit").css("background-color", "#cf6650");
  $("#submit span").html("Error: Cannot reach server");
}

function alwaysPost(ret) {
  window.setTimeout(function() {
    $("#submit").css("background-color", "#4f93ce");
    $("#submit span").html("Submit");
  }, 5000);
}

function checkData(d) {
  if (d.contact == "") {
    $(".mail-input").addClass("has-error");
    $("input[name='mail']").focus();
    return false;
  } else {
    $(".mail-input").removeClass("has-error");
  }

  if (d.message == "") {
    $(".message-input").addClass("has-error");
    $("textarea[name='message']").focus();
    return false;
  } else {
    $(".message-input").removeClass("has-error");
  }

  return true;
}

function sendMessage() {
  var to_send = {
    "id":      document.title,
    "contact": $("input[name='mail']").val(),
    "subject": $("input[name='subject']").val(),
    "message": $("textarea[name='message']").val()
  }


  if (checkData(to_send)) {
    $("#submit").css("background-color", "#e7ce28");
    $("#submit span").html("Sending...");
    
    $.post("http://mragni.altervista.org/respond.php", to_send).
      done(donePost).always(alwaysPost).fail(failPost);
  }
}
