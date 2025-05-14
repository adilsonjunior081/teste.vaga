// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Garantir que o site seja carregado rapidamente
    document.body.classList.add('loaded');
    
    // Detectar se é dispositivo móvel
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Rolagem suave para links de âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Efeito de hover/toque para o botão WhatsApp
    const whatsappButtons = document.querySelectorAll('.btn-whatsapp');
    
    whatsappButtons.forEach(button => {
        // Hover para desktop
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 15px 30px rgba(37, 211, 102, 0.5)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
        
        // Toque para mobile
        if (isMobile) {
            button.addEventListener('touchstart', function() {
                this.style.transform = 'translateY(-5px)';
                this.style.boxShadow = '0 15px 30px rgba(37, 211, 102, 0.5)';
            });
            
            button.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.style.transform = '';
                    this.style.boxShadow = '';
                }, 300);
            });
        }
    });
    
    // Aplicar cor vermelha à palavra "experiência"
    const experienciaElement = document.querySelector('.highlight');
    if (experienciaElement) {
        experienciaElement.style.color = '#e74c3c';
    }
    
    // Efeitos para os cards de serviço
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        // Desktop hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 35px rgba(192, 57, 43, 0.15)';
            
            const icon = this.querySelector('.service-card-icon');
            if (icon) {
                icon.style.transform = 'rotateY(180deg)';
            }
            
            const title = this.querySelector('h3');
            if (title) {
                title.style.transform = 'scale(1.05)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
            
            const icon = this.querySelector('.service-card-icon');
            if (icon) {
                icon.style.transform = '';
            }
            
            const title = this.querySelector('h3');
            if (title) {
                title.style.transform = '';
            }
        });
        
        // Variáveis para controlar arrastar mobile
        let touchStartX = 0;
        let touchEndX = 0;
        let touchStartY = 0;
        let touchEndY = 0;
        
        // Eventos de toque para mobile
        if (isMobile) {
            // Para efeito de "hover" em mobile
            card.addEventListener('touchstart', function(e) {
                touchStartX = e.changedTouches[0].screenX;
                touchStartY = e.changedTouches[0].screenY;
                
                this.style.transform = 'translateY(-10px)';
                this.style.boxShadow = '0 15px 35px rgba(192, 57, 43, 0.15)';
                
                const icon = this.querySelector('.service-card-icon');
                if (icon) {
                    icon.style.transform = 'rotateY(180deg)';
                }
                
                const title = this.querySelector('h3');
                if (title) {
                    title.style.transform = 'scale(1.05)';
                }
            });
            
            card.addEventListener('touchmove', function(e) {
                touchEndX = e.changedTouches[0].screenX;
                touchEndY = e.changedTouches[0].screenY;
            });
            
            card.addEventListener('touchend', function(e) {
                // Detectar swipe/arrastar (movimento horizontal significativo)
                const diffX = Math.abs(touchEndX - touchStartX);
                const diffY = Math.abs(touchEndY - touchStartY);
                
                // Se houver um movimento significativo horizontal e pouco movimento vertical
                if (diffX > 50 && diffY < 50) {
                    // Efeito de clique com pulsação
                    this.classList.add('pulse-effect');
                    
                    // Criar efeito de partículas
                    createParticles(e.changedTouches[0], this);
                    
                    setTimeout(() => {
                        this.classList.remove('pulse-effect');
                    }, 800);
                }
                
                // Reset estilos ao terminar o toque
                setTimeout(() => {
                    this.style.transform = '';
                    this.style.boxShadow = '';
                    
                    const icon = this.querySelector('.service-card-icon');
                    if (icon) {
                        icon.style.transform = '';
                    }
                    
                    const title = this.querySelector('h3');
                    if (title) {
                        title.style.transform = '';
                    }
                }, 300);
            });
        }
        
        // Evento de clique para desktop
        card.addEventListener('click', function(e) {
            if (!isMobile) {
                // Efeito de clique com pulsação
                this.classList.add('pulse-effect');
                
                // Criar efeito de partículas
                createParticles(e, this);
                
                setTimeout(() => {
                    this.classList.remove('pulse-effect');
                }, 800);
            }
        });
    });
    
    // Efeitos avançados para os boxes da seção "Por que contratar"
    const serviceBoxes = document.querySelectorAll('.service-box');
    
    serviceBoxes.forEach(box => {
        // Variáveis para controlar arrastar mobile
        let touchStartX = 0;
        let touchEndX = 0;
        let touchStartY = 0;
        let touchEndY = 0;
        
        // Evento de toque para mobile
        if (isMobile) {
            box.addEventListener('touchstart', function(e) {
                touchStartX = e.changedTouches[0].screenX;
                touchStartY = e.changedTouches[0].screenY;
                
                // Destacar ao iniciar o toque
                const icon = this.querySelector('.service-icon i');
                if (icon) {
                    icon.style.color = '#fff';
                }
                
                this.style.boxShadow = '0 5px 15px rgba(231, 76, 60, 0.3)';
            });
            
            box.addEventListener('touchmove', function(e) {
                touchEndX = e.changedTouches[0].screenX;
                touchEndY = e.changedTouches[0].screenY;
                
                // Calcular movimento horizontal
                const diffX = Math.abs(touchEndX - touchStartX);
                
                // Aplica efeito baseado na distância arrastada
                if (diffX > 10) {
                    const strength = Math.min(diffX / 100, 1); // Limitado a 1
                    
                    this.style.transform = `scale(${1 - (0.05 * strength)})`;
                    this.style.boxShadow = `0 0 ${30 * strength}px rgba(231, 76, 60, ${0.3 + (0.2 * strength)})`;
                    this.style.borderColor = '#e74c3c';
                    
                    const icon = this.querySelector('.service-icon i');
                    if (icon) {
                        icon.style.transform = `scale(${1 + (0.2 * strength)})`;
                        icon.style.color = '#fff';
                        icon.style.filter = `brightness(${1 + (0.5 * strength)})`;
                    }
                    
                    const title = this.querySelector('h3');
                    if (title) {
                        title.style.color = '#e74c3c';
                        title.style.textShadow = `0 0 ${5 * strength}px rgba(231, 76, 60, ${0.3 + (0.2 * strength)})`;
                    }
                }
            });
            
            box.addEventListener('touchend', function(e) {
                // Detectar swipe/arrastar (movimento horizontal significativo)
                const diffX = Math.abs(touchEndX - touchStartX);
                const diffY = Math.abs(touchEndY - touchStartY);
                
                if (diffX > 50 && diffY < 50) {
                    // Efeito completo se arrastou bastante
                    createClickParticles(e.changedTouches[0], this);
                    
                    this.style.transform = 'scale(0.95)';
                    this.style.boxShadow = '0 0 30px rgba(231, 76, 60, 0.5)';
                    
                    const icon = this.querySelector('.service-icon i');
                    if (icon) {
                        icon.style.transform = 'scale(1.2)';
                        icon.style.filter = 'brightness(1.5)';
                    }
                    
                    const title = this.querySelector('h3');
                    if (title) {
                        title.style.textShadow = '0 0 5px rgba(231, 76, 60, 0.5)';
                    }
                }
                
                // Restaurar após um tempo
                setTimeout(() => {
                    this.style.transform = '';
                    this.style.boxShadow = '';
                    this.style.borderColor = '';
                    
                    const icon = this.querySelector('.service-icon i');
                    if (icon) {
                        icon.style.transform = '';
                        icon.style.color = '';
                        icon.style.filter = '';
                    }
                    
                    const title = this.querySelector('h3');
                    if (title) {
                        title.style.color = '';
                        title.style.textShadow = '';
                    }
                }, 800);
            });
        }
        
        // Clique para desktop
        box.addEventListener('click', function(e) {
            if (!isMobile) {
                // Efeito de escala ao clicar
                this.style.transform = 'scale(0.95)';
                
                // Aumentar o brilho do ícone
                const icon = this.querySelector('.service-icon i');
                if (icon) {
                    icon.style.transform = 'scale(1.2)';
                    icon.style.color = '#fff';
                    icon.style.filter = 'brightness(1.5)';
                }
                
                // Destacar o título
                const title = this.querySelector('h3');
                if (title) {
                    title.style.color = '#e74c3c';
                    title.style.textShadow = '0 0 5px rgba(231, 76, 60, 0.5)';
                }
                
                // Adicionar um efeito de brilho no card
                this.style.boxShadow = '0 0 30px rgba(231, 76, 60, 0.5)';
                this.style.borderColor = '#e74c3c';
                
                // Criar efeito de partículas ao clicar
                createClickParticles(e, this);
                
                // Restaurar após um tempo
                setTimeout(() => {
                    this.style.transform = '';
                    this.style.boxShadow = '';
                    this.style.borderColor = '';
                    
                    if (icon) {
                        icon.style.transform = '';
                        icon.style.color = '';
                        icon.style.filter = '';
                    }
                    
                    if (title) {
                        title.style.color = '';
                        title.style.textShadow = '';
                    }
                }, 800);
            }
        });
    });
    
    // Animações da timeline com suporte a toque
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach(item => {
        // Detectar toque para mobile
        if (isMobile) {
            item.addEventListener('touchstart', function(e) {
                const content = this.querySelector('.timeline-content');
                if (content) {
                    content.style.transform = 'scale(0.98)';
                    content.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
                }
            });
            
            item.addEventListener('touchend', function(e) {
                const content = this.querySelector('.timeline-content');
                if (content) {
                    content.classList.add('pulse-effect');
                    
                    setTimeout(() => {
                        content.style.transform = '';
                        content.style.boxShadow = '';
                        content.classList.remove('pulse-effect');
                    }, 1200);
                }
            });
        }
        
        // Clique para desktop
        item.addEventListener('click', function() {
            if (!isMobile) {
                const content = this.querySelector('.timeline-content');
                if (content) {
                    content.classList.add('pulse-effect');
                    
                    setTimeout(() => {
                        content.classList.remove('pulse-effect');
                    }, 1200);
                }
            }
        });
    });
    
    // Função para criar efeito de partículas nos cards
    function createParticles(e, element) {
        // Se é evento de toque, ajustar as coordenadas
        const x = e.clientX || e.pageX;
        const y = e.clientY || e.pageY;
        
        const rect = element.getBoundingClientRect();
        const elementX = x - rect.left;
        const elementY = y - rect.top;
        
        // Número de partículas
        const particleCount = 20;
        
        for (let i = 0; i < particleCount; i++) {
            // Criar partícula
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.position = 'absolute';
            particle.style.width = Math.random() * 6 + 3 + 'px';
            particle.style.height = particle.style.width;
            particle.style.backgroundColor = '#e74c3c';
            particle.style.borderRadius = '50%';
            particle.style.top = elementY + 'px';
            particle.style.left = elementX + 'px';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '100';
            particle.style.transition = 'all 1s cubic-bezier(0.165, 0.84, 0.44, 1)';
            particle.style.opacity = '1';
            
            // Adicionar ao elemento
            element.style.overflow = 'hidden';
            element.appendChild(particle);
            
            // Ângulo aleatório para movimento
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 100 + 50;
            const posX = elementX + Math.cos(angle) * distance;
            const posY = elementY + Math.sin(angle) * distance;
            
            // Animar a partícula
            setTimeout(() => {
                particle.style.transform = `translate(${posX - elementX}px, ${posY - elementY}px)`;
                particle.style.opacity = '0';
            }, 10);
            
            // Remover partícula após a animação
            setTimeout(() => {
                if (element.contains(particle)) {
                    element.removeChild(particle);
                }
            }, 1000);
        }
    }
    
    // Função para criar partículas nos service-boxes
    function createClickParticles(e, element) {
        // Preparar o container de partículas
        const particlesContainer = document.createElement('div');
        particlesContainer.style.position = 'absolute';
        particlesContainer.style.top = '0';
        particlesContainer.style.left = '0';
        particlesContainer.style.width = '100%';
        particlesContainer.style.height = '100%';
        particlesContainer.style.overflow = 'hidden';
        particlesContainer.style.pointerEvents = 'none';
        element.appendChild(particlesContainer);
        
        // Obter posição do clique/toque
        const x = e.clientX || e.pageX;
        const y = e.clientY || e.pageY;
        
        const rect = element.getBoundingClientRect();
        const elementX = x - rect.left;
        const elementY = y - rect.top;
        
        // Criar partículas
        const particleCount = 30;
        for (let i = 0; i < particleCount; i++) {
            // Criar uma partícula
            const particle = document.createElement('div');
            
            // Propriedades visuais da partícula
            const size = Math.random() * 8 + 2;
            particle.style.position = 'absolute';
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            particle.style.backgroundColor = `rgba(231, 76, 60, ${Math.random() * 0.7 + 0.3})`;
            particle.style.borderRadius = '50%';
            particle.style.top = elementY + 'px';
            particle.style.left = elementX + 'px';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '1000';
            particle.style.opacity = '1';
            particle.style.boxShadow = '0 0 10px rgba(231, 76, 60, 0.5)';
            
            // Adicionar ao container
            particlesContainer.appendChild(particle);
            
            // Ângulo e distância aleatórios para o movimento
            const angle = Math.random() * Math.PI * 2;
            const velocity = Math.random() * 120 + 50;
            const moveX = Math.cos(angle) * velocity;
            const moveY = Math.sin(angle) * velocity;
            
            // Animar a partícula
            particle.animate([
                { transform: 'translate(0, 0)', opacity: 1 },
                { transform: `translate(${moveX}px, ${moveY}px)`, opacity: 0 }
            ], {
                duration: Math.random() * 1000 + 500,
                easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
                fill: 'forwards'
            });
            
            // Remover a partícula após a animação
            setTimeout(() => {
                if (particlesContainer.contains(particle)) {
                    particlesContainer.removeChild(particle);
                }
                
                // Remover o container se estiver vazio
                if (particlesContainer.childElementCount === 0 && element.contains(particlesContainer)) {
                    element.removeChild(particlesContainer);
                }
            }, 1500);
        }
    }
    
    // Observer para animação de entrada
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });
    
    // Observar timeline items
    timelineItems.forEach(item => {
        observer.observe(item);
    });
});

// Adicionar estilos CSS necessários
(function() {
    const style = document.createElement('style');
    style.textContent = `
        .pulse-effect {
            animation: pulseEffect 1s ease;
        }
        
        @keyframes pulseEffect {
            0% { transform: scale(1); }
            25% { transform: scale(1.03); }
            50% { transform: scale(1.05); }
            75% { transform: scale(1.03); }
            100% { transform: scale(1); }
        }
        
        .particle {
            position: absolute;
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
        }
        
        .service-card-clicked .service-card-icon {
            transform: scale(1.1) rotateY(180deg) !important;
        }
        
        .service-card-clicked h3 {
            color: #c0392b !important;
        }
        
        /* Instruções para usuários mobile */
        @media (max-width: 768px) {
            .swipe-instruction {
                display: block;
                text-align: center;
                font-size: 14px;
                color: #555;
                margin: 10px 0;
                animation: fadeInOut 2s ease-in-out infinite;
            }
            
            @keyframes fadeInOut {
                0%, 100% { opacity: 0.7; }
                50% { opacity: 1; }
            }
        }
    `;
    document.head.appendChild(style);
    
    // Adicionar instruções de swipe para usuários mobile
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.addEventListener('DOMContentLoaded', function() {
            // Adicionar instruções de swipe para a seção de service-boxes
            const reasonsSection = document.querySelector('.reasons .container');
            if (reasonsSection) {
                const instruction = document.createElement('p');
                instruction.className = 'swipe-instruction';
                instruction.innerHTML = 'Arraste para ativar efeitos <i class="fas fa-long-arrow-alt-right"></i>';
                reasonsSection.insertBefore(instruction, reasonsSection.querySelector('.service-boxes'));
            }
            
            // Adicionar instruções para a seção de service-cards
            const servicesSection = document.querySelector('.services');
            if (servicesSection) {
                const instruction = document.createElement('p');
                instruction.className = 'swipe-instruction';
                instruction.innerHTML = 'Arraste para ativar efeitos <i class="fas fa-long-arrow-alt-right"></i>';
                servicesSection.insertBefore(instruction, servicesSection.querySelector('.services-cards'));
            }
        });
    }
})(); 