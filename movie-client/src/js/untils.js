export const convertObjectToParam = (param) => {
    let stringParam = "";
    for (let item in param){
        stringParam += `${item}=${param[item]}&`
    }
    return stringParam.substring(0, stringParam.length - 1);
}