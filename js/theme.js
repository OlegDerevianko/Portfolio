// ===== Добавление тултипов для кнопок =====

(function initTooltips() {
    // Функция добавления тултипа к кнопке
    function addTooltip(button, initialText) {
        if (!button) return;
        
        // Удаляем существующий тултип, если есть
        const existingTooltip = button.querySelector('.tooltip');
        if (existingTooltip) {
            existingTooltip.remove();
        }
        
        // Создаем новый тултип
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = initialText;
        button.appendChild(tooltip);
        
        return tooltip;
    }
    
    // Добавляем тултип для кнопки темы
    const themeToggle = document.getElementById('themeToggle');
    let themeTooltip = null;
    
    if (themeToggle) {
        const isDark = document.body.classList.contains('dark-mode');
        const initialThemeText = isDark ? 'Switch to light mode' : 'Switch to dark mode';
        themeTooltip = addTooltip(themeToggle, initialThemeText);
    }
    
    // Добавляем тултип для кнопки фона
    const bgButton = document.getElementById('toggleBgEffect');
    let bgTooltip = null;
    
    if (bgButton) {
        const savedBgState = localStorage.getItem('backgroundEffectEnabled');
        const isBgEnabled = savedBgState !== 'false';
        const initialBgText = isBgEnabled ? 'Disable background animation' : 'Enable background animation';
        bgTooltip = addTooltip(bgButton, initialBgText);
    }
    
    // Сохраняем ссылки на тултипы в глобальном объекте
    window.tooltips = {
        theme: themeTooltip,
        bg: bgTooltip
    };
})();

// ===== Переключение темы с обновлением тултипа =====

(function initThemeToggle() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    function init() {
        const themeToggle = document.getElementById('themeToggle');
        const body = document.body;
        
        if (!themeToggle) return;
        
        const toggleSlider = themeToggle.querySelector('.toggle-slider');
        const toggleIcon = themeToggle.querySelector('.toggle-slider i');
        
        if (!toggleIcon) return;
        
        // Функция обновления тултипа
        function updateThemeTooltip() {
            const isDark = body.classList.contains('dark-mode');
            const tooltip = themeToggle.querySelector('.tooltip');
            
            if (tooltip) {
                tooltip.textContent = isDark ? 'Switch to light mode' : 'Switch to dark mode';
            }
        }
        
        function updateToggleIcon() {
            const isDark = body.classList.contains('dark-mode');
            toggleIcon.className = isDark ? 'fas fa-moon' : 'fas fa-sun';
        }
        
        // Загружаем сохраненную тему
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
        }
        
        updateToggleIcon();
        updateThemeTooltip();
        
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
            updateToggleIcon();
            updateThemeTooltip();
            
            if (window.floatingSymbolsInstance) {
                setTimeout(() => window.floatingSymbolsInstance.updateThemeColors(), 50);
            }
        });
        
        console.log('🌓 Theme toggle with tooltip initialized');
    }
})();

// ===== Управление фоном с обновлением тултипа =====

(function initBgToggle() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    function init() {
        const bgButton = document.getElementById('toggleBgEffect');
        
        if (!bgButton) return;
        
        // Функция обновления тултипа для фона
        function updateBgTooltip(enabled) {
            const tooltip = bgButton.querySelector('.tooltip');
            if (tooltip) {
                tooltip.textContent = enabled ? 'Disable background animation' : 'Enable background animation';
            }
        }
        
        // Функция обновления статуса кнопки
        function updateButtonStatus(enabled) {
            const statusSpan = bgButton.querySelector('.toggle-status');
            if (statusSpan) {
                statusSpan.textContent = enabled ? 'ON' : 'OFF';
            }
            
            if (enabled) {
                bgButton.classList.remove('effects-off');
                const icon = bgButton.querySelector('i');
                if (icon) {
                    icon.className = 'fas fa-star-of-life';
                }
                bgButton.setAttribute('title', 'Disable background animation');
            } else {
                bgButton.classList.add('effects-off');
                const icon = bgButton.querySelector('i');
                if (icon) {
                    icon.className = 'fas fa-ban';
                }
                bgButton.setAttribute('title', 'Enable background animation');
            }
        }
        
        // Загружаем состояние
        const savedState = localStorage.getItem('backgroundEffectEnabled');
        const isEnabled = savedState !== 'false';
        
        updateButtonStatus(isEnabled);
        updateBgTooltip(isEnabled);
        
        bgButton.addEventListener('click', () => {
            const currentState = !bgButton.classList.contains('effects-off');
            const newState = !currentState;
            
            updateButtonStatus(newState);
            updateBgTooltip(newState);
            localStorage.setItem('backgroundEffectEnabled', newState);
            
            if (window.floatingSymbolsInstance) {
                if (newState) {
                    window.floatingSymbolsInstance.startAnimation();
                } else {
                    window.floatingSymbolsInstance.stopAnimation();
                }
            }
            
            // Визуальная обратная связь
            bgButton.style.transform = 'scale(0.95)';
            setTimeout(() => {
                if (bgButton) {
                    bgButton.style.transform = '';
                }
            }, 150);
        });
        
        console.log('🎨 Background toggle with tooltip initialized');
    }
})();