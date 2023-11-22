    
    var reset = false ;
    
    
    
    
    function appendToDisplay(value) {
      if (reset && !isNaN(value))
      display.value = value;
      else display.value += value;
      reset = false ;

    }

    function clearDisplay() {
      display.value = '';
    }

    function calculate() {



      try {
        display.value += " = " + eval(display.value);
        memory = display.value;
      } catch (error) {
        display.value = 'Error';
      }


     reset = true ;
    
      
    } 


    function calculateSin() {
      try {
        display.value =  Math.sin(eval(display.value));
        memory = display.value;
      } catch (error) {
        display.value = 'Error';
      }

      reset = true ;
    }

    function calculateCos() {
      try {
        display.value  =   Math.cos(eval(display.value));
        memory = display.value;
      } catch (error) {
        display.value = 'Error';
      }
      reset = true ;
    }

    function calculateSquare() {
      try {
        display.value =  Math.pow(eval(display.value), 2);
        memory = display.value;
      } catch (error) {
        display.value = 'Error';
      }
      reset = true ;
    }

    function memoryRecall() {
      display.value = memory;
    }


    function calculerAjouterHistorique()  

    {
        var inputContent = document.getElementById("display").value;

        var hsitoriqueContent =  document.getElementById("historique").value;

      hsitoriqueContent += "\n" + inputContent ;

      document.getElementById("historique").value = hsitoriqueContent;
    }

   

  