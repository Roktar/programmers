function solution(clothes) {        
    let obj = clothes.reduce( (obj, arr) => {
        if(!obj[arr[1]])
            obj[arr[1]] = 0;
        obj[arr[1]]++;
        return obj;
    }, {});
        
    return Object.keys(obj).reduce( (tot, v) => tot*(obj[v]+1), 1) -1;
}