var firstnumber;  
var secondnumber;  
var result;  
var operations;  

function getNumber(num){
    result=document.getElementById("input");
    result.value +=num;
    }
function clr() {  
    document.form.input.value = "0";  
    document.form.result.value = "";  
    return;  
    }  
function operationplus() {  
    operation = "+";  
    firstnumber = parseFloat(document.form.input.value);  
    document.form.input.value = "";  
    document.form.result.value = firstnumber + operation;  
    }  
function operationmult() {  
    operation = "*";  
    firstnumber = parseFloat(document.form.input.value);  
    document.form.input.value = "";  
    document.form.result.value = firstnumber + operation;  
    }  
function operationminus() {  
    operation = "-";  
    firstnumber = parseFloat(document.form.input.value);  
    document.form.input.value = "";  
    document.form.result.value = firstnumber + operation;  
    }  
function operationdivid() {  
    operation = "/";  
    firstnumber = parseFloat(document.form.input.value);  
    document.form.input.value = "";  
    document.form.result.value = firstnumber + operation;  
    }  
function operationperc() {  
    operation = "%";  
    firstnumber = parseFloat(document.form.input.value);  
    document.form.input.value = "";  
    document.form.result.value = firstnumber + operation;  
    }
function mod() {  
    operation = "mod";  
    firstnumber = parseFloat(document.form.input.value);  
    document.form.input.value = "";  
    document.form.result.value = firstnumber + operation;  
    }
function operationpown() {  
    operation = "^";  
    firstnumber = parseFloat(document.form.input.value);  
    document.form.input.value = "";
    document.form.result.value = firstnumber + operation;  
    } 
function operationpow2(){
    firstnumber = document.form.input.value;  
    result = Math.pow(firstnumber,2);  
    document.form.input.value = result;  
    document.form.result.value = firstnumber+"pow(" + 2 + ") = " + result;   
}
function sqrots() {  
    firstnumber = document.form.input.value;  
    result = Math.sqrt(parseFloat(document.form.input.value));  
    document.form.input.value = result;  
    document.form.result.value = "sqrt(" + firstnumber + ") = " + result;  
    }  
function fact(){
    var factans=1;
    firstnumber = document.form.input.value;
    for(var i=1; i<=firstnumber; i++){
    factans=factans*i;
    }
    document.form.input.value = factans;  
    document.form.result.value = firstnumber+"! = " + factans;
}
function back() {
    var value = document.getElementById("input").value;
    document.getElementById("input").value = value.substr(0, value.length - 1);
}
function equalsto() {  
    secondnumber = parseFloat(document.form.input.value);  
    if (operation == "+") {  
    result = firstnumber + secondnumber;  
    } else if (operation == "*") {  
        result = firstnumber * secondnumber;  
        } else if (operation == "-") {  
        result = firstnumber - secondnumber;  
        } else if (operation == "/") {  
        result = firstnumber / secondnumber;  
        } else if (operation == "%") {  
                 if (document.form.input.value == "0") {  
                    result = firstnumber / 100;  
                    document.form.result.value = firstnumber + operation + "100";  
                    } else if (document.form.input.value != "0") {  
                    result = firstnumber / secondnumber * 100;  
                    document.form.result.value = firstnumber + operation + secondnumber + "*100 = " + result;  
                    }  }
         else if (operation == "^") {
        result=Math.pow(firstnumber,secondnumber);
        }
        else if (operation == "mod") {
        result=firstnumber%secondnumber;
        } 
        document.form.input.value = "";  
        document.form.input.value = result.toString();  
        document.form.result.value = firstnumber + operation + secondnumber + " = " + result.toString();  
        return;  
        }  

