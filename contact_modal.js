const contactMeBtn = document.getElementById('contactMeBtn');
const contactModal = document.getElementById('contactModal');
const modalClose = document.getElementById('modalClose');
const contactForm = document.getElementById('contactForm');



// Open modal
contactMeBtn.addEventListener('click', () => {
    contactModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Close modal
function closeModal() {
    contactModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close with button
modalClose.addEventListener('click', closeModal);

// Close with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && contactModal.classList.contains('active')) {
        closeModal();
    }
});

// Close when clicking outside
contactModal.addEventListener('click', (e) => {
    if (e.target === contactModal) {
        closeModal();
    }
});

// Form submission with EmailJS
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    // Замените SERVICE_ID и TEMPLATE_ID на ваши реальные ID
    emailjs.send("contact-oleg", "template_7s36eso", formData)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Thank you for your message! I will contact you soon.');
            contactForm.reset();
            closeModal();
        }, function(error) {
            console.log('FAILED...', error);
            alert('Oops... Something went wrong. Please try again later.');
        });
});