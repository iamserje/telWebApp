const tg = window.Telegram.Webapp;

const buyButton = document.getElementById('buy');
const orderButton = document.getElementById('order');
// tg.expand();

buyButton.addEventListener('click', () => {
   document.getElementById('main').style.display = 'none';
   document.getElementById('form').style.display = 'block';
   // document.getElementById('user_name').value = tg.initDataUnsafe.user.first_name + ' ' + tg.initDataUnsafe.user.last_name;
});

orderButton.addEventListener('click', () => {
   nameUs = document.getElementById('user_name').value;
   emailUs = document.getElementById('user_email').value;
   phoneUs = document.getElementById('user_phone').value;
   if (!emailUs.includes('@')) {
      document.getElementById('error').innerText = 'Wrong email';
      return;
   }
   if (phoneUs.length < 5) {
      document.getElementById('error').innerText = 'Wrong phone';
      return;
   }

   tg.close()
});
