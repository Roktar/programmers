function solution(lottos, win_nums) {
    var answer = [0, 0]; // 0: max, 1:low
    const rank = v => [6,6,5,4,3,2,1][v];
    
    lottos.forEach(v => v === 0 ? answer[0]++ : (win_nums.includes(v) ?[answer[0], answer[1]] = [answer[0]+1, answer[1]+1] : "")); 
    return answer.map( v => rank(v) );
}