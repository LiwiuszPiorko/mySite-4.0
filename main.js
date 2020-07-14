$('.technology').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.tech').offset().top
    }, 500)
})
$('.projectsSection').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.portfolio').offset().top
    }, 500)
})
$('.mottoOfMine').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.motto').offset().top
    }, 500)
})
$('.hobbies').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.hobby').offset().top
    }, 500)
})
$('.contactMe').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.contact').offset().top
    }, 500)
})
$('.menuSection').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.menu').offset().top
    }, 500)
})

const menuSection = document.querySelector('.menuSection');

function showScroll(){    
    if($(document).scrollTop()>200){
    menuSection.classList.add("active");
    }else{
    menuSection.classList.remove("active")
    }
}
window.addEventListener('scroll',showScroll);

$(document).ready(function(){
    $('.submit').click(function(event){

        let email = $('.email').val();
        let message = $('.message').val();

        if(email.length>5 && email.includes('@') && email.includes('.')){
            

        }else{
            event.preventDefault()
            alert('Wpisz poprawny adres email.')
        }

        if(message.length>15){

        }else{
            event.preventDefault()
            alert('Wiadomość powinna zawierać więcej niż 15 znaków')
        }
        

    })
})



