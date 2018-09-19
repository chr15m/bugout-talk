var files = ["index.html", "style.css"];
var old = null;
setInterval(function() {
  fetch("index.html").then(function(data) {
    data.text().then(function(t) {
      if (old != null && old != t) {
        document.location.reload();
      }
      old = t;
    });
  });
}, 500);
