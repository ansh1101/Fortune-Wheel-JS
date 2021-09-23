(function() {
    var wheel = document.querySelector('.wheel');
    var marker = document.querySelector('.marker');
    var startButton = document.querySelector('.button');
    let deg = 0;
  
    startButton.addEventListener('click', () => {
      startButton.style.pointerEvents = 'none';
      deg = Math.floor(3000 + Math.random() * 5000);
      wheel.style.transition = 'all 10s ease-out';
      wheel.style.transform = `rotate(${deg}deg)`;
    });
  
    wheel.addEventListener('transitionend', () => {
      startButton.style.pointerEvents = 'auto';
      wheel.style.transition = 'none';
      var actualDeg = deg % 360;
      wheel.style.transform = `rotate(${actualDeg}deg)`;
    });
  })();
  
  if(actualDeg === ('deg45')){
      document.getElementById("#spins").src="/stockimg/apple.png";
  }