const rl = require ("../smthForUse/readLine");
const fls = require ("fs");
const SerDat = require ("../smthForUse/searchingData");
 const {readContent}= require('./readCatalog');
 const {filePath}= require ("./readCatalog");
 const {dirPath}= require ("./readCatalog");
 const {getAnsw}= require("../smthForUse/getAnsw");

 async function deleteC(){

    const content = readContent();
    const indProd = await SerDat();
    if (indProd ===-1){
        
        return;
    }
    let answer = await getAnsw(rl, "Вы точно хотите удалить этот товар? Да/ Нет");
    if (answer ==="Да"){
        content.splice(indProd,1);
        let jsonContent = JSON.stringify(content,null,2);

        fls.mkdirSync(dirPath,{recursive:true});
        fls.writeFileSync(filePath,jsonContent);

    } else {
        console.log("Ошибка. Отмена удаления информации");
        return;
    }

 }

 module.exports = deleteC;