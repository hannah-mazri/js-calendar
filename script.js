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

const currentYear = date.getFullYear();

const previousMonthIndex = date.getMonth() - 1;
const currentMonthIndex = date.getMonth();
const nextMonthIndex = date.getMonth() + 1;

const indexOfFirstDayInCurrentMonth = new Date(
  currentYear,
  currentMonthIndex,
  1
).getDay();

const totalDaysInPreviousMonth = new Date(
  2021,
  previousMonthIndex + 1,
  0
).getDate();
const totalDaysInCurrentMonth = new Date(
  2021,
  currentMonthIndex + 1,
  0
).getDate();

const header = document.querySelector('.header');
header.innerText = `${months[currentMonthIndex]} ${currentYear}`;

const dates = document.querySelector('.dates');
const child = document.createElement('div');
child.innerText = 'child';

const lastMonthDates = [];
const currentMonthDates = [];
const nextMonthDates = [];

for (let i = 0; i < indexOfFirstDayInCurrentMonth - 1; i++) {
  lastMonthDates.push(
    totalDaysInPreviousMonth - indexOfFirstDayInCurrentMonth + i + 2
  );

  const child = document.createElement('div');
  child.classList.add('lastMonthDates');
  child.innerText = lastMonthDates[i];
  dates.appendChild(child);
}

for (let i = 0; i < totalDaysInCurrentMonth; i++) {
  currentMonthDates.push(i + 1);

  const child = document.createElement('div');
  child.classList.add('currentMonthDates');
  child.innerText = currentMonthDates[i];
  dates.appendChild(child);
}

for (
  let i = 0;
  i < 42 - lastMonthDates.length - currentMonthDates.length;
  i++
) {
  nextMonthDates.push(i + 1);

  const child = document.createElement('div');
  child.classList.add('nextMonthDates');
  child.innerText = nextMonthDates[i];
  dates.appendChild(child);
}
