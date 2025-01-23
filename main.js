const predictBtn = document.querySelector('#getPredict')
const prediction = document.querySelector('.prediction')

const statisticsOfDays = {
    0:0,
    1:2,
    2:4,
    3:3,
    4:5,
    5:9,
    6:0,
}

const statisticsOfDates = {
    '21':3,
    '22':7,
    '23':10,
    '24':3,
}

const sum = Object.values(statisticsOfDates).reduce((acc, value) => acc + value, 0)


predictBtn.addEventListener('click', function () {
    const currDate = new Date()
    const date = currDate.getDate()
    const day = currDate.getDay()
    let chanceToday
    const coef = Math.random() * (5.3 - 5) + 5

    if (day === 5 && date !== '21'){
        chanceToday = (100 - Math.random() * 2).toFixed(1)
    }
    else{
        if(date > 24 || date < 21) chanceToday = 0
        else chanceToday = (statisticsOfDates[date]/sum * statisticsOfDays[day]/sum * 100 * coef).toFixed(1)
    }

    let i = 0
    
    const interval = setInterval(() => {
        if(i.toFixed(1) === chanceToday) clearInterval(interval)
        prediction.innerHTML = `Вероятность стипендии сегодня равна... <br>${i.toFixed(1)} %`
        i+=0.1
    }, 5)

})




const z1 = document.getElementsByClassName("z-1")[0];
const z2 = document.getElementsByClassName("z-2")[0];
const z3 = document.getElementsByClassName("z-3")[0];

const ratio = 0.05;
let x;
let y;

document.addEventListener("mousemove", function (e) {
  x = e.pageX;
  y = e.pageY;
});

requestAnimationFrame(function animation() {
  z1.style.transform = "translate(" + x * ratio + "px," + y * ratio + "px)";

  z2.style.transform =
    "translate(" +
    (x * ratio) / 2 +
    "px," +
    (y * ratio) / 2 +
    "px) rotate(217deg)";

  z3.style.transform =
    "translate(" +
    (x * ratio) / 3 +
    "px," +
    (y * ratio) / 3 +
    "px) rotate(71deg)";

  requestAnimationFrame(animation);
});