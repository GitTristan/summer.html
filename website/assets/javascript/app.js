$(document).ready(function() {
  setInterval(rotateImages, 4000);
});

function rotateImages(){
  $("#photoShow").animate({marginLeft: "-400px"}, 1000).delay(4000);

  $("#photoShow").animate({marginLeft: "-800px"}, 1000).delay(4000);

  $("#photoShow").animate({marginLeft: "-1200px"}, 1000).delay(4000);

  $("#photoShow").animate({marginLeft: "-1600px"}, 1000).delay(4000);

  $("#photoShow").animate({marginLeft: "-2000px"}, 1000).delay(4000);

  $("#photoShow").animate({marginLeft: "-2400px"}, 1000).delay(4000);

  $("#photoShow").animate({marginLeft: "-2800px"}, 1000).delay(4000);

  $("#photoShow").animate({marginLeft: "-3200px"}, 1000).delay(4000);

  $("#photoShow").animate({marginLeft: "-3600px"}, 1000).delay(4000);

  $("#photoShow").animate({marginLeft: "-4000px"}, 1000).delay(4000);

  $("#photoShow").animate({marginLeft: "-4400px"}, 1000).delay(4000);

  $("#photoShow").animate({marginLeft: "-0px"}, 1000).delay(4000);
}
