 const rl = require ("../smthForUse/readLine");
 const fls = require ("fs");
 const SerDat = require ("../smthForUse/searchingData");
 const {readContent}= require('./readCatalog');
 const {filePath}= require ("./readCatalog");
 const {dirPath}= require ("./readCatalog");
 const {getAnsw}= require("../smthForUse/getAnsw");


 async function changeCard (){
    let content = readContent();
 let indProd= await SerDat();
 if (indProd ===-1){
    return;
 }
 console.log("Введите данные о товаре");

 let answer = await getAnsw(rl,"Введите название");
 content[indProd].name=answer;
 answer = await getAnsw(rl,"Введите цену");
 content[indProd].price=answer;
 answer = await getAnsw(rl,"Введите описание");
 content[indProd].characterize=answer;


console.log("Измененный товар: ", content[indProd], "\n");


let jsonContent = JSON.stringify(content,null,2); 

fls.mkdirSync(dirPath,{recursive:true});
fls.writeFileSync(filePath,jsonContent);


 }



 module.exports = changeCard;