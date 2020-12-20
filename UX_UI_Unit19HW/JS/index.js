
$(document).ready(function () {
$(".button").hover(
  function () {
    $(this).css({
      background: 'pink',
      color: 'white',
      '-webkit-text-stroke-width': '0px',
      '-webkit-text-stroke-color': 'white'
    });
  }, function () {
    $(this).css({
      background: 'darkblue',
      color: 'white'
    });
  }
);
$(".button").click(
  function () {
    $(this).css({
      background: 'pink',
      color: 'white'
    });
  }
);
});