for (let i = 1; i < response.length; i++) {
  let tr = document.createElement('tr');
  tr.innerHTML = 
    let Country = response[i].Country;
    let TotalCases = response[i].TotalCases;
    let NewCases = response[i].NewCases;
    let Infection_Risk = response[i].Infection_Risk;
    let Serious_Critical = response[i].Serious_Critical;
    let ActiveCases = response[i].ActiveCases;
    let TotalDeaths = response[i].TotalDeaths;
    let NewDeaths = response[i].NewDeaths;
    let Case_Fatality_Rate = response[i].Case_Fatality_Rate;
    let TotalTests = response[i].TotalTests;
    let Test_Percentage = response[i].Test_Percentage;
    let TotalRecovered = response[i].TotalRecovered;
    let Recovery_Proporation = response[i].Recovery_Proporation;
    let Population = response[i].Population;
    ;
  worldData.appendChild(tr);
}