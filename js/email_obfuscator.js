var link = "&#106;&#101;&#102;&#102;&#101;&#114;&#121;&#100;&#114;&#101;&#121;&#110;&#111;&#108;&#100;&#115;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;";

$(document).ready(function() {
  var mailtoDivs = document.querySelectorAll('.mailto_container');
  for (var i = 0; i < mailtoDivs.length; i++) {
    mailtoDivs[i].innerHTML = "<a class='contact' href='mailto:" + link + "''><i class='not_buttons material-icons'>email</i></a>";
  }
});