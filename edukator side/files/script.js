var prijava =()=>{
    window.location.href = 'pocetna.html';
}

if (window.location.pathname.includes('login.html')) {
function otvoriStranicu() {
  var unos = document.getElementById("tipKorisnika").value.toLowerCase();
  if (unos === "edukator") {
      window.location.href = "pocetna.html";
  } else if (unos === "student") {
      window.location.href = "../../student side/files/pocetna.html";
  } else {
      alert("Niste unijeli ispravan tip korisnika. Molimo unesite 'edukator' ili 'student'.");
  }
}
}

var dodajPitanje =()=>{
  window.location.href = 'dodajPitanje.html';
}

document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('dodajTestDugme');
  if (button) {
    button.addEventListener('click', function() {
      window.location.href = 'dodajTest.html';
    });
  }
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
if (window.location.pathname.includes('dodajPitanje.html')) {



// const radioButtons = document.querySelectorAll('input[type="radio"]');
// const checkboxes = document.querySelectorAll('.checkbox');

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

document.addEventListener('DOMContentLoaded', function() {
  var button = document.querySelector('#dodaj');
  if (button) {
    button.addEventListener('click', addAnswerOptions);
  }
});

//if (document.querySelector('.question-types')) {
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
//}


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

//if(document.getElementById("odustani-button")){
document.getElementById("odustani-button").addEventListener("click", function() {
  var confirmCancel = confirm("Upozorenje:\n\n" +
  "Svi nespremljeni podaci će biti izgubljeni.\n" +
  "Da li ste sigurni da želite odustati?");
  if (confirmCancel) {
    window.location.href = "pitanja.html";
  }
});
//}

//if(document.getElementById("spasi-button")){
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
//}
}

function  stariTestovi (){
  window.location.href = 'prethodniTestovi.html';
}

//prethodniTestovi

if (window.location.pathname.includes('prethodniTestovi.html')) {



// document.addEventListener("DOMContentLoaded", function() {
//   let detaljiLinkovi = document.querySelectorAll('a[href="detaljiStudenta.html"]');
  
//   detaljiLinkovi.forEach(link => {
//     link.addEventListener("click", function(event) {
//       let prosjek = event.target.parentElement.previousElementSibling.innerText;
//       sessionStorage.setItem("prosjek", prosjek);
//     });
//   });
// });

// document.addEventListener('DOMContentLoaded', function() {
//   var detaljiLinks = document.querySelectorAll('a[href="detaljiStudenta.html"]');
//   detaljiLinks.forEach(function(link) {
//       link.addEventListener('click', function(event) {
//           var predzadnjiTd = event.target.parentElement.previousElementSibling.previousElementSibling;
//           localStorage.setItem('prosjek', predzadnjiTd.innerText);
//       });
//   });
// });


// document.addEventListener("DOMContentLoaded", function() {
//   let prosjek = sessionStorage.getItem("prosjek");
//   console.log("Prosjek:", prosjek);
//   // Ovdje možete koristiti dobijeni prosjek kako želite
// });

// document.addEventListener('DOMContentLoaded', function() {
//   var params = new URLSearchParams(window.location.search);
//   var prosjek = params.get('prosjek');
//   if (prosjek) {
//     console.log('Prosjek:', prosjek);
//     // Ovdje možete koristiti prosjek kako želite
//   }
// });

function handleStudentDetailsClick(event) {
  console.log("Kliknuto");
  event.preventDefault();
  const target = event.target;
  if (target.tagName.toLowerCase() === 'a') {
    const studentName = target.parentElement.previousElementSibling.textContent;
    const studentDetailsPage = window.open('detaljiStudenta.html');
    studentDetailsPage.onload = function() {
      const h1Element = studentDetailsPage.document.querySelector('h1');
      h1Element.textContent += studentName;
    };
  }
}

const studentTable = document.getElementById('tabelaStudenata');
console.log(document.getElementById('tabelaStudenata'));
studentTable.addEventListener('click', handleStudentDetailsClick);
}