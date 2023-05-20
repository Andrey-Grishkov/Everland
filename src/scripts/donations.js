const preSelectBlock = document.querySelector('.donation-checkbox');
const donationsForm = document.querySelector('.donations__form');
const numberBlock = document.querySelector('.donations__number');
const sumBlock = document.querySelector('.donations__sum');
const paymentBlock = document.querySelector('.donations__payment');
const dataBlock = document.querySelector('.donations__data');
const dataInputs = dataBlock.querySelectorAll('.donations__input');

function getCheckedRadioButton(block) {
  const inputs = block.querySelectorAll('input');

  for(let i = 0; i < inputs.length; i++) {
    if(inputs[i].checked) {
      return inputs[i];
    }
  }

  return null;
}

function handlePreSelectFormSubmit(evt) {
  evt.preventDefault();

  if(getCheckedRadioButton(preSelectBlock) !== null){
    const sum = getCheckedRadioButton(preSelectBlock).value
    if(sum !== 'other') {
      sumBlock.querySelector(`#rub-${sum}`).checked = true;
    } else {
      sumBlock.querySelector('#other').checked = true;
    }
  }

  window.scrollBy({
    top: donationsForm.getBoundingClientRect().top - 10,
    behavior: 'smooth'
  });
};

function getUserData() {
  const data = {
    name: '',
    email: ''
  };

  dataInputs.forEach(input => {
    input.type === 'email' ? data.email = input.value : data.name = input.value;
  });

  return data;
}

function createDonate() {
  const number = getCheckedRadioButton(numberBlock).value;

  let sum = getCheckedRadioButton(sumBlock).value;
  if(sum === 'other') {
    sum = sumBlock.querySelector('.donations__input').value;
  }
  if(sum.slice(-1) == 2 || sum.slice(-1) == 3 || sum.slice(-1) == 4) {
    sum += ' рубля';
  } else {
    sum += ' рублей';
  }

  const payment = getCheckedRadioButton(paymentBlock).value;

  const data = getUserData();

  const donate = {
    number,
    sum,
    payment,
    name: data.name,
    email: data.email
  };

  return donate;
}

function sendDonate() {
  const donate = createDonate();

  if(donate.number !== 'Ежемесячно') {
    console.log(`Пользователь ${donate.name} пожертвовал ${donate.sum}.`);   
    console.log(`Оплата была произведена с помощью: ${donate.payment}.`);
  } else {
    console.log(`Пользователь ${donate.name} подписался на ежемесячную оплату в размере ${donate.sum}.`);
    console.log(`Оплата будет производиться с помощью: ${donate.payment}.`);
  }
  console.log(`Email пользователя: ${donate.email}.`);
}

function handleDonationFormSubmit(evt) {
  evt.preventDefault();
  sendDonate();
}

export default function initDonations() {
  preSelectBlock.addEventListener('submit', handlePreSelectFormSubmit);
  donationsForm.addEventListener('submit', handleDonationFormSubmit);
}