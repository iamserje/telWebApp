const tg =window.Telegram.Webapp;

const buyButton = document.getElementById('buy');
const orderButton = document.getElementById('order');

buyButton.addEventListener('click', () => {
   document.getElementById('main').style.display = 'none';
   document.getElementById('form').style.display = 'block';
   document.getElementById('user_name').value = `${tg.initDataUnsafe.user.first_name} ${tg.initDataUnsafe.user.last_name}`;
});

orderButton.addEventListener('click', () => {
   tg.close()
})
