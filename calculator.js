let array = [];
sum();
//insertTable();
//results();



function sum(){
    do{
        var x = window.prompt("Value of x:");
        if(x === null) break;
        var op = window.prompt("Operator:");
        if(op === null) break;
        var y = window.prompt("Value of y:");
        if(y === null) break;
        var cont = window.confirm("Continue ?");
        insertTable(x,op,y);
    }while(cont);
    let myTable = document.getElementById("myTable");

    alert("OVER!!!");
    results();
    //myTable.deleteRow((myTable.rows.length));







}


function insertTable(X,OP,Y){

    var newRow;
    //let array = [];

    newRow = document.getElementById("myTable").insertRow(-1);
    newRow.insertCell(0).appendChild(document.createTextNode(""));
    newRow.insertCell(1).appendChild(document.createTextNode(X));
    newRow.insertCell(2).appendChild(document.createTextNode(OP));
    newRow.insertCell(3).appendChild(document.createTextNode(Y));

    if(isNaN(X) || isNaN(Y)){
        //4db066
        newRow.insertCell(4).appendChild(document.createTextNode("wrong input number"));

    } else{
        var temp = operation(parseFloat(X),OP,parseFloat(Y));
        if(!isNaN(temp)) {createArray(temp)}
        newRow.insertCell(4).appendChild(document.createTextNode(temp));

    }


}


function createArray(num){
    array.push(num);
}

function operation(x,OP,y){
    if(OP === "+" || OP === '+') return x + y;
    if(OP === "-" || OP === '-') return x - y;
    if(OP === "%" || OP === '%') return x % y;
    if(OP === "/" || OP === '/') return x / y;
    if(OP === "*" || OP === '*') return x * y;
    else return "computation error";
}

function results(){
    var newRow

    newRow = document.getElementById("myTable2").insertRow(-1);
    newRow.insertCell(0).appendChild(document.createTextNode(""));
    newRow.insertCell(1).appendChild(document.createTextNode(Math.min(...array)));
    newRow.insertCell(2).appendChild(document.createTextNode(Math.max(...array)));
    newRow.insertCell(3).appendChild(document.createTextNode(getAverage()));
    newRow.insertCell(4).appendChild(document.createTextNode(total()));

}

function getAverage(){
    var temp = 0;
    for(var i = 0; i < array.length; i++){
        temp = temp + array[i];
    }
    return temp/array.length;
}

function total(num){
    var temp = 0;
    for(var i = 0; i < array.length; i++){
        temp = temp + array[i];
    }
    return temp;

}