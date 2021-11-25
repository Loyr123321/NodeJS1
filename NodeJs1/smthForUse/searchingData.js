const rl = require ("../smthForUse/readLine");
const {readContent}= require ("../functionsForData/readCatalog");
const {getAnsw} = require("./getAnsw");



async function SerDat(){
    const content = readContent();
    let answer = await getAnsw(rl,"Введите ID товара:");
    let findIndex=content.findIndex((product)=> product.id == answer);
    if (findIndex === -1){

        console.log("Такого товара нет");
        return findIndex;

    }
    else {
        console.log("Найден товар:", content[findIndex]);
        return findIndex;
    }


}

module.exports = SerDat;