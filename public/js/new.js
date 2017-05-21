var html = document.getElementById('editor').value;
head = '<style type="text/css">#inner {color: blue; margin: auto; zoom: 0.6; -moz-transform: scale(0.6); -moz-transform-origin: 0 0;}</style>';
var body = '<div id="inner">' + html + '</div>';
var preview = document.getElementById('preview').contentWindow.document;
preview.head.innerHTML = head;
preview.body.innerHTML = body;​
