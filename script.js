// Copy code functionality with fallback for HTTP sites
function copyCode(button) {
    const codeBlock = button.parentElement;
    const code = codeBlock.querySelector('code');
    const text = code.textContent;
    const originalText = button.textContent;
    
    function showSuccess() {
        button.textContent = 'Copied!';
        button.style.backgroundColor = 'rgba(34, 197, 94, 0.2)';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        }, 2000);
    }
    
    function showError() {
        button.textContent = 'Failed';
        setTimeout(() => {
            button.textContent = originalText;
        }, 2000);
    }
    
    // Try modern clipboard API first (requires HTTPS)
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(showSuccess).catch(() => {
            // Fallback to older method
            copyTextFallback(text) ? showSuccess() : showError();
        });
    } else {
        // Use fallback method directly
        copyTextFallback(text) ? showSuccess() : showError();
    }
}

// Fallback copy method for HTTP sites
function copyTextFallback(text) {
    try {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        textarea.style.top = '-9999px';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        const successful = document.execCommand('copy');
        document.body.removeChild(textarea);
        return successful;
    } catch (err) {
        console.error('Fallback copy failed: ', err);
        return false;
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientPosition().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header background opacity on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const scrolled = window.pageYOffset;
    const opacity = Math.min(scrolled / 100, 0.95);
    
    header.style.backgroundColor = `rgba(255, 255, 255, ${0.95 + (0.05 * opacity)})`;
});

// Terminal typing animation
document.addEventListener('DOMContentLoaded', () => {
    const terminalLines = document.querySelectorAll('.terminal-line');
    
    // Add a subtle fade-in animation for terminal lines
    terminalLines.forEach((line, index) => {
        line.style.opacity = '0';
        line.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            line.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            line.style.opacity = '1';
            line.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Feature cards hover effect enhancement
document.querySelectorAll('.feature').forEach(feature => {
    feature.addEventListener('mouseenter', () => {
        feature.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    feature.addEventListener('mouseleave', () => {
        feature.style.transform = 'translateY(0) scale(1)';
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe all sections for animations
document.querySelectorAll('.features, .install, .cta').forEach(section => {
    observer.observe(section);
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .features, .install, .cta {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    @media (prefers-reduced-motion: reduce) {
        .features, .install, .cta {
            opacity: 1;
            transform: none;
            transition: none;
        }
    }
`;
document.head.appendChild(style);