function receivesAFunction(cb){
    return cb(); 
};

let namedFunction = function(){
    return '';
}
function returnsANamedFunction(){
    return namedFunction;
}


function returnsAnAnonymousFunction(){
    return () => 'anonymous function';
};
// returnsAnAnonymousFunction(); 