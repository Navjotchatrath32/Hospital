// script.js

$(document).ready(function() {
    // Page Loader
    $('#page-loader').fadeOut();

    // Smooth scroll for section links
    $('#section-nav a').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    // Highlight the active section link
    $(window).on('scroll', function() {
        var scrollPos = $(document).scrollTop();
        $('#section-nav a').each(function() {
            var currLink = $(this);
            var refElement = $(currLink.attr('href'));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('#section-nav ul li a').removeClass('active');
                currLink.addClass('active');
            } else {
                currLink.removeClass('active');
            }
        });
    });
});
//new faq section


document.addEventListener('DOMContentLoaded', function () {
    var faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(function (item) {
        item.addEventListener('click', function () {
            var answer = this.querySelector('.faq-answer');
            var question = this.querySelector('.faq-question');

            if (answer.style.display === 'none' || answer.style.display === '') {
                answer.style.display = 'block';
                question.dataset.icon = '-';
            } else {
                answer.style.display = 'none';
                question.dataset.icon = '+';
            }
        });
    });
});

let currentHospitalIndex = 0;
let currentDoctorIndex = 0;

function showHospitals(index) {
    const hospitals = document.querySelectorAll('.hospital-item');
    const hospitalsToShow = 3;
    currentHospitalIndex = index;

    hospitals.forEach((hospital, i) => {
        hospital.style.display = (i >= index * hospitalsToShow && i < (index + 1) * hospitalsToShow) ? 'block' : 'none';
    });

    const dots = document.querySelectorAll('.hospital-navigation .dot');
    dots.forEach((dot, i) => {
        dot.className = dot.className.replace(' active', '');
        if (i === index) {
            dot.className += ' active';
        }
    });
}

function showDoctors(index) {
    const doctors = document.querySelectorAll('.doctor-item');
    const doctorsToShow = 3;
    currentDoctorIndex = index;

    doctors.forEach((doctor, i) => {
        doctor.style.display = (i >= index * doctorsToShow && i < (index + 1) * doctorsToShow) ? 'block' : 'none';
    });

    const dots = document.querySelectorAll('.doctor-navigation .dot');
    dots.forEach((dot, i) => {
        dot.className = dot.className.replace(' active', '');
        if (i === index) {
            dot.className += ' active';
        }
    });
}

// Initial display
showHospitals(0);
showDoctors(0);
