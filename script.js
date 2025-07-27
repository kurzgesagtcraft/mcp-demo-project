// Simple script to add current date to the page
function addDate() {
    const now = new Date();
    const dateStr = now.toLocaleDateString('zh-CN', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    
    const dateElement = document.createElement('p');
    dateElement.textContent = `页面加载时间: ${dateStr}`;
    dateElement.style.textAlign = 'center';
    dateElement.style.fontStyle = 'italic';
    dateElement.style.color = '#666';
    
    document.body.appendChild(dateElement);
}

// Add date when page loads
document.addEventListener('DOMContentLoaded', addDate);

// Add a simple click handler
document.addEventListener('click', function(e) {
    // Create a small animation effect
    const clickEffect = document.createElement('div');
    clickEffect.style.position = 'absolute';
    clickEffect.style.left = e.pageX + 'px';
    clickEffect.style.top = e.pageY + 'px';
    clickEffect.style.width = '20px';
    clickEffect.style.height = '20px';
    clickEffect.style.border = '2px solid #007acc';
    clickEffect.style.borderRadius = '50%';
    clickEffect.style.pointerEvents = 'none';
    clickEffect.style.animation = 'ripple 0.6s linear';
    
    document.body.appendChild(clickEffect);
    
    // Remove element after animation
    setTimeout(() => {
        clickEffect.remove();
    }, 600);
});