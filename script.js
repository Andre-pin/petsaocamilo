document.addEventListener('DOMContentLoaded', function() {
    // Menu Mobile
    const menuButton = document.querySelector('.mobile-menu-button');
    const mainNav = document.querySelector('.main-nav');
    
    menuButton.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
        mainNav.classList.toggle('active');
        document.body.style.overflow = isExpanded ? '' : 'hidden';
    });
    
    // Fecha o menu ao clicar nos links
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', () => {
            menuButton.setAttribute('aria-expanded', 'false');
            mainNav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Fecha o menu ao clicar fora
    document.addEventListener('click', (e) => {
        if (!mainNav.contains(e.target) && !menuButton.contains(e.target)) {
            menuButton.setAttribute('aria-expanded', 'false');
            mainNav.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});