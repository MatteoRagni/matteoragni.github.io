/* Contact */

function donePost(ret) {
  var data = $.parseJSON(ret);

  if (data.status == 200 || data.status == "200") {
    $("#submit").style("background-color", "#4fce93");
    $("#submit span").innerHtml("Message Sent")
  }


}

function failPost(ret) {
  var data = $.parseJSON(ret);
}

function alwaysPost(ret) {
  var data = $.parseJSON(ret);
}

function sendMessage() {
  var to_send = {
    "contact": $("input[name='mail']").val();
    "subject": $("input[name='subject']").val();
    "message": $("input[name='message']").val();
  }

  $.post("http://mragni.altervista.org/respond.php", to_send).
    done()
}
