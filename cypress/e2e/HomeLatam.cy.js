import HomePage from '../pages/homePage.js'; // Asegúrate de ajustar la ruta correcta
import SelectTravelPage from '../pages/selectTravelPage.js';

describe('Template Spec', () => {
  before(() => {
    HomePage.visitHomePage();
  });

it.only('Test Tesla Link', () => {
    // Paso a paso, utilizando métodos del Page Object
    HomePage.selectMoney();
    HomePage.selectOrigin('bog');
    HomePage.selectDestination('Med')
    HomePage.selectSearchFlight()
    HomePage.selectSeatOrigin()
    HomePage.selectSeatDestination()
    HomePage.selectBaggage()
    HomePage.selectEspecialBaggage()
    HomePage.clickContinueButtonP()
    HomePage.passengerG()
    HomePage.passengerJ()
  });
});