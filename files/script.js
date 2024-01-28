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