var prijava =()=>{
    window.location.href = 'pocetna.html';
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('dodajTestDugme').addEventListener('click', function() {
      // Redirect to a different HTML page
      window.location.href = 'dodajTest.html';
    });
  });

  function redirectToTest(testPage) {
    window.location.href = testPage;
}

// var checkbox = document.getElementById('checkbox2');
// var dateInput = document.getElementById('end-date');

// checkbox.addEventListener('change', function() {
//     if (checkbox.checked) {
//       dateInput.disabled = false;
//     } else {
//         dateInput.disabled = true;
//     }
// });

function handleCheckboxChange(checkboxId, elementId) {
  var checkbox = document.getElementById(checkboxId);
  var myDiv = document.getElementById(elementId);

  if (checkbox.checked) {
      myDiv.disabled = false;
  } else {
      myDiv.disabled = true;
  }
}