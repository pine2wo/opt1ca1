document.addEventListener('mousemove', e => {
    const x = e.pageX;
    const y = e.pageY;
  
    document.querySelectorAll('.square').forEach(sqr => {
      const dx = sqr.offsetLeft + 50 - x;
      const dy = sqr.offsetTop + 50 - y;
      const dist = Math.sqrt(dx * dx + dy * dy);
  
      const score = Math.exp(dist * -0.003);
  
      sqr.style.transform = `scale(${score})`;
    });
  });