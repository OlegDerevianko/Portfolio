// ============================================
// EMAILJS INITIALIZATION
// ============================================

if (typeof emailjs !== 'undefined') {
    emailjs.init("Sd04xJXVI46KBFXMi");
    console.log('✅ EmailJS initialized');
} else {
    console.error('❌ EmailJS library not loaded');
}

// ============================================
// DOM ELEMENTS
// ============================================

const elements = {
    contactBtn: document.getElementById('contactMeBtn'),
    modal: document.getElementById('contactModal'),
    closeBtn: document.getElementById('modalClose'),
    form: document.getElementById('contactForm'),
    firstName: document.getElementById('firstName'),
    lastName: document.getElementById('lastName'),
    phone: document.getElementById('phone'),
    email: document.getElementById('email'),
    message: document.getElementById('message')
};

// ============================================
// NOTIFICATION SYSTEM
// ============================================

const Notification = {
    show(message, type = 'success') {
        // Видаляємо попереднє сповіщення
        this.remove();
        
        // Створюємо нове
        const notification = document.createElement('div');
        notification.className = `custom-notification notification-${type}`;
        notification.textContent = message;
        
        // Закриття по кліку
        notification.addEventListener('click', () => this.remove(notification));
        
        document.body.appendChild(notification);
        
        // Автоматичне видалення
        setTimeout(() => this.remove(notification), 3000);
    },
    
    remove(notification) {
        const notif = notification || document.querySelector('.custom-notification');
        if (notif) {
            notif.classList.add('hide');
            setTimeout(() => notif.remove(), 300);
        }
    }
};

// ============================================
// MODAL CONTROLS
// ============================================

const Modal = {
    open() {
        if (!elements.modal) return;
        elements.modal.classList.add('active');
        document.body.style.overflow = 'hidden';        
    },
    
    close() {
        if (!elements.modal) return;
        elements.modal.classList.remove('active');
        document.body.style.overflow = '';
    },
    
    
    handleClickOutside(e) {
        if (e.target === elements.modal) this.close();
    },
    
    handleEscape(e) {
        if (e.key === 'Escape' && elements.modal?.classList.contains('active')) {
            this.close();
        }
    }
};

// Ініціалізація обробників модального вікна
if (elements.contactBtn) elements.contactBtn.addEventListener('click', () => Modal.open());
if (elements.closeBtn) elements.closeBtn.addEventListener('click', () => Modal.close());
if (elements.modal) {
    elements.modal.addEventListener('click', (e) => Modal.handleClickOutside(e));
}
document.addEventListener('keydown', (e) => Modal.handleEscape(e));

// ============================================
// FORM VALIDATION
// ============================================

const Validator = {
    emailRegex: /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/,
    
    isEmailValid(email) {
        return this.emailRegex.test(email);
    },
    
    validate(formData) {
        if (!formData.firstName.trim()) {
            Notification.show('Please enter your first name', 'error');
            return false;
        }
        if (!formData.lastName.trim()) {
            Notification.show('Please enter your last name', 'error');
            return false;
        }
        if (!formData.email.trim()) {
            Notification.show('Please enter your email', 'error');
            return false;
        }
        if (!this.isEmailValid(formData.email)) {
            Notification.show('Please enter a valid email address', 'error');
            return false;
        }
        if (!formData.message.trim()) {
            Notification.show('Please enter your message', 'error');
            return false;
        }
        return true;
    }
};

// ============================================
// FORM SUBMISSION
// ============================================

const FormHandler = {
    getFormData() {
        return {
            firstName: elements.firstName?.value || '',
            lastName: elements.lastName?.value || '',
            phone: elements.phone?.value || '',
            email: elements.email?.value || '',
            message: elements.message?.value || ''
        };
    },
    
    setLoading(isLoading) {
        const submitBtn = elements.form?.querySelector('.submit-btn');
        if (!submitBtn) return;
        
        if (isLoading) {
            submitBtn.classList.add('loading');
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
        } else {
            submitBtn.classList.remove('loading');
            submitBtn.textContent = 'Send Message';
            submitBtn.disabled = false;
        }
    },
    
    reset() {
        if (elements.form) elements.form.reset();
    },
    
    async send(data) {
        const templateParams = {
            from_name: `${data.firstName} ${data.lastName}`,
            from_email: data.email,
            phone: data.phone || 'Not provided',
            message: data.message,
            to_name: 'Oleg Derevianko',
            reply_to: data.email
        };
        
        // ЗАМІНІТЬ НА ВАШІ ДАНІ
        return await emailjs.send("contact-oleg", "template_7s36eso", templateParams);
    },
    
    async handleSubmit(e) {
        e.preventDefault();
        
        const formData = this.getFormData();
        
        if (!Validator.validate(formData)) return;
        
        this.setLoading(true);
        
        try {
            await this.send(formData);
            Notification.show('Thank you! Your message has been sent successfully! 🎉', 'success');
            this.reset();
            setTimeout(() => Modal.close(), 500);
        } catch (error) {
            console.error('EmailJS error:', error);
            Notification.show('Oops! Something went wrong. Please try again later.', 'error');
        } finally {
            this.setLoading(false);
        }
    }
};

// Ініціалізація обробника форми
if (elements.form) {
    elements.form.addEventListener('submit', (e) => FormHandler.handleSubmit(e));
}

// ============================================
// INITIALIZATION LOG
// ============================================

console.log('📧 Contact modal initialized');
console.log('🔧 Service ID: contact-oleg');
console.log('📝 Template ID: template_7s36eso');