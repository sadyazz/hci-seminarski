var prijava =()=>{
    window.location.href = 'pocetna.html';
}

var dodajPitanje =()=>{
  window.location.href = 'dodajPitanje.html';
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('dodajTestDugme').addEventListener('click', function() {
      // Redirect to a different HTML page
      window.location.href = 'dodajTest.html';
  });
});

function handleCheckboxChange(checkboxId, elementId) {
  var checkbox = document.getElementById(checkboxId);
  var myDiv = document.getElementById(elementId);

  if (checkbox.checked) {
      myDiv.disabled = false;
  } else {
      myDiv.disabled = true;
  }
}

//dodajPitanja

const radioButtons = document.querySelectorAll('input[type="radio"]');
const checkboxes = document.querySelectorAll('.checkbox');

// radioButtons.forEach(radioButton => {
//     radioButton.addEventListener('change', function() {
//         if (this.value === 'trueFalse') {
//             checkboxes.forEach(checkbox => {
//                 checkbox.addEventListener('change', function() {
//                     checkboxes.forEach(otherCheckbox => {
//                         if (otherCheckbox !== this) {
//                             otherCheckbox.checked = false;
//                         }
//                     });
//                 });
//             });
//         } else {
//             checkboxes.forEach(checkbox => {
//                 checkbox.removeEventListener('change', function() {});
//             });
//         }
//     });
// });

document.querySelector('.question-types').addEventListener('change', function(event) {
  var button = document.querySelector('#dodaj');
  if (event.target.value === 'trueFalse') {
    
    var answerOptions = document.querySelector('#answerOptions');

    answerOptions.innerHTML = '';

    answerOptions.innerHTML = `
      <li class="required">
        <input type="radio" name="answer" id="answer1" value="answer1">
        Ovaj odgovor je tačan
      </li>
      <li>
        <input type="text" name="answer1" id="answerText1" required>
      </li>
      <li class="required">
        <input type="radio" name="answer" id="answer2" value="answer2">
        <label for="answer2" style="color: black;">Ovaj odgovor je tačan</label>
      </li>
      <li>
        <input type="text" name="answer2" id="answerText2" required>
      </li>
      
    `;
    
    button.style.display = 'none';
  
  }else if (event.target.value === 'multipleChoice') {
    var answerOptions = document.querySelector('#answerOptions');
    
    answerOptions.innerHTML = `
      <li>
        <input type="checkbox" name="answer" >
        Ovaj odgovor je tačan
      </li>
      <li>
        <input type="text" name="answerText1" >
      </li>
      <li>
        <input type="checkbox" name="answer" >
        Ovaj odgovor je tačan
      </li>
      <li>
        <input type="text" name="answerText2" >
      </li>
    `;
    button.style.display = 'block';
  }
});


function addAnswerOptions() {
  
  var answerOptions = document.querySelector('#answerOptions');

  

  if (answerOptions.querySelectorAll('li').length >= 20) {
    alert('Maksimalan broj odgovora je već dodat.');
    return;
  }
  
  
  answerOptions.innerHTML += `
  <li>
  <input type="checkbox" name="answer" >
  Ovaj odgovor je tačan
</li>
<li>
  <input type="text" name="answerText1" >
</li>
<li>
  <input type="checkbox" name="answer" >
  Ovaj odgovor je tačan
</li>
<li>
  <input type="text" name="answerText1" >
</li>
  `;
}

var button = document.querySelector('#dodaj');

button.addEventListener('click', addAnswerOptions);

document.getElementById("odustani-button").addEventListener("click", function() {
  var confirmCancel = confirm("Upozorenje:\n\n" +
  "Svi nespremljeni podaci će biti izgubljeni.\n" +
  "Da li ste sigurni da želite odustati?");
  if (confirmCancel) {
    window.location.href = "pitanja.html";
  }
});

document.getElementById("spasi-button").addEventListener("click", function() {
  var pitanje = document.getElementsByName("question")[0].value;

  var odg1 = document.getElementsByName("answer1")[0].value;
  var odg2 = document.getElementsByName("answer2")[0].value;

  if (pitanje === "" || odg1 === "" || odg2 === "") {
    //event.preventDefault();
    alert("Molimo popunite sva obavezna polja.");
  }

var checkboxes = document.querySelectorAll('input[type="checkbox"], input[type="radio"][name="answer"]');

  var checked = false;
  checkboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
          checked = true;
      }
  });
  if (!checked) {
      alert('Molimo odaberite barem jedan odgovor.');
      //event.preventDefault(); // Prevent form submission
  }
  
});

//prethodniTestovi

function  stariTestovi (){
  window.location.href = 'prethodniTestovi.html';
}

// var tdElement = document.querySelector('td');

// // Add click event listener
// tdElement.addEventListener('click', function() {
//  console.log("radi");
//   //window.location.href = 'your_other_screen.html';
// });

var table = document.querySelector('table');

// Add click event listener to the parent element
table.addEventListener('click', function(event) {
  debugger
  if (event.target.tagName === 'TD') {
    console.log("radi");
    //window.location.href = 'your_other_screen.html';
  }
});