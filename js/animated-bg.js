// ===== Анимированный фон с плавающими символами =====

class FloatingSymbolsBackground {
    constructor() {
        this.symbols = [
            // Математические символы
            '∑', '∫', '√', '∞', 'π', '≈', '≠', '≤', '≥', '±', '÷', '×',
            '∂', '∆', '∏', '∐', '∑', '√', '∛', '∜', '∝', '∞', '∟', '∠',
            '∡', '∢', '∣', '∤', '∥', '∦', '∧', '∨', '∩', '∪', '∫', '∬',
            '∭', '∮', '∯', '∰', '∱', '∲', '∳', '∴', '∵', '∶', '∷',
            
            // Скобки и операторы
            '{', '}', '(', ')', '[', ']', '<', '>', '&', '|', '!', '?',
            '«', '»', '‹', '›', '⟨', '⟩', '〈', '〉', '⦃', '⦄',
            
            // Буквы разных алфавитов
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
            'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
            'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
            'α', 'β', 'γ', 'δ', 'ε', 'ζ', 'η', 'θ', 'ι', 'κ', 'λ', 'μ', 'ν',
            'ξ', 'ο', 'π', 'ρ', 'σ', 'τ', 'υ', 'φ', 'χ', 'ψ', 'ω',
            'Α', 'Β', 'Γ', 'Δ', 'Ε', 'Ζ', 'Η', 'Θ', 'Ι', 'Κ', 'Λ', 'Μ', 'Ν',
            'Ξ', 'Ο', 'Π', 'Ρ', 'Σ', 'Τ', 'Υ', 'Φ', 'Χ', 'Ψ', 'Ω',
            
            // Специальные символы
            '©', '®', '™', '§', '¶', '†', '‡', '•', '◘', '○', '◙', '♂', '♀',
            '♪', '♫', '☼', '►', '◄', '↕', '‼', '¶', '§', '▬', '↨', '↑', '↓',
            '→', '←', '∟', '↔', '▲', '▼', '◆', '◇', '◎', '●', '◢', '◣', '◤', '◥',
            '░', '▒', '▓', '█', '▄', '▀', '■', '▬', '▭', '▮', '▯', '▰', '▱',
            
            // Символы валют
            '$', '€', '£', '¥', '₽', '₿', '₹', '₩', '₪', '₫', '¢', '₡', '₦',
            '₱', '₲', '₴', '₵', '₸', '₹', '₺', '₻', '₼', '₽', '₾', '₿',
            
            // Стрелки
            '↑', '↓', '←', '→', '↖', '↗', '↙', '↘', '↺', '↻', '↼', '↽',
            '↾', '↿', '⇀', '⇁', '⇂', '⇃', '⇄', '⇅', '⇆', '⇇', '⇈', '⇉',
            '⇊', '⇋', '⇌', '⇍', '⇎', '⇏', '⇐', '⇑', '⇒', '⇓', '⇔', '⇕',
            
            // HTML/XML теги
            '&lt;', '&gt;', '&amp;', '&quot;', '&apos;', '&copy;', '&reg;',
            '&trade;', '&dollar;', '&euro;', '&pound;', '&yen;', '&sect;',
            
            // Символы кода
            ';', ':', '@', '#', '%', '^', '*', '_', '=', '+', '-', '/', '\\',
            '~', '`', '"', "'", ',', '.', '|', '¦', '¬', '¯', '˘', '˙', '˚',
            '˛', 'ˇ', '˝', 'ˉ', 'ˊ', 'ˋ', 'ˌ', 'ˍ', 'ˎ', 'ˏ', 'ː', 'ˑ',
            
            // Декоративные символы
            '❤', '★', '☆', '✿', '❀', '✦', '✧', '✪', '✫', '✬', '✭', '✮', '✯',
            '✰', '✱', '✲', '✳', '✴', '✵', '✶', '✷', '✸', '✹', '✺', '✻', '✼',
            '✽', '✾', '✿', '❁', '❂', '❃', '❄', '❅', '❆', '❇', '❈', '❉', '❊',
            
            // Технологические символы
            '</>', '{}', '[]', '()', '=>', '<=', '===', '!==', '&&', '||',
            '++', '--', '+=', '-=', '*=', '/=', '%=', '**', '//',
            
            // Короткие слова и аббревиатуры
            'JS', 'CSS', 'HTML', 'API', 'WEB', 'DEV', 'CODE', 'DATA', 
            'CLOUD', 'AI', 'UX', 'UI', 'APP', 'SITE', 'BLOG', 'SHOP',
            'NEWS', 'BETA', 'ALPHA', 'v1', 'v2', '0.1', '1.0', '2.0',
            'REACT', 'VUE', 'NODE', 'PY', 'RB', 'PHP', 'SQL', 'NoSQL',
            'GIT', 'DOCKER', 'AWS', 'CPP', 'JAVA', 'GO', 'RUST', 'SWIFT'
        ];
        
        this.container = document.getElementById('floatingSymbols');
        if (!this.container) {
            console.warn('Container #floatingSymbols not found, creating one...');
            this.container = document.createElement('div');
            this.container.id = 'floatingSymbols';
            this.container.className = 'floating-symbols';
            const animatedBg = document.querySelector('.animated-bg');
            if (animatedBg) {
                animatedBg.appendChild(this.container);
            } else {
                document.body.appendChild(this.container);
            }
        }
        
        this.symbolCount = this.getSymbolCountByScreenSize();
        this.activeSymbols = [];
        this.animationFrame = null;
        this.isRunning = true;
        
        this.init();
        this.handleResize();
        
        // Сохраняем экземпляр в глобальную переменную
        window.floatingSymbolsInstance = this;
    }
    
    getSymbolCountByScreenSize() {
        const width = window.innerWidth;
        if (width < 480) return 20;
        if (width < 768) return 35;
        if (width < 1200) return 60;
        return 100;
    }
    
    generateRandomSymbol() {
        return this.symbols[Math.floor(Math.random() * this.symbols.length)];
    }
    
    generateRandomPosition() {
        return Math.random() * 100;
    }
    
    generateRandomDuration() {
        return 8 + Math.random() * 22;
    }
    
    generateRandomDelay() {
        return Math.random() * 15;
    }
    
    generateRandomFontSize() {
        return 10 + Math.random() * 35;
    }
    
    generateRandomRotation() {
        return Math.random() * 360;
    }
    
    getThemeColor() {
        const isDark = document.body.classList.contains('dark-mode');
        if (isDark) {
            return `rgba(255, 255, 255, ${0.05 + Math.random() * 0.1})`;
        } else {
            return `rgba(0, 0, 0, ${0.08 + Math.random() * 0.12})`;
        }
    }
    
    createSymbol(direction = 'down') {
        const symbol = document.createElement('div');
        symbol.className = 'floating-symbol';
        
        // Случайный символ
        symbol.textContent = this.generateRandomSymbol();
        
        // Случайное положение по горизонтали (0-100%)
        const leftPos = this.generateRandomPosition();
        symbol.style.left = `${leftPos}%`;
        
        // Случайный размер
        const fontSize = this.generateRandomFontSize();
        symbol.style.fontSize = `${fontSize}px`;
        
        // Случайная прозрачность
        symbol.style.opacity = '0';
        
        // Цвет в зависимости от темы
        symbol.style.color = this.getThemeColor();
        
        // Случайное начальное вращение
        const rotation = this.generateRandomRotation();
        symbol.style.transform = `rotate(${rotation}deg)`;
        
        // Выбор анимации в зависимости от направления
        const animationName = direction === 'down' ? 'floatSymbol' : 'floatSymbolReverse';
        const duration = this.generateRandomDuration();
        const delay = this.generateRandomDelay();
        
        symbol.style.animation = `${animationName} ${duration}s linear ${delay}s infinite`;
        
        // Добавляем кастомные свойства для анимации
        symbol.style.setProperty('--duration', duration);
        symbol.style.setProperty('--delay', delay);
        
        return symbol;
    }
    
    generateSymbols() {
        if (!this.isRunning) return;
        
        // Очищаем контейнер
        if (this.container) {
            this.container.innerHTML = '';
        }
        this.activeSymbols = [];
        
        // Обновляем количество символов
        this.symbolCount = this.getSymbolCountByScreenSize();
        
        // Создаем новые символы
        for (let i = 0; i < this.symbolCount; i++) {
            // 60% символов летят сверху вниз, 40% снизу вверх
            const direction = Math.random() < 0.6 ? 'down' : 'up';
            const symbol = this.createSymbol(direction);
            if (this.container) {
                this.container.appendChild(symbol);
                this.activeSymbols.push(symbol);
            }
        }
    }
    
    updateThemeColors() {
        this.activeSymbols.forEach(symbol => {
            symbol.style.color = this.getThemeColor();
        });
    }
    
    stopAnimation() {
        this.isRunning = false;
        if (this.container) {
            this.container.innerHTML = '';
            this.activeSymbols = [];
        }
    }
    
    startAnimation() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.generateSymbols();
        }
    }
    
    handleResize() {
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                if (this.isRunning) {
                    this.generateSymbols();
                }
            }, 250);
        });
    }
    
    init() {
        this.generateSymbols();
        
        // Слушаем изменение темы
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    this.updateThemeColors();
                }
            });
        });
        
        observer.observe(document.body, { attributes: true });
    }
}

// ===== Управление анимированным фоном =====

class BackgroundEffectManager {
    constructor() {
        this.isEnabled = true;
        this.button = document.getElementById('toggleBgEffect');
        this.checkbox = document.getElementById('bgEffectToggle');
        this.bgContainer = document.querySelector('.animated-bg');
        this.symbolsContainer = document.getElementById('floatingSymbols');
        this.floatingSymbolsInstance = null;
        
        this.init();
    }
    
    init() {
        // Получаем экземпляр FloatingSymbolsBackground
        if (window.floatingSymbolsInstance) {
            this.floatingSymbolsInstance = window.floatingSymbolsInstance;
        } else {
            // Если еще не создан, ждем
            setTimeout(() => {
                if (window.floatingSymbolsInstance) {
                    this.floatingSymbolsInstance = window.floatingSymbolsInstance;
                    this.loadState();
                }
            }, 100);
        }
        
        // Загружаем сохраненное состояние из localStorage
        this.loadState();
        
        // Добавляем обработчик кнопки
        if (this.button) {
            this.button.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggle();
            });
        }
        
        // Добавляем обработчик для checkbox
        if (this.checkbox) {
            this.checkbox.addEventListener('change', (e) => {
                if (e.target.checked) {
                    this.enable();
                } else {
                    this.disable();
                }
            });
        }
        
        // Добавляем горячую клавишу 'B' для переключения
        document.addEventListener('keydown', (e) => {
            if (e.key === 'b' || e.key === 'B') {
                this.toggle();
                this.animateButtonPress();
            }
        });
    }
    
    loadState() {
        const saved = localStorage.getItem('backgroundEffectEnabled');
        if (saved !== null) {
            this.isEnabled = saved === 'true';
        } else {
            this.isEnabled = true;
        }
        
        // Применяем состояние с небольшой задержкой
        setTimeout(() => {
            if (!this.isEnabled) {
                this.disableUI();
            } else {
                this.enableUI();
            }
        }, 50);
    }
    
    saveState() {
        localStorage.setItem('backgroundEffectEnabled', this.isEnabled);
    }
    
    enable() {
        this.isEnabled = true;
        this.saveState();
        
        if (this.floatingSymbolsInstance) {
            this.floatingSymbolsInstance.startAnimation();
        } else if (this.symbolsContainer) {
            if (window.floatingSymbolsInstance) {
                window.floatingSymbolsInstance.startAnimation();
            }
        }
        
        // Показываем контейнер
        if (this.bgContainer) {
            this.bgContainer.style.display = 'block';
        }
        
        if (this.symbolsContainer) {
            this.symbolsContainer.style.opacity = '1';
        }
        
        this.updateButtonUI(true);
        if (this.checkbox) this.checkbox.checked = true;
        
        this.showToast('✨ Background effects enabled', 'success');
    }
    
    disable() {
        this.isEnabled = false;
        this.saveState();
        
        if (this.floatingSymbolsInstance) {
            this.floatingSymbolsInstance.stopAnimation();
        }
        
        if (this.symbolsContainer) {
            this.symbolsContainer.style.opacity = '0';
            this.symbolsContainer.innerHTML = '';
        }
        
        if (this.bgContainer) {
            this.bgContainer.style.display = 'none';
        }
        
        this.updateButtonUI(false);
        if (this.checkbox) this.checkbox.checked = false;
        
        this.showToast('💤 Background effects disabled', 'info');
    }
    
    toggle() {
        if (this.isEnabled) {
            this.disable();
        } else {
            this.enable();
        }
    }
    
    updateButtonUI(enabled) {
        if (!this.button) return;
        
        if (enabled) {
            this.button.classList.remove('effects-off');
            const statusSpan = this.button.querySelector('.toggle-status');
            if (statusSpan) statusSpan.textContent = 'ON';
            
            const icon = this.button.querySelector('i');
            if (icon) {
                icon.className = 'fas fa-circle-check';
                icon.style.color = '';
            }       
        } else {
            this.button.classList.add('effects-off');
            const statusSpan = this.button.querySelector('.toggle-status');
            if (statusSpan) statusSpan.textContent = 'OFF';
            
            const icon = this.button.querySelector('i');
            if (icon) {
                icon.className = 'fas fa-circle-xmark';
                icon.style.color = '#ef4444';
            }            
        }
    }
    
    disableUI() {
        if (this.bgContainer) {
            this.bgContainer.style.display = 'none';
        }
        if (this.symbolsContainer && this.symbolsContainer.children.length > 0) {
            this.symbolsContainer.innerHTML = '';
        }
        this.updateButtonUI(false);
    }
    
    enableUI() {
        if (this.bgContainer) {
            this.bgContainer.style.display = 'block';
        }
        if (this.symbolsContainer) {
            this.symbolsContainer.style.opacity = '1';
        }
        this.updateButtonUI(true);
    }
    
    animateButtonPress() {
        if (!this.button) return;
        this.button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            if (this.button) {
                this.button.style.transform = '';
            }
        }, 150);
    }
    
    showToast(message, type = 'info') {
        // Удаляем существующий тост
        const existingToast = document.querySelector('.toast-notification');
        if (existingToast) existingToast.remove();
        
        const toast = document.createElement('div');
        toast.className = `toast-notification ${type}`;
        toast.textContent = message;
        
        const borderColor = type === 'success' ? '#10b981' : '#fbd144';
        
        toast.style.cssText = `
            position: fixed;
            bottom: 100px;
            right: 30px;
            background: var(--bg-card, #1e293b);
            color: var(--text-secondary, #f1f5f9);
            padding: 12px 24px;
            border-radius: 8px;
            border-left: 4px solid ${borderColor};
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            z-index: 1001;
            font-size: 0.9rem;
            font-weight: 500;
            backdrop-filter: blur(10px);
            animation: slideInRight 0.3s ease;
            pointer-events: none;
        `;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 2500);
    }
}

// ===== Добавляем CSS анимации для тостов =====
(function addToastStyles() {
    if (!document.getElementById('toast-animation-styles')) {
        const style = document.createElement('style');
        style.id = 'toast-animation-styles';
        style.textContent = `
            @keyframes slideInRight {
                from {
                    opacity: 0;
                    transform: translateX(100px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
            
            @keyframes slideOutRight {
                from {
                    opacity: 1;
                    transform: translateX(0);
                }
                to {
                    opacity: 0;
                    transform: translateX(100px);
                }
            }
        `;
        document.head.appendChild(style);
    }
})();

// ===== Инициализация при загрузке страницы =====
document.addEventListener('DOMContentLoaded', () => {
    // Небольшая задержка для уверенности, что DOM полностью загружен
    setTimeout(() => {
        // Инициализируем фон, если еще не создан
        if (!window.floatingSymbolsInstance) {
            new FloatingSymbolsBackground();
        }
        
        // Инициализируем менеджер управления, если еще не создан
        if (!window.bgManager) {
            window.bgManager = new BackgroundEffectManager();
        }
    }, 100);
});

// ===== Дополнительно: обновление при переключении темы =====
(function initThemeToggle() {
    // Проверяем, не был ли уже добавлен обработчик
    if (window.themeToggleHandlerAdded) return;
    
    const themeToggleBtn = document.getElementById('toggleTheme');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            setTimeout(() => {
                if (window.floatingSymbolsInstance) {
                    window.floatingSymbolsInstance.updateThemeColors();
                }
            }, 50);
        });
        window.themeToggleHandlerAdded = true;
    }
})();

console.log('🎨 Animated background with floating symbols - Ready!');