
function sayhello(){
    return 'hi';
}
function receivesAFunction(sayhello){
    sayhello();

}


function returnsANamedFunction() {
    let func = x => x;
    return func;
  }

  function returnsAnAnonymousFunction () {
    return function() {
  
    }
  }