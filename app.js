;
  (function() {
    var wheel = document.querySelector('.wheel');
    let marker = document.querySelector('.marker');
    var startButton = document.querySelector('.button');
    let display = document.querySelector(".display");
    let deg = 0;
    let prizesPartionAngle = 45;

    let partionAngle ={

        1: " You Won Apple Music Gift Card",
        2: "  You Won Xbox Gift Card",
        3: " You Won Steam Gift Card",
        4: " You Won Google Gift Card",
        5: " You Won Amazon Gift Card",
        6: " You Won Nintendo Gift Card",
        7: " You Won WIndows Gift Card",
        8: " You Won Glaistics Gift Card"
        
    }

    let spinPrizes = (actualDeg) =>{
        let winner = Math.ceil(actualDeg / prizesPartionAngle); 
        Swal.fire({
            title: "Congratulations ",
            text: partionAngle[winner],
           
            confirmButtonText: 'Click to spin more',
            confirmButtonText : window.setTimeout(function my(){location.reload()},5000)
          })

       
    }

    startButton.addEventListener('click', () => {
      startButton.style.pointerEvents = 'none';
      deg = Math.floor(3000 + Math.random() * 5000);
      wheel.style.transition = 'all 10s ease-out';
      wheel.style.transform = `rotate(${deg}deg)`;
         const audio = new Audio("fortune-wheel-2.mp3");
    audio.play();
    });


    wheel.addEventListener('transitionend', () => {
  

      startButton.style.pointerEvents = 'auto';
      wheel.style.transition = 'none';
      var actualDeg = deg % 360;
    audio.pause();
 
      document.querySelector(".myDiv").style.visibility = "hidden";
      wheel.style.transform = `rotate(${actualDeg}deg)`;
      spinPrizes(actualDeg);
    });
  })();
  
// Init code
  // (function() {
//     var wheel = document.querySelector('.wheel');
//     let marker = document.querySelector('.marker');
//     var startButton = document.querySelector('.button');
//     let display = document.querySelector(".display");
//     let deg = 0;
//     let prizesPartionAngle = 45;

//     let partionAngle ={

//         1: "Congratulations You Won Apple Music Gift Card",
//         2: " Congratulations You Won Xbox Gift Card",
//         3: "Congratulations You Won Steam Gift Card",
//         4: "Congratulations You Won Google Gift Card",
//         5: "Congratulations You Won Amazon Gift Card",
//         6: "Congratulations You Won Nintendo Gift Card",
//         7: "Congratulations You Won WIndows Gift Card",
//         8: "Congratulations You Won Glaistics Gift Card"
        
//     }

//     let spinPrizes = (actualDeg) =>{
//         let winner = Math.ceil(actualDeg / prizesPartionAngle); 
//         alert(partionAngle[winner]);
//     }

//     startButton.addEventListener('click', () => {
//       startButton.style.pointerEvents = 'none';
//       deg = Math.floor(3000 + Math.random() * 5000);

//       wheel.style.transition = 'all 10s ease-out';
//       wheel.style.transform = `rotate(${deg}deg)`;
//     });
    
  
//     wheel.addEventListener('transitionend', () => {
//       startButton.style.pointerEvents = 'auto';
//       wheel.style.transition = 'none';
//       var actualDeg = deg % 360;
//       wheel.style.transform = `rotate(${actualDeg}deg)`;
//       spinPrizes(actualDeg);
//     });
//   })();
 

 
