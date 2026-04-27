// ===== Анимированный фон с плавающими символами =====

class FloatingSymbolsBackground {
    constructor() {
        this.symbols = [
            '∑', '∫', '√', '∞', 'π', '≈', '≠', '≤', '≥', '±', '÷', '×',
            '{', '}', '(', ')', '[', ']', '<', '>', '&', '|', '!', '?',
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
            'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
            '❤', '★', '☆', '✿', '❀', '✦', '✧', 'JS', 'CSS', 'HTML', 'API',
            '</>', '{}', '[]', '()', '=>', '<=', '===', '!=='
        ];
        
        this.container = document.getElementById('floatingSymbols');
        if (!this.container) {
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
        this.isRunning = true;
        
        this.init();
        this.handleResize();
        this.listenToThemeChanges();
        
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
        symbol.textContent = this.generateRandomSymbol();
        symbol.style.left = `${this.generateRandomPosition()}%`;
        symbol.style.fontSize = `${this.generateRandomFontSize()}px`;
        symbol.style.opacity = '0';
        symbol.style.color = this.getThemeColor();
        symbol.style.transform = `rotate(${this.generateRandomRotation()}deg)`;
        
        const animationName = direction === 'down' ? 'floatSymbol' : 'floatSymbolReverse';
        const duration = this.generateRandomDuration();
        const delay = this.generateRandomDelay();
        
        symbol.style.animation = `${animationName} ${duration}s linear ${delay}s infinite`;
        
        return symbol;
    }
    
    generateSymbols() {
        if (!this.isRunning) return;
        
        if (this.container) {
            this.container.innerHTML = '';
        }
        this.activeSymbols = [];
        
        this.symbolCount = this.getSymbolCountByScreenSize();
        
        for (let i = 0; i < this.symbolCount; i++) {
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
    
    listenToThemeChanges() {
        window.addEventListener('themeChanged', () => {
            this.updateThemeColors();
        });
        
        // Также слушаем изменения класса на body
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    this.updateThemeColors();
                }
            });
        });
        observer.observe(document.body, { attributes: true });
    }
    
    init() {
        this.generateSymbols();
    }
}

// ===== Управление анимированным фоном =====

class BackgroundEffectManager {
    constructor() {
        this.isEnabled = true;
        this.button = document.getElementById('toggleBgEffect');
        this.bgContainer = document.querySelector('.animated-bg');
        this.symbolsContainer = document.getElementById('floatingSymbols');
        this.floatingSymbolsInstance = null;
        
        this.init();
    }
    
    init() {
        if (window.floatingSymbolsInstance) {
            this.floatingSymbolsInstance = window.floatingSymbolsInstance;
        } else {
            setTimeout(() => {
                if (window.floatingSymbolsInstance) {
                    this.floatingSymbolsInstance = window.floatingSymbolsInstance;
                    this.loadState();
                }
            }, 100);
        }
        
        this.loadState();
        
        if (this.button) {
            this.button.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggle();
            });
        }
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'b' || e.key === 'B') {
                this.toggle();
                this.animateButtonPress();
            }
        });
    }
    
    loadState() {
        const saved = localStorage.getItem('backgroundEffectEnabled');
        this.isEnabled = saved !== 'false';
        
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
        }
        
        if (this.bgContainer) {
            this.bgContainer.style.display = 'block';
        }
        
        if (this.symbolsContainer) {
            this.symbolsContainer.style.opacity = '1';
        }
        
        this.updateButtonUI(true);
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
        
        const statusSpan = this.button.querySelector('.toggle-status');
        const icon = this.button.querySelector('i');
        
        if (enabled) {
            this.button.classList.remove('effects-off');
            if (statusSpan) statusSpan.textContent = 'ON';
            if (icon) {
                icon.className = 'fas fa-circle-check';
            }
            this.updateTooltip('Disable background animation');
        } else {
            this.button.classList.add('effects-off');
            if (statusSpan) statusSpan.textContent = 'OFF';
            if (icon) {
                icon.className = 'fas fa-circle-xmark';
                icon.style.color = '#ef4444';
            }
            this.updateTooltip('Enable background animation');
        }
    }
    
    updateTooltip(text) {
        const tooltip = this.button?.querySelector('.tooltip');
        if (tooltip) {
            tooltip.textContent = text;
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

// Добавляем CSS анимации
(function addToastStyles() {
    if (!document.getElementById('toast-animation-styles')) {
        const style = document.createElement('style');
        style.id = 'toast-animation-styles';
        style.textContent = `
            @keyframes slideInRight {
                from { opacity: 0; transform: translateX(100px); }
                to { opacity: 1; transform: translateX(0); }
            }
            @keyframes slideOutRight {
                from { opacity: 1; transform: translateX(0); }
                to { opacity: 0; transform: translateX(100px); }
            }
        `;
        document.head.appendChild(style);
    }
})();

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        if (!window.floatingSymbolsInstance) {
            new FloatingSymbolsBackground();
        }
        if (!window.bgManager) {
            window.bgManager = new BackgroundEffectManager();
        }
    }, 100);
});

console.log('🎨 Animated background - Ready!');