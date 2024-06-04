/* Function for converting the Hydrometer values */
function Hydrometer()
{
    var inputValue1 = document.getElementById("user_value");
    const inputValue = inputValue1.value;

    /* get the value from which radio button is checked */
    var radios = document.getElementsByName('hydrometer_type');
    for (var i = 0, length = radios.length; i < length; i++) 
    {
        if (radios[i].checked) 
        {
            var input_hydro_type = (radios[i].value);
            break;
        }
    }
    /* Depending on which input option, calculate the conversions  */
    if (input_hydro_type == "bricks"){
        brix_output = inputValue;
        percent_output = inputValue/0.55;
        sg_output = (inputValue * 0.004 ) + 1;

    } else if (input_hydro_type == "percent"){
        brix_output = inputValue*0.55;
        percent_output = inputValue;
        sg_output = (inputValue / 131.25 ) + 1;

    }else if (input_hydro_type == "sg"){
        brix_output = (inputValue - 1 ) / 0.004;
        percent_output = (inputValue - 1 ) * 131.25;
        sg_output = inputValue;
    }
    /*  Display the results  */
    /*.toFixed(2)   (for decimal place)*/

    document.getElementById("output1").innerHTML = Math.round((brix_output + Number.EPSILON) * 100) / 100+'bx';
    document.getElementById("output2").innerHTML = Math.round((percent_output + Number.EPSILON) * 100) / 100+'%';
    document.getElementById("output3").innerHTML = Math.round((sg_output + Number.EPSILON) * 100) / 100+' SG';
}

/* Function for approximating the percentage of your mixer */
function Mixer(){

    var abv1 = document.getElementById("abv");
    const abv = abv1.value;

    var qty1 = document.getElementById("qty");
    const qty = qty1.value;

    var glass1 = document.getElementById("glass");
    const glass = glass1.value;

    var answer = (abv*qty)/glass;

    document.getElementById("output").innerHTML = 'Your drink will be '+answer+'%';

}
