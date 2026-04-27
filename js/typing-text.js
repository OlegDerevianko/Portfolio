// ===== Анимация печатающегося текста =====

class TypewriterAnimation {
    constructor(element, options = {}) {
        this.element = element;
        this.text = element.innerText;
        this.speed = options.speed || 50; // мс на символ
        this.delay = options.delay || 500; // задержка перед началом
        this.cursor = options.cursor !== false;
        
        this.init();
    }
    
    init() {
        // Очищаем элемент и сохраняем оригинальный текст
        this.element.innerHTML = '';
        this.element.style.opacity = '1';
        
        // Добавляем курсор если нужно
        if (this.cursor) {
            this.cursorElement = document.createElement('span');
            this.cursorElement.className = 'typing-cursor';
        }
        
        // Запускаем анимацию
        setTimeout(() => this.type(), this.delay);
    }
    
    type() {
        let i = 0;
        const interval = setInterval(() => {
            if (i < this.text.length) {
                // Добавляем следующий символ
                this.element.innerHTML = this.text.substring(0, i + 1);
                if (this.cursor) {
                    this.element.appendChild(this.cursorElement);
                }
                i++;
            } else {
                // Анимация завершена
                clearInterval(interval);
                if (this.cursor) {
                    // Медленно убираем курсор
                    setTimeout(() => {
                        if (this.cursorElement) {
                            this.cursorElement.style.opacity = '0';
                            setTimeout(() => {
                                if (this.cursorElement) {
                                    this.cursorElement.remove();
                                }
                            }, 300);
                        }
                    }, 1000);
                }
            }
        }, this.speed);
    }
}

// Запускаем анимацию при загрузке
document.addEventListener('DOMContentLoaded', () => {
    const aboutText = document.querySelector('.about-text');
    if (aboutText && !window.typewriterStarted) {
        window.typewriterStarted = true;
        new TypewriterAnimation(aboutText, {
            speed: 30,      // скорость печати (мс)
            delay: 300,     // задержка перед началом
            cursor: true    // показывать курсор
        });
    }
});