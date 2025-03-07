const main = document.querySelector('.main');
const calculatebtn = document.querySelector('#Calculate');
const result = document.querySelector('#result');

calculatebtn.addEventListener('click',function(){
    // take height value from the html file
    let heightValue = parseInt(document.querySelector('#height').value);
    // take weight value from the html file
    let weightValue = parseInt(document.querySelector('#weight').value);

    // cheak the height & weight value is invaild or not 
    if(heightValue=== ''|| heightValue < 0 ||  isNaN(heightValue))
    {
        result.innerHTML =`please Enter a valid height ${heightValue}`;
    }
    else if(weightValue === '' || weightValue < 0 | isNaN(weightValue))
    {
        result.innerHTML = `please Enter a valid weight ${weightValue}`;
    }
    else
    {
        // calculate the bmi value 
       const bmi = (weightValue/((heightValue*heightValue)/10000)).toFixed(2);
        // show the Result
       result.innerHTML = `<span>Your BMI is  ${bmi}</span>`;
    //    main.appendChild(result)
    
    const range = document.createElement('p');
    main.appendChild(range);
    if(bmi > 0 && bmi <= 18.6){
        range.textContent =`Under Weight ${bmi}`;
    }else  if(bmi >= 18.6 && bmi <= 24.4 ){
        range.textContent =` Normal range ${bmi}`
    }else{
        range.textContent =`Over Weight ${bmi}`;
    }
    }


})


