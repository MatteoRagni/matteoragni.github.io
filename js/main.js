//  __  __      _   _             ___                _   ___
// |  \/  |__ _| |_| |_ ___ ___  | _ \__ _ __ _ _ _ (_) | _ \___ ____  _ _ __  ___
// | |\/| / _` |  _|  _/ -_) _ \ |   / _` / _` | ' \| | |   / -_|_-< || | '  \/ -_)
// |_|  |_\__,_|\__|\__\___\___/ |_|_\__,_\__, |_||_|_| |_|_\___/__/\_,_|_|_|_\___|
//                                        |___/

$(document).ready(function(e) {
    var property = {
      dotColor: "#aaa",
      lineColor: "#999",
      maxSpeedY: 0.8,
      maxSpeedX: 0.8,
      particleRadius: 5,
      lineWidth: 0.5,
      parallaxMultiplier: 50,
      density: 15000
    }
    particleground(document.getElementById("b1"), property);
    particleground(document.getElementById("b2"), property);
    //particleground(document.getElementById("b3"), property);

    //new WOW().init();
});

$("input[name=submit]").click(function(e) {
  var mess = $("input[name=message]").val()
  if (mess != "") {
    $.post("http://mragni.altervista.org/respond.php", {message: mess});
  }
  return false;
})
