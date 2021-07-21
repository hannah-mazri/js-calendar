# js-calendar

Codepen: https://codepen.io/hannahnajwa/pen/qBmXgZm

`Date.prototype.getDay()` returns index of day, in which 0 = Sunday

`new Date(year, monthIndex, date).getDate()` returns the date of given value. If `date` = 0, it will return the last date of previous month (can be used to get total days in a month).


See `new Date(year, monthIndex, date).getDate()` in action:
```
new Date(2021, 2, 1)
// output: Mon Mar 01 2021 00:00:00 GMT+0800 (Malaysia Time)
// monthIndex=2 refers to March
```

```
new Date(2021, 2, 31)
// output: Wed Mar 31 2021 00:00:00 GMT+0800 (Malaysia Time)
```

```
new Date(2021, 2, 32)
// output: Thu Apr 01 2021 00:00:00 GMT+0800 (Malaysia Time)
```

```
new Date(2021, 2, 0)
// output: Sun Feb 28 2021 00:00:00 GMT+0800 (Malaysia Time)

new Date(2021, 2, 0).getDate()
// output: 28 <---- the last date of previous month (February).
```

```
new Date(2021, 2, -1)
// output: Sat Feb 27 2021 00:00:00 GMT+0800 (Malaysia Time)
```
