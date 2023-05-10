import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const buttonStart = document.querySelector('[data-start]');
const daysRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minutesRef = document.querySelector('[data-minutes]');
const secondsRef = document.querySelector('[data-seconds]');

let intervalId = 'null';

buttonStart.setAttribute('disabled', true);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const addLeadingZero = value => String(value).padStart(2, 0);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < new Date()) {
      window.alert('Please choose a date in the future');
      buttonStart.setAttribute('disabled', true);
      return;
    }

    buttonStart.removeAttribute('disabled');
    const targetTime = selectedDates[0].getTime();
    const showTimer = () => {
      const now = new Date().getTime();
      const timeDifference = targetTime - now;

      if (timeDifference <= 0) {
        clearInterval(intervalId);
        daysRef.textContent = '0';
        hoursRef.textContent = '00';
        minutesRef.textContent = '00';
        secondsRef.textContent = '00';
        buttonStart.setAttribute('disabled', true);
      }

      const { days, hours, minutes, seconds } = convertMs(timeDifference);
      daysRef.textContent = addLeadingZero(days);
      hoursRef.textContent = addLeadingZero(hours);
      minutesRef.textContent = addLeadingZero(minutes);
      secondsRef.textContent = addLeadingZero(seconds);
    };

    const onClick = () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
      showTimer();
      intervalId = setInterval(showTimer, 1000);
    };

    buttonStart.addEventListener('click', onClick);
  },
};
flatpickr('#datetime-picker', { ...options });
