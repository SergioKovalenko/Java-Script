const myCar = [
    {
        model: "toyota",
        year: 2019,
        averSpeed: 120,
        volFuelTank: 55,
        averFuelConsumpt: 9,
        driver: "Sergey",
    }
];

//information about car
myCar.forEach(function (item) {
    console.log(item);
});

//add driver

const newDriver = true;

if (newDriver) {
    myCar.push({ driver2: 'Oleksandra' });
}

console.log(myCar)

// check driver

const foundedDriver = this.driver.includes();
if (foundedDriver) {
    console.log("Driver ${} founded");
} else {
    console.log("Driver ${} nor founded")
}





