import Notiflix from 'notiflix';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', event => {
  event.preventDefault();

  const delayInput = event.target.elements['delay'];
  const stepInput = event.target.elements['step'];
  const amountInput = event.target.elements['amount'];

  const firstDelay = parseInt(delayInput.value, 10);
  const delayStep = parseInt(stepInput.value, 10);
  const amount = parseInt(amountInput.value, 10);

  for (let i = 0; i < amount; i += 1) {
    const position = i + 1;
    const currentDelay = firstDelay + delayStep * i;

    createPromise(position, currentDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }

  formEl.reset();
});
