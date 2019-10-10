module.exports = function check(str, bracketsConfig) {
    let array = str.split('');
    let key = 0;
    bracketsConfig.forEach(brackets => {
        if (array[0] == brackets[1]) {
            return false;
        } 
    });
    for(let i = 1; i < array.length; i++) {
        for(let j = 1; j < bracketsConfig.length; j++) {
            if (array[i] == bracketsConfig[j][1] && array[i-1] == bracketsConfig[j][0]) {
                key++;
                break;
            }
            else if (array[i] == bracketsConfig[j][1] && array[i-1-key*2] == bracketsConfig[j][0]) {
                key++;
                break;
            }
            else if (array[i] == bracketsConfig[j][1] && array[i-1] != bracketsConfig[j][0]) {return false;}
            if(array[i] == bracketsConfig[j][0]) {break;}
        }

    }
    return true;
}
