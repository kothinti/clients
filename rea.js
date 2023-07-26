var lastScrollTop = 0;

$(window).scroll(function() {
    var currentScrollTop = $(this).scrollTop();
    if (currentScrollTop > lastScrollTop){
        // User is scrolling down the page
        $('.navbar-fixed').css('transform', 'translate(0px, -90px)'); // Hides the navbar
    } else {
        // User is scrolling up the page
        $('.navbar-fixed').css('transform', 'translate(0px, 0px)');  // Shows the navbar
    }
    lastScrollTop = currentScrollTop;
});

$(document).on('click', function() {
    $('.navbar-fixed').css('transform', 'translate(0px, 0px)');
});

$(document).ready(function(){
  $('.open-bookacall').click(function(){
  	$('.book-a-call').css("display","flex");
    	$('body').css('overflow','hidden');
  });
  $('.close-icon').click(function(){
  	$('.book-a-call').css("display","none");
  	$(".form-step0").removeAttr("style").css("display","block");
    	$(".form-step1").removeAttr("style").css("display","none");
    	$(".form-step2").removeAttr("style").css("display","none");
    	$(".form-step3").removeAttr("style").css("display","none");
    	$(".form-step4").removeAttr("style").css("display","none");
    	$('body').css('overflow','auto');
  });

  var hubspotmeetinglink = "https://meetings-eu1.hubspot.com/rea-shahroudi";
  
  $('.btn-step0').click(function(){
  	$(".form-step0").animate({opacity: 0, bottom: '100px'}, "slow", function() {
      $(this).hide();
      $(".form-step1").css('bottom', '-100px').show().animate({opacity: 1, bottom: '0px'}, "slow");
    });
  });
  
  $('.btn-step1').click(function(){
  	$('.errorpleaseselect').hide();  
		if($("input[name='Age-Group']:checked").val() != undefined){
          $(".form-step1").animate({opacity: 0, bottom: '100px'}, "slow", function() {
            $(this).hide();
            $(".form-step2").css('bottom', '-100px').show().animate({opacity: 1, bottom: '0px'}, "slow");
          });
      }else{
          $('.errorpleaseselect').show();
      }
  });
  
  $('.btn-step2').click(function(){
  	$('.errorpleaseselect').hide();
    if($("input[name='Gender']:checked").val() != undefined){
      	$(".form-step2").animate({opacity: 0, bottom: '100px'}, "slow", function() {
            $(this).hide();
            $(".form-step3").css('bottom', '-100px').show().animate({opacity: 1, bottom: '0px'}, "slow");
          });
      
    }else{
    	$('.errorpleaseselect').show();  
    }
  });
  
  $('.btn-step3').click(function(){
  	$('.errorpleaseselect').hide();
    if($("input[name='Dating-stage']:checked").val() != undefined){
    	$(".form-step3").animate({opacity: 0, bottom: '100px'}, "slow", function() {
            $(this).hide();
            $(".form-step4").css('bottom', '-100px').show().animate({opacity: 1, bottom: '0px'}, "slow");
          });
    }else{
    	$('.errorpleaseselect').show();
    }
  });
  
  $('.btn-step4').click(function(){
  	let email_regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		let emailid = $('.emailid').val();
    $('.emailerror').hide();
    if(email_regex.test(emailid)){
    	 $('.loading-bar').css("display","flex");
        $('.book-a-call-form').submit();
        setTimeout(function() {
		  $('.book-a-call').css("display","none");
          $('.form-step4').css("display","none");
          $('.form-step1').css("display","block");
          location.href = hubspotmeetinglink+"?email="+emailid;
        }, 2000);
		}else{
    	$('.emailerror').show();
    }
  });
});
