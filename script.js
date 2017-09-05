
$(document).ready(onReady);

function onReady() {
    console.log("jquery ready!");
    
    // event listeners go here
    $('#submitButton').on('click', addInfo)
    
}

  //global variables
var formInfo = [];
var totalSalary = 0;
var monthlyCost = 0;

function addInfo(){
    console.log('addInfo click button working');
   
    var newPerson = new Person ($( '#firstName' ).val(),
              $( '#lastName' ).val(), 
              $( '#idNumber' ).val(), 
              $( '#jobTitle' ).val(), 
              $( '#annualSalary' ).val());

       //reset       
    $( '#firstName' ).val( '' ); 
    $( '#lastName' ).val( '' );
    $( '#idNumber' ).val( '' );
    $( '#jobTitle' ).val( '' );
    $( '#annualSalary' ).val( '' );
    console.log(formInfo);

    $('#displayEmployee').append('<tr><td>' + newPerson.firstName + 
    '</td><td>' + newPerson.lastName + 
    '</td><td>' + newPerson.idNumber +
     '</td><td>' + newPerson.jobTitle + 
     '</td><td>' + newPerson.annualSalary + 
     '</td><td>' + newPerson.monthlySalary 
     );
     $('#monthlyCost').html('<p>'+'Total Monthly Costs: $'+calTotalMonthlyCost(formInfo)+'</p>')
     
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




function calcSalaries( formInfo ) {
    // var for total salary

    // loop through array
    for (var i = 0; i < formInfo.length; i++) {
        totalSalary += formInfo[i].annualSalary;
    }
    monthlyCost = totalSalary / 12;
}

    
    