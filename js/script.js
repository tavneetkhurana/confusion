$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000, cycle: true, pause: "null"} );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');                    
        }
    });
});

 var x = document.getElementById('con1');
 var y = x.querySelectorAll("p");
    var i;
    for (i = 0; i < y.length; i++) {
         y[i].classList.add("d-none", "d-sm-block");
    }

 var a = document.getElementById('con2');
 var b = a.querySelectorAll("p");
      var j;
        for (j = 0; j < b.length; j++) {
         b[j].classList.add("d-none", "d-sm-block");
        }
    

 var m = document.getElementById('con3');
 var n = m.querySelectorAll("p");
    var k;
    for (k = 0; k < n.length; k++) {
        n[k].classList.add("d-none", "d-sm-block");
    }


$("#loginButton").click(function(){
    $('#loginModal').modal('show');
});

$("#reservationButton").click(function(){
    $('#reservationModal').modal('show');
});


var p = document.getElementById('copLead');
var q = p.querySelectorAll("p");
   var l;
   for (l = 0; l < q.length; l++) {
       y[l].classList.add("d-none", "d-sm-block");
   }