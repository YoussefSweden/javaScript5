function inputFunction(){
    document.getElementById("outputTest").innerHTML = document.getElementById("inputTest").value;
    }
    
    function facit(){
        var numb1 = parseInt(document.getElementById("number1").value);
        var numb2 = parseInt(document.getElementById("number2").value);
        var target=100;
        if(target-numb1<target-numb2)
        {
            document.getElementById("result").innerHTML = "Number 1 is closer to 100 than Number 2";
        }
        else if(numb1==numb2)
        {
            document.getElementById("result").innerHTML = "Number 1 and Number 2 have the same distance to 100";
        }
 
        else
        {
            document.getElementById("result").innerHTML = "Number 2 is closer to 100 than Number 1";
        }

    }