var cb = function() {
    var l = document.createElement('link'); l.rel = 'stylesheet';
    l.href = 'http://fonts.googleapis.com/css?family=Open+Sans';
    document.getElementsByTagName('head')[0].appendChild(l);
  };
var raf = requestAnimationFrame || mozRequestAnimationFrame ||
    webkitRequestAnimationFrame || msRequestAnimationFrame;
    if (raf) raf(cb);
    else window.addEventListener('load', cb);

var cb = function() {
    var l = document.createElement('link'); l.rel = 'stylesheet';
    l.href = 'https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css';
    document.getElementsByTagName('head')[0].appendChild(l);
  };
var raf = requestAnimationFrame || mozRequestAnimationFrame ||
    webkitRequestAnimationFrame || msRequestAnimationFrame;
    if (raf) raf(cb);
    else window.addEventListener('load', cb);

