const rl = require("./readLine");
const {getAnsw} = require("./getAnsw");


async function activeStart() {

    const menu =
        "1 Вывод списка товаров" + '\n' +
        "2 Добавление нового товара" + '\n' +
        "3 Изменение существующего" + '\n' +
        "4 Удаление товара" + '\n' +
        "0 Выход из системы" + '\n';

    console.log(menu);


    let answ = await getAnsw(rl, "Выберите номер ");
    return answ;
}


module.exports = activeStart;