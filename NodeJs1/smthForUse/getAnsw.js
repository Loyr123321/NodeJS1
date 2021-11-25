
function getAnsw(rl, text = "№ ") {
    return new Promise(resolve => {
        rl.question(text, answer => resolve(answer));
    })
}
module.exports = {getAnsw};
