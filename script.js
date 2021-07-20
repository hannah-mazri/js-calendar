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

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const date = new Date();
date.setMonth(1);

const currentYear = date.getFullYear();

const lastDateOfPreviousMonth = date.getDate();
const lastDayOfPreviousMonth = date.getDay();

const previousMonth = date.getMonth() - 1;
const currentMonth = date.getMonth();
const nextMonth = date.getMonth() + 1;

const firstDayInCurrentMonth = new Date(currentYear, currentMonth, 1).getDay();

const totalDaysInPreviousMonth = new Date(2021, previousMonth + 1, 0).getDate();
const totalDaysInCurrentMonth = new Date(2021, currentMonth + 1, 0).getDate();

const header = document.querySelector('.header');
header.innerText = `${months[currentMonth]} ${currentYear}`;

const dates = document.querySelector('.dates');
const child = document.createElement('div');
child.innerText = 'child';

const lastMonthDates = [];
const currentMonthDates = [];
const nextMonthDates = [];

for (let i = 0; i < firstDayInCurrentMonth - 1; i++) {
  lastMonthDates.push(
    totalDaysInPreviousMonth - firstDayInCurrentMonth + i + 2
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
