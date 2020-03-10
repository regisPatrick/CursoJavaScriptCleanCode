const OVERNIGHT_FARE = 3.9;

const SUNDAY_FARE = 3;

const NORMAL_FARE = 2;

const SUNDAY_CODE = 0;

const OVERNIGHT_START = 22;

const OVERNIGHT_END = 6;

const calculateTrip = function (date, distance) {
    if (isOvernight(date)) return calculateTotal(distance, OVERNIGHT_FARE);
    if (isSunday(date)) return calculateTotal(distance, SUNDAY_FARE);
    return calculateTotal(distance, NORMAL_FARE);
};

const isOvernight = function (date) {
    return date.getHours() > OVERNIGHT_START || date.getHours() < OVERNIGHT_END;
};

const isSunday = function (date) {
    return date.getDay() === SUNDAY_CODE;
};

const calculateTotal = function (distance, fare) {
    return distance * fare;
};

// const date = new Date("2020-03-02T23:00:00");
// const testOvernight = isOvernight(date);
// console.log(testOvernight);
// const total = calculateTrip(date, 10);
// console.log(total === 39);

console.log(calculateTrip(new Date("2020-03-02T23:00:00"), 10) === 39);
console.log(calculateTrip(new Date("2020-03-02T10:00:00"), 10) === 20);
console.log(calculateTrip(new Date("2020-03-01T10:00:00"), 10) === 30);