function solution(participant, completion) {
    var answer = '';
    let counts = count(participant);
    
    let v = completion.reduce( (obj, v, i) => {
        if(obj[v])
            obj[v]--;
        return obj;
    }, counts);
    
    for(let key in v) {
        if(v[key] > 0)
            return key;
    }
    
    return answer;
}

function count(arr) {
    let obj = {};
    
    for(let i=0; i<arr.length; i++) {
        if(!obj[arr[i]])
            obj[arr[i]] = 0;
        obj[arr[i]]++;
    }
    
    return obj;
}