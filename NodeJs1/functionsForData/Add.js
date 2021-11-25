const fls = require('fs');
const rl = require ("../smthForUse/readLine");
const {readContent}=require("./readCatalog");
const {filePath}= require ("./readCatalog");
const {dirPath}= require ("./readCatalog");
const {getAnsw}= require("../smthForUse/getAnsw");

async function addData () {
let content = readContent();
let newData= {};

console.log("Введите данные о товаре");
let answer = await getAnsw(rl,"Введите ID");
newData.id=answer;
 answer = await getAnsw(rl,"Введите название");
newData.name=answer;
 answer = await getAnsw(rl,"Введите цену");
newData.price=answer;
 answer = await getAnsw(rl,"Введите описание");
newData.characterize=answer;


if (newData.id.trim()&&newData.name.trim()&&newData.price.trim()&&newData.characterize.trim()){
    console.log("Следующий товар будет добавлен: ", newData, "\n");
    answer = await getAnsw(rl,"Вы согласны? Да/Нет");
    if (answer=="Да"){
        content.push(newData);
    }
    else {
        console.log("Вы отменили добавление");

    }


}else {
    console.log ("Ошибка, попробуйте снова", "\n");
    return;
}

let jsonContent = JSON.stringify(content,null,2);

fls.mkdirSync(dirPath,{recursive:true});
fls.writeFileSync(filePath,jsonContent);

}

module.exports=addData;



/*"id": 2,
"name": "name2",
"price": 800,
"characterize": "Size 600X600 metrs"
*/