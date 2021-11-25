const {readContent}= require('./readCatalog');

function showCatalog(){
    let content = readContent();
    content.forEach((product) => console.log(product));

}

module.exports=showCatalog;