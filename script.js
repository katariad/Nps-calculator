document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculate-button");

    calculateButton.addEventListener("click", function () {
       
      const promoters = parseInt(document.getElementById("promoters").value);
      const passives = parseInt(document.getElementById("passives").value);
      const detractors = parseInt(document.getElementById("detractors").value);
      if(document.getElementById("resultdivbar")){
              closeall();
      }
      if(document.getElementById("resultdivbar2")){
        closeall2();
}
      
      
      if (!isNaN(promoters) && !isNaN(passives) && !isNaN(detractors)) {
        const result = calculateNPS(promoters, passives, detractors);
        
        //  
        
        const pro = document.getElementById("promoters"); 
        pro.addEventListener("input", () => {
          console.log(result);  
        });


        const mainresult = document.getElementById("result_div");
    if(result>0){
        const a = document.createElement("div"); // Create a new div element
        a.setAttribute("id", "resultdivbar");
        a.setAttribute("class","resultdivbar");
        a.style.width = result.toFixed(2) + "%";
        a.innerText = result.toFixed(2) + "%";
    
        mainresult.appendChild(a); // Append the new div to the mainresult element
    }
    else if(result==0){
           
    }
    else{
        const b = document.createElement("div"); // Create a new div element
        b.setAttribute("id", "resultdivbar2");
        b.setAttribute("class","resultdivbar2");
        b.style.width = Math.abs(result).toFixed(2) + "%";
         console.log(b.style.width);
        b.innerText = result.toFixed(2) + "%";
    
        mainresult.appendChild(b);
    }
}
     else {
       
        document.getElementById("result_div").textContent ="Please enter valid numeric values for all fields." ;
      }
    });

    function calculateNPS(promoters, passives, detractors) {
      const totalResponses = promoters + passives + detractors;
      const nps = ((promoters - detractors) / totalResponses) * 100;
      return nps;
    }
  });

  function closeall() {
    console.log("i am working");
    var x = document.getElementsByClassName("resultdivbar");
    for (var i = 0; i < x.length; i++) {
        x[i].parentNode.removeChild(x[i]);
    }
  }

  function closeall2(){
    var x = document.getElementsByClassName("resultdivbar2");
    console.log("i am working");
    for (var i = 0; i < x.length; i++) {
        x[i].parentNode.removeChild(x[i]);
    }
  }
  