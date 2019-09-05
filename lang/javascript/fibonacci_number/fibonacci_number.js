// #1
const array = [0, 1];

function solution(n) {
    if(n < 2)
        return 1;
    
    return pibonacci(n);
}

function pibonacci(n) {
     for(let i=2; i<=n; i++)
         array[ (i+3)%3 ] = (array[ (i+1)%3 ] + array[ (i+2)%3 ])%1234567;
    
     return array[ n%3 ]%1234567;
}

// #2 - chaining
const array = [0, 1];

function solution(n) {
    if(n < 2)
        return 1;
    
    return pibonacci(n);
}

function pibonacci(n) {
    return array.range(2, n).apply( (i, array) => array[ (i+3)%3 ] = (array[ (i+1)%3 ] + array[ (i+2)%3 ])%1234567 ).done( array => array[n%3] );
}

Array.prototype.range = function(start, end) {
    let that = this;
    return {
        apply: function(func) {
            for(let i=start; i<=end; i++)
                func(i, that);
            return this;
            },
        done: function(func) {
            return func(that);
        }
    }
}