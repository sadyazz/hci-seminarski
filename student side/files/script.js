if(window.location.pathname.includes('testovi.html')){
    function  stariTestovi (){
        window.location.href = 'detaljiTesta.html';
      }
      
      function redirectToTest(){
        window.location.href = 'startTest.html';
      }

}
if(window.location.pathname.includes('startTest.html')){
  function zapocniTest(){
  window.location.href = 'test1.html';
  }
}

if(window.location.pathname.includes('test1.html')){
  function  zavrsiTest(){
      window.location.href = 'detaljiTesta.html';
    }

  function  sljedecePitanje(){
    window.location.href = 'test2.html';
  }
}

if(window.location.pathname.includes('test2.html')){
  function  nazad(){
    window.location.href = 'test1.html';
  }

  function  zavrsiTest(){
    window.location.href = 'detaljiTesta.html';
  }
}