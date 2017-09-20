$(document).ready(function() {
  var $nextButton = $('.next');
  var $lastButton = $('.last');


  var sources = {
    binaural: [
      './images/binaural_landing.png',
      './images/binaural_modal.png',
      './images/binaural.png',
      './images/binaural_about.png'
      ],
    same: [
      './images/same_login.png',
      './images/same_search.png',
      './images/same_attendee_profile.png'
    ],
    color: [
      './images/color_home.png',
      './images/color_dismiss.png',
      './images/color_nav.png'
    ],
    campground_snob: [
      './images/campground_snob_landing.jpg',
      './images/campground_snob_login.jpg',
      './images/campground-snob.jpg',
    ]
  };

  var i = 0;
  $nextButton.click(function(event) {
    var targetApp = ($(event.target).parents('div.row')[0].id);
    if (i < sources[targetApp].length - 1) {
      $('#' + targetApp + '_photos').css('background-image', 'url(' + sources[targetApp][i + 1]+ ')');
      i++;
    } else if (i === sources[targetApp].length -1) {
      $('#' + targetApp + '_photos').css('background-image', 'url(' + sources[targetApp][0]+ ')');
      i = 0;
    }
  });
  $lastButton.click(function(event) {
    var targetApp = ($(event.target).parents('div.row')[0].id);
    var lastIndex = sources[targetApp].length - 1;
    if (i > 0) {
      $('#' + targetApp + '_photos').css('background-image', 'url(' + sources[targetApp][i - 1]+ ')');
      i--;
    } else if (i === 0) {
      $('#' + targetApp + '_photos').css('background-image', 'url(' + sources[targetApp][lastIndex]+ ')');
      i = lastIndex;
    }
  });
});

