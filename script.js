$(function() {

 $("#onclick").click(function() {
  $('html, body').animate({
   scrollTop: 0
  }, 'fast');
  $("#contactdiv").css("display", "block");
 });
 $("#contact #cancel").click(function() {
  $(this).parent().parent().hide();
 });

 $("#send").click(function() {
  var name = $("#name").val();
  var email = $("#email").val();
  var contact = $("#contactno").val();
  var message = $("#message").val();
  if (name == "" || email == "" || contactno == "" || message == "") {
   alert("Please Fill All Fields");
  } else {
   if (validateEmail(email)) {
    $("#contactdiv").css("display", "none");
   } else {
    alert('Invalid Email Address');
   }

   function validateEmail(email) {
    var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    if (filter.test(email)) {
     return true;
    } else {
     return false;
    }
   }
  }
 });

 $('.nav-buttons').on('click', function() {
  alert('Still underconstruction, please subscribe for updates :)');
 });

 $('#user-rating5').barrating({
  theme: 'fontawesome-stars'

 });
 $('#user-rating4').barrating({
  theme: 'fontawesome-stars'

 });
 $('#user-rating3').barrating({
  theme: 'fontawesome-stars'

 });
 $('#user-rating2').barrating({
  theme: 'fontawesome-stars'

 });
 $('#user-rating1').barrating({
  theme: 'fontawesome-stars'

 });

 $('.navbar').data('size', 'big');
});

$(window).scroll(function() {
 if ($(document).scrollTop() > 0) {
  if ($('.navbar').data('size') == 'big') {
   $('.navbar').data('size', 'small');
   $('.navbar').stop().animate({
    height: '40px'
   }, 600);
  }
 } else {
  if ($('.navbar').data('size') == 'small') {
   $('.navbar').data('size', 'big');
   $('.navbar').stop().animate({
    height: '10vh'
   }, 600);
  }
 }

});
