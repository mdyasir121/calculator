var buttons=document.getElementsByClassName('button');
var display=document.getElementById('display');
var operand1=0;
var operand2=null;
var operator=null;

function changeButtonColorOnClick(buttons, color) {  
     buttons.onclick = function() {   
          buttons.style.backgroundColor = color;  
         }
         }
        

for(var i=0; i<buttons.length;i++){
    buttons[i].addEventListener('click', function(){
        var value=this.getAttribute('data-value');

        if(value=='+'){
            operator='+';
            operand1=parseFloat(display.innerText);
            display.innerText="";
           

        }else if(value=='-'){
            operator='-';
            operand1=parseFloat(display.textContent);
            display.innerText="";

        }
        else if(value=='*'){
            operator='*';
            operand1=parseFloat(display.textContent);
            display.innerText="";

        }
        else if(value=='/'){
            operator='/';
            operand1=parseFloat(display.textContent);
            display.innerText="";

        }
        else if(value=='%'){
            operator='%';
            operand1=parseFloat(display.textContent);
           display.innerText="";

        } else if(value=='+/-'){
            // operator='%';
             operand1=parseFloat(display.textContent);
             operand1*=-1;
            display.innerText=operand1;

        }


        else if(value=='='){
         operand2=parseFloat(display.innerText);
           var result="";
           if(operator=='+'){
            
               result=operand1+operand2;
               console.log(result);
           }
          
          else if(operator=='-'){
            result=operand1-operand2;
            console.log(result);
        }else if(operator=='*'){
            result=operand1*operand2;
            console.log(result);
        }else if(operator=='/'){
            result=operand1/operand2;
            console.log(result);
        }else if(operator=='%'){
            result=(operand1*operand2)/100;
            console.log(result);
        }
        else if(operator=='+'){
            result=(operand1*operand2)/100;
            console.log(result);
        }
        display.innerText=result;

       
        }else if(value=='AC'){
            display.innerText="";
        }
        else{
            display.innerText +=value;
            console.log(display.innerText);
        }

    }  )
   
}
