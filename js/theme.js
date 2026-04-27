// ===== Переключение темы и тултипы =====

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
            
            // Уведомляем другие компоненты о смене темы
            window.dispatchEvent(new CustomEvent('themeChanged', {
                detail: { isDark: body.classList.contains('dark-mode') }
            }));
        });
        
        console.log('🌓 Theme toggle initialized');
    }
})();

// ===== Добавление тултипов для кнопок =====
(function initTooltips() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addTooltips);
    } else {
        addTooltips();
    }
    
    function addTooltips() {
        function addTooltip(button, initialText) {
            if (!button) return;
            
            const existingTooltip = button.querySelector('.tooltip');
            if (existingTooltip) existingTooltip.remove();
            
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = initialText;
            button.appendChild(tooltip);
            return tooltip;
        }
        
        // Тултип для кнопки темы
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            const isDark = document.body.classList.contains('dark-mode');
            addTooltip(themeToggle, isDark ? 'Switch to light mode' : 'Switch to dark mode');
        }
        
        // Тултип для кнопки фона
        const bgButton = document.getElementById('BgEffectToggle');
        if (bgButton) {
            const savedBgState = localStorage.getItem('backgroundEffectEnabled');
            const isBgEnabled = savedBgState !== 'false';
            addTooltip(bgButton, isBgEnabled ? 'Disable background animation' : 'Enable background animation');
        }
    }
})();