const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const date = new Date();
const [currentYear, currentMonthIndex] = [date.getFullYear(), date.getMonth()];

const indexOfFirstDayInCurrentMonth = new Date(
  currentYear,
  date.getMonth(),
  1
).getDay();

const lastDateInPreviousMonth = new Date(
  currentYear,
  date.getMonth(),
  0
).getDate();

const totalDaysInCurrentMonth = new Date(
  currentYear,
  currentMonthIndex + 1,
  0
).getDate();

const header = document.querySelector('.header');
header.innerText = `${months[currentMonthIndex]} ${currentYear}`;

const dates = document.querySelector('.dates');
let text = '';

for (let i = indexOfFirstDayInCurrentMonth - 2; i >= 0; i--) {
  text += `<div class='lastMonthDates'>${lastDateInPreviousMonth - i}</div>`;
}

for (let i = 1; i <= totalDaysInCurrentMonth; i++) {
  text += `<div>${i}</div>`;
}

for (
  let i = 1;
  i < 42 - totalDaysInCurrentMonth - (indexOfFirstDayInCurrentMonth - 2);
  i++
) {
  text += `<div class='nextMonthDates'>${i}</div>`;
}

dates.innerHTML = text;
