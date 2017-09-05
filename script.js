var formInfo = [];
var monthlyCost = 0;
var annualCost = 0;

$(document).ready(onReady);

function onReady() {
    console.log("jquery ready!");
    
    // event listeners go here
    $('#submitButton').on('click', addInfo)
}

function addInfo(){
    console.log('addInfo click button working');
   
    new Info ($( '#firstName' ).val(),
              $( '#lastName' ).val(), 
              $( '#idNumber' ).val(), 
              $( '#jobTitle' ).val(), 
              $( '#annualSalary' ).val())
       //reset       
    $( '#firstName' ).val( '' ); 
    $( '#lastName' ).val( '' );
    $( '#idNumber' ).val( '' );
    $( '#jobTitle' ).val( '' );
    $( '#annualSalary' ).val( '' );
    console.log(formInfo);
} //end 


// info object constructor
function Info( firstName, lastName, idNumber, jobTitle, annualSalary ){
    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = idNumber;
    this.jobTitle = jobTitle;
    this.annualSalary = annualSalary;   
    formInfo.push( this);
} // end info constructor

function calculate(){
    
    for (var i = 0; i < formInfo.length; i++) {
          

    }
}