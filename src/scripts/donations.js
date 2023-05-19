const donationsForm = document.querySelector('.donations__form');
const numberBlock = document.querySelector('.donations__number');
const sumBlock = document.querySelector('.donations__sum');
const paymentBlock = document.querySelector('.donations__payment');
const dataBlock = document.querySelector('.donations__data');
const dataInputs = dataBlock.querySelectorAll('.donations__input');

function getCheckedRadioButton(block) {
  const inputs = block.querySelectorAll('.donations__button');

  for(let i = 0; i < inputs.length; i++) {
    if(inputs[i].checked) {
      return inputs[i];
    }
  }
}

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
  const numberInput = getCheckedRadioButton(numberBlock);
  const number = numberBlock.querySelector(`[for="${numberInput.id}"]`).textContent;

  const sumInput = getCheckedRadioButton(sumBlock);
  let sum;
  if(sumInput.id !== 'other') {
    sum = sumBlock.querySelector(`[for="${sumInput.id}"]`).textContent.slice(0, -1);
  } else {
    sum = sumBlock.querySelector('.donations__input').value;
  }
  if(sum.slice(-1) == 2 || sum.slice(-1) == 3 || sum.slice(-1) == 4) {
    sum += ' рубля';
  } else {
    sum += ' рублей';
  }

  const paymentInput = getCheckedRadioButton(paymentBlock);
  let payment;
  if(paymentInput.id === 'bank-card') {
    payment = 'Банковская карта';
  } else if(paymentInput.id === 'ymoney') {
    payment = 'YooMoney';
  } else {
    payment = 'WebMoney';
  }

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

function handleFormSubmit(evt) {
  evt.preventDefault();
  sendDonate();
}

export default function initDonations() {
  donationsForm.addEventListener('submit', handleFormSubmit);
}