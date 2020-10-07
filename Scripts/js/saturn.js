
//hamburger click functions

function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }



//about page

$('#iconFirst').click(function(){

    $('.aboutExplain').addClass('hide')
    $('#aboutFirst').toggleClass('hide')

})

$('#iconSecond').click(function(){

    $('.aboutExplain').addClass('hide')
    $('#aboutSecond').toggleClass('hide')

})

$('#iconThird').click(function(){

    $('.aboutExplain').addClass('hide')
    $('#aboutThird').toggleClass('hide')

})

$('#iconFourth').click(function(){

    $('.aboutExplain').addClass('hide')
    $('#aboutFourth').toggleClass('hide')

})

$('#iconFifth').click(function(){

    $('.aboutExplain').addClass('hide')
    $('#aboutFifth').toggleClass('hide')

})

$('#iconSixth').click(function(){

    $('.aboutExplain').addClass('hide')
    $('#aboutSixth').toggleClass('hide')

})



// preeloader

$(window).on('load',function(){

    $('.loader-box').css('display','none','transition','display 5s');
})


