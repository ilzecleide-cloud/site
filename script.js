// Efeito interativo sutil ao passar o mouse (Parallax nos itens)
document.querySelectorAll('.link-item').forEach(item => {
    item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left - (rect.width/2);
        const y = e.clientY - rect.top - (rect.height/2);
        
        item.style.transform = `translateY(-3px) rotateX(${-y * 0.04}deg) rotateY(${x * 0.04}deg)`;
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
    });
});

console.log('6M Vazamentos - Template Otimizado carregado com sucesso!');