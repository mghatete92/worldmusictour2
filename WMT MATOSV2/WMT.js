<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr">
<head>
$(document).ready(function() {
  $(".title").lettering();
  $(".button").lettering();
});





$(document).ready(function() {
  animation();
}, 1000);

$('.button').click(function() {
  animation();
});


function animation() {
  var title1 = new TimelineMax();
  title1.to(".button", 0, {visibility: 'hidden', opacity: 0})
  title1.staggerFromTo(".title span", 0.5,
  {ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
  {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);
  title1.to(".button", 0.2, {visibility: 'visible' ,opacity: 1})
}
</body>
</html>
