// window.onload = function (){
//     window.addEventListener('scroll',function (e){
//         if (window.pageYOffset > 100){
//             document.querySelector("header").classList.add('is-scrolling');
//         }
//         else{
//             document.querySelector("header").classList.remove('is-scrolling');
//         }
//     });






    // const menu_btn = document.querySelector('.hamburger');
    // menu_btn.addEventListener('click', function (){

    //     menu_btn.classList.toggle('is-avctive');

    // });


  
  
  

    
    function myFunction() {
      var input, filter, ul, li, a, i, txtValue;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      ul = document.getElementById("products");
      li = ul.getElementsByTagName("li");
      for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("a")[0];
          txtValue = a.textContent || a.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
              li[i].style.display = "";
          } else {
              li[i].style.display = "none";
          }
      }
  }





    window.onload=function(){
        const menu_btn=document.querySelector('.hamburger');
        const mobile_menu= document.querySelector('.mobile-nav');
    
        menu_btn.addEventListener('click', function(){
            menu_btn.classList.toggle('is-active');
            mobile_menu.classList.toggle('is-active');
        })
       
    }




   
    $(document).on('ready', function() {
      $(".vertical-center-4").slick({
        dots: true,
        vertical: true,
        centerMode: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        

      });
      $(".vertical-center-3").slick({
        dots: true,
        vertical: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
      $(".vertical-center-2").slick({
        dots: true,
        vertical: true,
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 2
      });
      $(".vertical-center").slick({
        dots: true,
        vertical: true,
        centerMode: true,
      });
      $(".vertical").slick({
        dots: true,
        vertical: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
      $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
      $(".center").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 3
      });
      $(".variable").slick({
        dots: true,
        infinite: true,
        variableWidth: true
      });
      $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true
      });
    });





document.getElementById("value").addEventListener("keyup", filterSearch);
function filterSearch(){
   var value,name,profile,i;
   value = document.getElementById('value').value.toUpperCase();
profile = document.getElementsByClassName('profile');
  for(i=0;profile.length;i++){
    name = profile[i].getElementsByClassName('name');
    if(name[0].innerHTML.toUpperCase().indexOf(value) > -1){
      profile[i].style.display ="flex";
    }else{
      profile[i].style.display = "none";
    }
  }  
}

