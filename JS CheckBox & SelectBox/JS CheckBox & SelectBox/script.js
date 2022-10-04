function boxes()
{
    var checkboxes = document.querySelectorAll('input[name="c1"]:checked');
    var values = [];
checkboxes.forEach((checkbox)=>
{
    values.push(checkbox.value);
});
    document.getElementById("lang").innerHTML = "Languages are :" +values;

    var select = document.getElementById('Country');
    var text = select.options[select.selectedIndex].text;
    document.getElementById("countryresult").innerHTML = "Country is :" +text;

    var select = document.getElementById('State');
    var text = select.options[select.selectedIndex].text;
    document.getElementById("stateresult").innerHTML = "State is :" +text;
}


var countryStateInfo = {
    USA: 
    {
      Pennsylvania: {},
      Louisiana: {},
    },
    Germany: 
    {
      Bavaria: {},
      Hessen: {},
    },
    Italy: 
    {
      Venice: {},
      Naples: {},
    },
    Mexico: 
    {
      SanLuis: {},
      Hidalgo: {},
    },
  };

  window.onload = function () 
  {
    var countrySelection = document.querySelector("#Country"),
      stateSelection = document.querySelector("#State");
   
    for (let country in countryStateInfo) {
      countrySelection.options[countrySelection.options.length] = new Option(
      country,
      country
    );
  }

  countrySelection.onchange = (e) => {
  
    for (let state in countryStateInfo[e.target.value]) {
      stateSelection.options[stateSelection.options.length] = new Option(
        state,
        state
      );
    }
  };
}




  

  