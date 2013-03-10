$(function(){
    var size = 200,
        color,
        bg = [],

        rnd = function(lim) {
            return Math.round(Math.random() * lim);
        }

    for(var i=1;i<size/7;i++) {
        var color = "rgba(" + rnd(255) + "," + rnd(255) + "," + rnd(255) + "," + Math.random() * 0.1 + ")";
        var bgSize = rnd(size/10) + 4;
        bg.push("-webkit-radial-gradient(" + color + " " + bgSize + "px, transparent " + bgSize + "px) " + rnd(size) + "px " + rnd(size) + "px");
    }

    bg = bg.join(",");

    $('head').append("<style> body { background: " + bg + "; background-size: " + size + "px " + size + "px;} </style>");
});
