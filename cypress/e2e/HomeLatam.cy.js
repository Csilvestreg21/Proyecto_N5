// Importa las páginas relacionadas con el flujo de reserva
import HomePage from '../pages/homePage.js';
import SelectTravelPage from '../pages/selectTravelPage.js';
import SelectSeatPage from '../pages/selectSeatPage.js';
import SelectPassengerPage from '../pages/selectPassengerPage.js';
import SelectPaymentPage from '../pages/selectPaymentPage.js';

// Descripción: Define una suite de pruebas para el manejo de la plantilla.
describe('Template Spec', () => {
    // Antes de ejecutar las pruebas, visita la página de inicio.
    before(() => {
        HomePage.visitHomePage();
    });

    it.only('Test Latam', () => {
        // Prueba para verificar el flujo completo de reserva de viaje en Latam
        SelectTravelPage.selectMoney();
        SelectTravelPage.selectOrigin('bog');
        SelectTravelPage.selectDestination('Med');
        SelectTravelPage.selectSearchFlight();
        SelectSeatPage.selectSeatOrigin();
        SelectSeatPage.selectSeatDestination();
        SelectSeatPage.selectBaggage();
        SelectSeatPage.selectEspecialBaggage();
        SelectSeatPage.clickContinueButtonP();
        SelectPassengerPage.passengerG();
        SelectPassengerPage.passengerJ();
        SelectPaymentPage.methodPayment();
    });
});