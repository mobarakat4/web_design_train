function claculateSum() {
    // Retrieve the values of num1 and num2 from the input elements
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
  
    // Check if the input values are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
      alert("Please enter valid numbers.");
      return;
    }
  
    // Calculate the sum
    const sum = num1 + num2;
  
    // Display the result in an alert
    console.log("The sum of " + num1 + " and " + num2 + " is: " + sum);
  }
  function one(){
    const name = document.getElementById('name').value;
    alert("Welcome : "+ name)
  }
  function c3(){
    const t3 = document.getElementById('temp3').value;
    if(t3>=30){
        console.log('HOT')
    }else{
        console.log('cold')
    }
    // alert("Welcome : "+ name)
  }
  function c4(){
    const t4 = document.getElementById('temp').value;
    const f4 = document.getElementById('feel').value;
    if(t4>=30&&f4>=30){
        console.log('HOT')
    }else if((t4>25 && t4<30)&&(f4>25 && f4<30)){
        console.log('NORMAL')
    }else if(t4<25&&f4<=25){
        console.log('cold')
    }
  }