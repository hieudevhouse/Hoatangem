onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  // Xử lý click mở hộp quà
  const openBtn = document.getElementById('openBtn');
  const giftContainer = document.getElementById('giftContainer');
  const giftContent = document.getElementById('giftContent');

  openBtn.addEventListener('click', () => {
    // Animation mở hộp quà
    giftContainer.style.transform = 'scale(0)';
    giftContainer.style.opacity = '0';
    giftContainer.style.transition = 'all 1s ease-out';
    
    setTimeout(() => {
      giftContainer.style.display = 'none';
      giftContent.style.display = 'block';
      giftContent.classList.add('opened');
      
      // Trigger animations
      document.querySelector('.flowers').style.opacity = '1';
      document.querySelector('.message-overlay').style.opacity = '1';
    }, 1000);
  });
};