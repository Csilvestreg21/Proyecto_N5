// Page Object para la página de inicio
class SearchFlights {
 static selectFlight() {
    cy.get('[data-test="cb0f90b093"] > .cardFlightstyle__WrapperCardShadow-sc__sc-1fa5kbc-0 > .cardFlightstyle__CardExpander-sc__sc-1fa5kbc-2').click();
    cy.get("div.sc-iaOGTt > div:nth-of-type(3) svg").click();
    cy.wait(2000);
    cy.get("div.sc-iaOGTt > div:nth-of-type(3) svg").click();
    cy.wait(2000);
    cy.get("div.sc-iaOGTt > div:nth-of-type(3) svg").click();
    cy.wait(2000);
    cy.get("[data-testid='bundle-detail-3-flight-select']").click();
    cy.wait(2000);
    cy.get("#ContainerFlightInfo0").click();
    cy.get("[data-testid='bundle-detail-0-flight-select']").click();
  }

  static clickContinueButton() {
      cy.get("[data-testid='button9--button']").click();
       cy.wait(15000);
  }
  static selectSeat(){
      cy.get("html > body > #__next > div.MainPageTheme__MainPage-sc-1lhhjfu-0 > main > div > #main-content > div > div.hxSsuc > #tab-segment-content-0 > div > div.SeatmapPage__AnimatedMap-sc-1u0akt8-11 > div > div > section > #cabins-group > div:nth-of-type(1) > div:nth-of-type(2) > [data-testid='seat-slot'] button").click({ multiple: true });
    cy.wait(3000);
    cy.get("[data-testid='pop-up'] span > span").click();
    cy.wait(3000);
    cy.get("html > body > #__next > div.MainPageTheme__MainPage-sc-1lhhjfu-0 > main > div > #main-content > div > div.hxSsuc > #tab-segment-content-0 > div > div.SeatmapPage__AnimatedMap-sc-1u0akt8-11 > div > div > section > #cabins-group > div:nth-of-type(1) > div:nth-of-type(2) > [data-testid='seat-slot'] button").click({ multiple: true });
    cy.wait(3000);
    cy.get("[data-testid='pop-up'] span > span").click();

  }

}

// Test Case utilizando Page Object Model
describe('Template Spec', () => {
  it.only('Test Tesla Link', () => {
    // Paso a paso, utilizando métodos del Page Object
    SearchFlights.selectFlight();
    SearchFlights.clickContinueButton();
    SearchFlights.selectSeat()

    // Agregar más pasos utilizando métodos del Page Object según sea necesario
  });
});
