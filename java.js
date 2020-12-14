


var stackArr=[];

var top_stack=-1;


function push_stack(ele)

{

stackArr[++top_stack]=ele;

}


function pop_stack()

{

return(stackArr[top_stack--]);

}



function topStack(stackArr)

{

return(stackArr[stackArr.length-1]);

}


function isOperator(who)

{

switch(who){

case "^":

case "*":

case "/":

case "+":

case "-":

case ")":

case "(":

            return 1;

default: return 0;

}

}



function prcd(op)

{

switch(op){

case "^":

case "$":

return 4;

case "*":

case "/":

return 3;

case "+":

case "-":

return 2;

case "(":

case ")":

case "#":

return 1;

default: return 0;

}

}


function InfixToPostfix(){

var postfix=new Array();

stackArr=[];

push_stack("#");

var ptr=0;

infi=document.getElementById("infix").value;

infi=infi.split("");

var ch;

for(var i=0;i<infi.length;i++){

ch=infi[i];

if(isOperator(ch)==0){

postfix[ptr++]=ch;

}

else

{

if(ch==")")

{

while(stackArr[top_stack]!="(" )

{

postfix[ptr++]=pop_stack();

}

pop_stack();

}

else{

if(ch=="(")

{

push_stack(ch);

}

else

{

if(prcd(ch)>prcd(stackArr[top_stack]))

{

push_stack(ch);

}

else

{

while((prcd(ch)<=prcd(stackArr[top_stack]) && top_stack>-1))

{

postfix[ptr++]=pop_stack();



}

push_stack(ch);

}

}

}

}

}

while(stackArr[top_stack]!="#"){

postfix[ptr++]=pop_stack();

}

document.getElementById("postfix").value=postfix.join("");

}
