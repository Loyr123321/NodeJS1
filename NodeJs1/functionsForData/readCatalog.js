
  const path = require ('path');
  const {readFile}= require ("../smthForUse/readFile.js")
  

  const dirPath = path.resolve(__dirname, '../Data');
  const filePath = path.resolve(dirPath,'data.json');


  function readContent(){
    let fls = readFile(filePath);
    return fls && JSON.parse(fls) || [];
  }
  module.exports = {dirPath,filePath,readContent};

  /*// поиск продукта по айди
  const findIndex = content.findIndex((product) => product.id === 2);
  console.log('Найден индекс: ', findIndex);
  
  // изменение поля продукта
  function changeProduct(){
    const updateProduct = content[findIndex];
    updateProduct.name = 'changed name';
    console.log(content);
  }



    // удаление продукта
  function DeleteProduct() {
    content.splice(findIndex, 1);
    console.log(content);
  }
*/
