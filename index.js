function SendEmail(){
  Email.send({
Host : "smtp.gmail.com",
Username : "fatehwebdeveloper@gmail.com",
Password : "Qwerty1987@",
To : 'fatehwebdeveloper@gmail.com',
From : document.getElementById("email").value,
Subject : "New Contact Form Enquiry",
Body : "Name "
  }).then(
message => alert(message)
)
}



var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});