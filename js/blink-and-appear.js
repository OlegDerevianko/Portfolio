// ===== Простой и надежный вариант =====

document.addEventListener('DOMContentLoaded', () => {
    const techItems = document.querySelectorAll('.tech-item');
    const delayBetweenItems = 350;
    
    // Функция анимации одной иконки
    function animateIcon(item, delay) {
        setTimeout(() => {
            const icon = item.querySelector('i');
            if (icon) {
                // Добавляем анимацию
                icon.style.animation = 'blinkAndAppear 1s ease forwards';
                
                // После анимации оставляем иконку видимой
                setTimeout(() => {
                    icon.style.animation = '';
                    icon.style.opacity = '1';
                    icon.style.transform = 'scale(1)';
                }, 1000);
            }
        }, delay);
    }
    
    // Запускаем анимацию для каждой иконки по очереди
    techItems.forEach((item, index) => {
        animateIcon(item, index * delayBetweenItems);
    });
});