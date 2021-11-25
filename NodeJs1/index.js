
const rl = require("./smthForUse/readLine");
const activeStart = require("./smthForUse/startWorking");
const showCatalog = require ("./functionsForData/showCatalog");
const AddCard = require ("./functionsForData/Add");
const changeCard = require("./functionsForData/changeCard");
const deleteC= require ("./functionsForData/deleteCard");

/*
Создать консольное приложение, которое будет иметь следующий функционал:
1 Вывод списка товаров
2 Добавление нового товара
3 Изменение существующего
4 Удаление товара
*/


async function start() {
    let AA = true;
    while (AA) {
        let answ = await activeStart();


        switch (Number(answ)) {
            case 1:
                showCatalog();
                break;

            case 2:
                await AddCard(rl);
                break;

            case 3:
                await changeCard();
                break;
            case 4:
                await deleteC();
                break;

            case 0:
                AA = false;
                break;


            default:
                console.log("Ошибка");
                break;
        }
    }
    rl.close();
}

start();


