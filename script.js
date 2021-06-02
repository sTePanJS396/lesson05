let money; 
let income = 'Реклама в паблике ВК';
let period = 5;
let addExpenses;
let deposit;
let expenses1;
let expenses2;
let amount1;
let amount2;
let mission = 500000;
let accumulatedMonth;
let budgetDay;
let whatGetTargetMonth;
let res = 0;
let sum = 0;
// Объявим все переменные


function start() {
    do {
        money = prompt('Какой твой месячный доход?');
    } while(isNaN(money) || money.trim() === '' || money === null);    
};

start();
// Спрашиваем у пользователя месячных доход, и записываем его в переменную money
// Объявим функцию start и реализуем ее функционал с помощью do-while

addExpenses = prompt('Перечисли возможные расходы за определенный период через запятую');
// Спрашиваем у пользователя траты за период, и записываем их в переменную addExpenses

deposit = confirm('У тебя есть депозит в банке? Нажми OK, если есть.');
// В переменной deposit спрашиваем у пользователя про депозит в банке

// ---------------Урок 5, перепишем некоторые функции, используя циклы------------------------------

function getExpensesMonth() {
    let i =  0;
    do{
        if (i === 0){
            expenses1 = prompt('Назови обязательную статью расходов.');
        } else if (i === 1) {
            expenses2 = prompt('Может, у тебя есть еще какая-либо статья расходов? Назови ее!');
        }
        // Запрашиваем у пользователья его обязательные и прочие расходы

        do {
            sum = +prompt('Во сколько это обойдется?');

        } while (isNaN(sum) || sum === '' || sum === null);
        // Спрашиваем траты у пользователя
        res = res + sum;
        i++;
        
    } while (i < 2);

    return res;
};
getExpensesMonth();
// Вызываем функцию getExpensesMonth, передаем ей значения трат за месяц, полученные у пользователя.


function getAccumulatedMonth(money, res) {
    return money - sum;
};
accumulatedMonth = getAccumulatedMonth(money, res);
// Объявляем функцию, передаем ей параметры, необходимые для вычесления накоплений за месяц,
// вызов функции присваеваем в переменную accumulatedMonth.
// Внесены коррективы: теперь значение вычесляется исходя из переменной sum,
// полученной в результате выполнения функции getExpensesMonth.

function getTargetMonth(accumulatedMonth, mission) {
    return Math.round(mission / accumulatedMonth);    
};
whatGetTargetMonth = getTargetMonth(accumulatedMonth, mission);
// Фунуция getTargetMonth получит данные, и вычислит, за какой период будет достигнута 
// цель накопить определенную сумму денег

function getBudgetDay(accumulatedMonth) {
    return Math.floor(accumulatedMonth / 30);
};
budgetDay = getBudgetDay(accumulatedMonth);
// Высчитываем дневной бюджет

function getStatusIncome(budgetDay) {
    if (budgetDay >= 1200) {
        return 'У тебя высокий уровень дохода';
    } else if (600 <= budgetDay <= 1200) {
        return 'У тебя средний уровень дохода';
    } else if (0 <= budgetDay <= 600) {
        return 'К сожалению, уровень дохода у тебя низкий';
    } else {
        return 'Что-то пошло не так :(';
    }
    // Вычелсяем уровень дохода
};
getStatusIncome(budgetDay);
// Функция высчитывает уровень дохода

function showTypeOf(data) {
    return console.log(typeof data);   
};

// ------------------Выводим все необходимые данные в консоль----------------------------
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
// Типы данных

console.log(getStatusIncome(budgetDay));
// Уровень дохода

if (whatGetTargetMonth > 0) {
    console.log('Цель будет достигнута через... ' + getTargetMonth(accumulatedMonth, mission));
} else {
    console.log('Цель не будет достигнута :(');
}
// Добавленна проверка переменной whatGetTargetMonth. 
// Срок достижения цели накопления 

console.log('Бюджет на день: ', budgetDay);
// Бюджет на день

console.log('Расходы на месяц составили: ' + res);
// Расходы за месяц
// При вывове функции не передаем значения amount1 and amount2, так как все необходимые
// данные и вычесление происходят в функции getExpensesMonth.

console.log(addExpenses.toLocaleLowerCase().split(', '));
// Массив трат