const tg =window.Telegram.Webapp;

const buyButton = document.getElementById('buy');
const orderButton = document.getElementById('order');

buyButton.addEventListener('click', () => {
   document.querySelector('#main').classList.add('hide');
   document.querySelector('#form').style.display = 'block';
   document.querySelector('#user_name').value = tg.initDataUnsafe.user.first_name + ' ' + tg.initDataUnsafe.user.last_name;
});

orderButton.addEventListener('click', () => {
   tg.close()
})
