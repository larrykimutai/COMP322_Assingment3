sum();
insertTable();

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
    myTable.deleteRow((myTable.rows.length));





}

function insertTable(X,OP,Y){
    var newRow;

    newRow = document.getElementById("myTable").insertRow(-1);
    newRow.insertCell(0).appendChild(document.createTextNode(""));
    newRow.insertCell(1).appendChild(document.createTextNode(X));
    newRow.insertCell(2).appendChild(document.createTextNode(OP));
    newRow.insertCell(3).appendChild(document.createTextNode(Y));

    if(isNaN(X) || isNaN(Y)){
        //4db066
        newRow.insertCell(4).appendChild(document.createTextNode("wrong input number"));

    } else{
        newRow.insertCell(4).appendChild(document.createTextNode(operation(parseFloat(X),OP,parseFloat(Y))));
    }


}

function operation(x,OP,y){
    if(OP === "+" || OP === '+') return x + y;
    if(OP === "-" || OP === '-') return x - y;
    if(OP === "%" || OP === '%') return x % y;
    if(OP === "/" || OP === '/') return x / y;
    if(OP === "*" || OP === '*') return x * y;
    else return "computation error";
}