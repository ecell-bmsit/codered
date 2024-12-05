document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.ps-question').forEach(question => {
      question.addEventListener('click', () => {
        const item = question.parentElement;
        const isActive = item.classList.contains('active');
        
      
        document.querySelectorAll('.ps-item').forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
          }
        });
        
       
        item.classList.toggle('active');
        
    
        if (!isActive) {
          item.style.transform = 'scale(1.02)';
          setTimeout(() => {
            item.style.transform = 'scale(1)';
          }, 200);
        }
      });
    });
  });