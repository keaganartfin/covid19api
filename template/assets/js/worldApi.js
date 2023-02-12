let rsp;

const runApi = () => {
  const options = {
    method: 'GET',
    url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/',
    headers: {
      'X-RapidAPI-Key': '2713627478msh0dd319bee04885dp1d6351jsnc694206e390c',
      'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
    }
  };
  axios.request(options).then(function (response) {
    populateData(response.data);
    console.log(response.data);
    return rsp = response.data;
  }).catch(function (error) {
    // console.error(error);
  })
}
runApi();

let sumOfAllTests = 0;
const totalCases = document.querySelector('.totalCases');
const totalCasesPercentage = document.querySelector('.totalCasesPercentage');
const newCaseTotal = document.querySelector('.newCaseTotal');
const newCasePercentage = document.querySelector('.newCasePercentage');
const activeCaseTotal = document.querySelector('.activeCaseTotal');
const activeCasePercentage = document.querySelector('.activeCasePercentage');
const totalDeaths = document.querySelector('.totalDeaths');
const deathPercentage = document.querySelector('.deathPercentage');
const worldData = document.querySelector('.world-data');
const totalTests = document.querySelector('.totalTests');
const totalRecovered = document.querySelector('.totalRecovered');
const percentRecovered = document.querySelector('.percentRecovered');
const usaCases = document.querySelector('.usa-cases');
const germanyCases = document.querySelector('.germany-cases');
const australiaCases = document.querySelector('.australia-cases');
const denmarkCases = document.querySelector('.denmark-cases');
const romaniaCases = document.querySelector('.romania-cases');
const brazilCases = document.querySelector('.brazil-cases');
const countryNav = document.querySelector('.countryNav');



const populateData = (response) => {
  totalCases.innerText = response[0].TotalCases.toLocaleString("en-US");
  newCaseTotal.innerText = response[0].NewCases.toLocaleString("en-US");
  activeCaseTotal.innerText = response[0].ActiveCases.toLocaleString("en-US");
  totalDeaths.innerText = response[0].TotalDeaths.toLocaleString("en-US");
  totalCasesPercentage.innerText = parseFloat(response[0].NewCases / response[0].ActiveCases * 10).toFixed(2) + '%';
  newCasePercentage.innerText = parseFloat(response[0].NewCases / response[0].TotalCases * 10).toFixed(2) + '%';
  activeCasePercentage.innerText = parseFloat(response[0].NewRecovered / response[0].ActiveCases * 10).toFixed(2) + '%';
  deathPercentage.innerText = parseFloat(response[0].NewDeaths / response[0].TotalDeaths * 10).toFixed(2) + '%';

  for (let i = 1; i < response.length; i++) {
    let Country = response[i].Country;
    let TotalCases = response[i].TotalCases * 1;
    let NewCases = response[i].NewCases * 1;
    let Infection_Risk = response[i].Infection_Risk * 1;
    let Serious_Critical = response[i].Serious_Critical * 1;
    let ActiveCases = response[i].ActiveCases * 1;
    let TotalDeaths = response[i].TotalDeaths * 1;
    let NewDeaths = response[i].NewDeaths * 1;
    let Case_Fatality_Rate = response[i].Case_Fatality_Rate;
    let TotalTests = response[i].TotalTests * 1;
    let Test_Percentage = response[i].Test_Percentage;
    let TotalRecovered = response[i].TotalRecovered * 1;
    let Recovery_Proporation = response[i].Recovery_Proporation;
    let Population = response[i].Population * 1;

    let tr = document.createElement('tr');
    tr.innerHTML = `
      <td id="${Country}">${i}</td>
      <td>${Country.toLocaleString("en-US")}</td>
      <td>${TotalCases.toLocaleString("en-US")}</td>
      <td>${NewCases.toLocaleString("en-US")}</td>
      <td>${Infection_Risk.toLocaleString("en-US")}</td>
      <td>${Serious_Critical.toLocaleString("en-US")}</td>
      <td>${ActiveCases.toLocaleString("en-US")}</td>
      <td>${TotalDeaths.toLocaleString("en-US")}</td>
      <td>${NewDeaths.toLocaleString("en-US")}</td>
      <td>${Case_Fatality_Rate.toLocaleString("en-US")}%</td>
      <td>${TotalTests.toLocaleString("en-US")}</td>
      <td>${Test_Percentage.toLocaleString("en-US")}%</td>
      <td>${TotalRecovered.toLocaleString("en-US")}</td>
      <td>${Recovery_Proporation.toLocaleString("en-US")}%</td>
      <td>${Population.toLocaleString("en-US")}</td>
      `;
    worldData.appendChild(tr);
  }

  // NavBar List of Countries

  for (let i = 1; i < response.length; i++) {
    sumOfAllTests += parseInt(response[i].TotalTests);
    let li = document.createElement('li');
    let responseCountry = response[i].Country;
    li.innerHTML = `<li class="nav-item"><a class="nav-link countries" href="#${responseCountry}">${responseCountry}</a></li>`;
    countryNav.appendChild(li);
  };

  // Sort Countries By Name

  function sortList(ul) {
    Array.from(ul.getElementsByTagName("li"))
      .sort((a, b) => a.textContent.localeCompare(b.textContent))
      .forEach(li => ul.appendChild(li));
  }
  sortList(countryNav);

  let percRecover = +response[0].Recovery_Proporation;
  let recover = +response[0].TotalRecovered;

  totalTests.innerHTML = `${sumOfAllTests.toLocaleString("en-US")}`;
  totalRecovered.innerHTML = `${recover.toLocaleString("en-US")}`;
  percentRecovered.innerHTML = `${percRecover.toLocaleString("en-US")}%`;
  usaCases.innerText = `${response[2].TotalCases.toLocaleString("en-US")}`;
  germanyCases.innerText = `${response[5].TotalCases.toLocaleString("en-US")}`;
  australiaCases.innerText = `${response[15].TotalCases.toLocaleString("en-US")}`;
  denmarkCases.innerText = `${response[40].TotalCases.toLocaleString("en-US")}`;
  romaniaCases.innerText = `${response[39].TotalCases.toLocaleString("en-US")}`;
  brazilCases.innerText = `${response[6].TotalCases.toLocaleString("en-US")}`;
}



