
$(document).ready(onReady);


  //global variables
  var formInfo = [];
  var totalSalary = 0;
  var monthlyCost = 0;

function onReady() {
    console.log("jquery ready!");
    
    // event listeners go here
    $('#submitButton').on('click', addInfo)
    
}


function addInfo(){
    console.log('addInfo click button working');
   
    var newPerson = new Person 
              ($( '#firstName' ).val(),
              $( '#lastName' ).val(), 
              $( '#idNumber' ).val(), 
              $( '#jobTitle' ).val(), 
              $( '#annualSalary' ).val());
    

    totalSalary += Number(newPerson.annualSalary);
    monthlyCost = Math.round(totalSalary/12);
    $('#monthlyCost').text(monthlyCost);

       //reset       
    // $( '#firstName' ).val( '' ); 
    // $( '#lastName' ).val( '' );
    // $( '#idNumber' ).val( '' );
    // $( '#jobTitle' ).val( '' );
    // $( '#annualSalary' ).val( '' );

     $( '.createClass' ).val( '' );

console.log(formInfo);

 // append info to DOM ??????????????????? ?!
       //$('#displayEmployee').html(monthlyTotals);
       $('#displayEmployee').append('<p>Name:'+ ' ' + $('#firstName').val() + ' ' + $('#lastName').val() + '' + 
       '<br>ID Number:' + ' ' + $('#idNumber').val() + '' + 
       '<br>Job Title:' + ' ' + $('#jobTitle').val() + '' + 
       '<br>Annual Salary:' + ' ' + '$'+  $('#annualSalary').val() + 
       '<br>Monthly Total Cost for this Employee:' + ' $' + Math.round($('#annualSalary').val() / 12) + '</p>');
   //clears the input fields so a new employee can be added
       $('.info').val(''); 
} //end 


// info object constructor
function Person( firstName, lastName, idNumber, jobTitle, annualSalary ){
    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = idNumber;
    this.jobTitle = jobTitle;
    this.annualSalary = annualSalary;   
    formInfo.push( this);
} // end info constructor


    //calculate the salaries somehow 

function calcSalaries( formInfo ) {
    // var for total salary

    // loop through array
    for (var i = 0; i < formInfo.length; i++) {
        totalSalary += formInfo[i].annualSalary;
    }
    monthlyCost = totalSalary / 12;
}

    
    