

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    keyboard: true,
    loop:true,
    zoom:{
        minRatio:3,
        maxRatio:7,
    },
    autoplay:{
        delay:9000,
        disableOnInteraction:true,
        waitForTransition:false,
    },
    speed:2000,
    parallax:true,
    
    
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
     

    },
  });
  

  AOS.init();



  var roomSwiper = new Swiper(".rooms-swiper", {
    effect: "coverflow",
    keyboard:true,
    autoplay:{
        delay:9000,
        disableOnInteraction:true,
        waitForTransition:false,
    },
    centeredSlides: true,
    loop:true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 4,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  function sendEmail(){
    Email.send({
      Host : "smtp25.elasticemail.com",
      Username : "sarfosilas2022@gmail.com",
      Password :"D3DEC94A590637EF8BF38EA9AA048D19F6DE",
      To:"sarfosilas2003@gmail.com",
      From:"sarfosilas2022@gmail.com",
      ReplyFrom:document.getElementById("email").value,
      Subject : "New reservation",
      Body : "Check in: "+document.getElementById("checkIn").value
              +"<br> Check out: "+ document.getElementById("checkOut").value
              +"<br> Adults: "+ document.getElementById("adults").value
              +"<br> Children: "+ document.getElementById("children").value
              +"<br> Rooms: "+ document.getElementById("rooms2").value
              +"<br> Email: "+ document.getElementById("email").value

  }).then(
    message => alert(message)
  );
  }

  var box = document.querySelector(".bx");
  var dropDown = document.querySelector(".dropdown");


  box.addEventListener("click",function(){

    if(dropDown.style.top=="-40px"){
      dropDown.style.top="90px";
    }else{
    dropDown.style.top="-40px";
    console.log("hi")
    }
  })