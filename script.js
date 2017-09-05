var formInfo = [];
var totalSalary = 0;
var monthlyCost = 0;

$(document).ready(onReady);

function onReady() {
    console.log("jquery ready!");
    
    // event listeners go here
    $('#submitButton').on('click', addInfo)
    $('#submitButton').on('click', displayEmployees);
    
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

function calcSalaries( formInfo ) {
    // var for total salary

    // loop through array
    for (var i = 0; i < formInfo.length; i++) {
        totalSalary += formInfo[i].annualSalary;
    }
    monthlyCost = totalSalary / 12;
}

function displayEmployees() {

        $('#displayEmployee').append('<tr id=' + formInfo.slice(-1)[0].idNumber + '>' + 
            '<td>' + formInfo.slice(-1)[0].firstName + '</td>' + 
            '<td>' + formInfo.slice(-1)[0].lastName + '</td>' +  
           // '<td>' + formInfo.slice(-1)[0].idNumber + '</td>' +
           // '<td>' + formInfo.slice(-1)[0].jobTitle + '</td>' +
            '<td>' + formInfo.slice(-1)[0].annualSalary + '</td>' +
          //  '<td>' + '<button class="delete">Delete</button>' + '</td>' +
            '</tr>'
        );
    } // end displayEmployees 
    