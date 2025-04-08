
const contactMeBtn = document.getElementById('contactMeBtn');
        const contactModal = document.getElementById('contactModal');
        const modalClose = document.getElementById('modalClose');
        const contactForm = document.getElementById('contactForm');

        // Open modal
        contactMeBtn.addEventListener('click', () => {
            contactModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });

        // Close modal
        function closeModal() {
            contactModal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
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

        // Form submission
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the data to a server
            // For this example, we'll just log it and show an alert
            console.log({
                firstName,
                lastName,
                phone,
                email,
                message
            });
            
            alert('Thank you for your message! I will contact you soon.');
            contactForm.reset();
            closeModal();
        });