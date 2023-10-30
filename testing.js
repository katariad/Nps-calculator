

$(function() {

    $('.form-control').keydown(function (e) {
    
      if (e.shiftKey || e.ctrlKey || e.altKey) {
      
        e.preventDefault();
        
      } else {
      
        var key = e.keyCode;
        
        if (!( (key >= 96 && key <= 105)|| (key ==8)|| (key==40) || (key==38))) {
        
          e.preventDefault();       
          
        }
  
      }
      
    });
    
  });


function updateNPS() {
    const promoters =parseInt(document.getElementById("promoters").value) ;
    

    const passives = parseInt(document.getElementById("passives").value) ;
    const detractors = parseInt(document.getElementById("detractors").value) ;
 




    if (!isNaN(promoters) && !isNaN(passives) && !isNaN(detractors)) {
        document.getElementById("result_div").textContent =
        "";
      const result = calculateNPS(promoters, passives, detractors);
      displayNPS(result);
    } else {
      document.getElementById("result_div").textContent =
        "Please enter valid numeric values for all fields.";
    }
  }

  function calculateNPS(promoters, passives, detractors) {
    const totalResponses = promoters + passives + detractors;
    const nps = ((promoters - detractors) / totalResponses) * 100;
    return nps;
  }

  function displayNPS(result) {
    const mainResult = document.getElementById("result_div");

    // Remove previous result div if it exists
    if (document.getElementById("resultdivbar")) {
      mainResult.removeChild(document.getElementById("resultdivbar"));
    }

    if (document.getElementById("resultdivbar2")) {
      mainResult.removeChild(document.getElementById("resultdivbar2"));
    }

    if (result > 0) {
      const a = document.createElement("div");
      a.setAttribute("id", "resultdivbar");
      a.style.width = result.toFixed(2) + "%";
      a.innerText = result.toFixed(2) + "%";
      mainResult.appendChild(a);
    } else if (result < 0) {
      const b = document.createElement("div");
      b.setAttribute("id", "resultdivbar2");
      b.style.width = Math.abs(result).toFixed(2) + "%";
      b.innerText = result.toFixed(2) + "%";
      mainResult.appendChild(b);
    }
  }