// Email obfuscator script 2.1 by Tim Williams, University of Arizona
// Random encryption key feature coded by Andrew Moulden
// This code is freeware provided these four comment lines remain intact
// A wizard to generate this code is at http://www.jottings.com/obfuscator/
{ coded = "GpsspShYSphkAWYr@DbENW.dAb";
  key = "eDAumd7Q1iak6lChGrzT2JxH40pf8LbYwO3NEgoW5ctSVZRnFPqyjsIXMv9BUK";
  shift=coded.length;
  link="";
  var body="";
  for (i=0; i<coded.length; i++) {
    if (key.indexOf(coded.charAt(i))==-1) {
      ltr = coded.charAt(i);
      link += (ltr);
    }
    else {     
      ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length;
      link += (key.charAt(ltr));
    }
  }

$(document).ready(function() {
  var mailtoDiv = document.getElementById('mailto_container');
  mailtoDiv.innerHTML = "<a class='contact' href='mailto:" + link + "''><i class='not_buttons material-icons'>email</i></a>";
});
}
