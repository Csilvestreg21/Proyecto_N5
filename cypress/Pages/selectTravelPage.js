// Clase y métodos estáticos para la selección de viaje
class SelectTravel {
    // Método estático para seleccionar la moneda y país
    static selectMoney() {
        cy.get('.sc-ptRml > .sc-plVjM > #currency-wrapper > #header__currentCurrency > .sc-fzoXWK').click()
        cy.get('.sc-pZOBi > #country-lang-selector-select-country--select > #country-lang-selector-select-country--select__trigger > #country-lang-selector-select-country--select__trigger--text-field__wrapper > #country-lang-selector-select-country--select__trigger--text-field').click()
        cy.get('#country-lang-selector-select-country--select__options--autocomplete__list > #xp_all_web_header_usa--autocomplete__listitem > #xp_all_web_header_usa--autocomplete__listitem--menuitem__content > .sc-fzqNJr > .sc-fzoyAV').click()
        cy.get('#country-lang-selector-select-country--select__options--autocomplete-card--card-body > #country-lang-selector-select-country--select__options--autocomplete__list > #xp_all_web_header_usa--autocomplete__listitem > #xp_all_web_header_usa--autocomplete__listitem--menuitem__content > .sc-fzqNJr').click()
        cy.get('#dialog-country-lang-selector > #dialog-country-lang-selector--dialog__body > .sc-fzonjX > .sc-pBzUF > #country-lang-selector-continue-button').click()
        cy.visit('https://www.latamairlines.com/us/es')
        cy.get('#country-suggestion > #country-suggestion--dialog__body > .sc-fzonjX > .sc-pLwIe > #country-suggestion-reject-change').click()
    }

    // Método estático para seleccionar el origen del viaje
    static selectOrigin(origin) {
        cy.get('#optionSection > .sc-qQjSQ > #btnAddPassengerCTA > .sc-pJvck > span:nth-child(1)').click()
        cy.get('#sectionAddChildren > .sc-oTBjG > .sc-pJUfC > #btnPlusChildren > .sc-prsLc').click()
        cy.get('.sc-qbDfu > .sc-pKJXg > .sc-pCNjN > #txtInputOrigin > #txtInputOrigin_field').click()
        cy.get('.sc-qbDfu > .sc-pKJXg > .sc-pCNjN > #txtInputOrigin > #txtInputOrigin_field').type('Mede')
        cy.get('#listAutoComplete > #lstItem_0 > #btnItemAutoComplete_0 > .sc-pQSDG > .sc-pIwMV:nth-child(3)').click()

    }

    // Método estático para hacer clic en el botón de continuar
    static clickContinueButton() {
        // Prueba para verificar el flujo de clic en el botón de continuar
        cy.get('#btnContinueCTA').click();
    }

    // Método estático para seleccionar el destino del viaje
    static selectDestination(destination) {
        // Prueba para verificar el flujo de selección del destino del viaje
        cy.get('.sc-qbDfu > .sc-pKJXg > .sc-pCNjN > #txtInputDestination > #txtInputDestination_field').type('Bog')
        cy.get('#listAutoComplete > #lstItem_0 > #btnItemAutoComplete_0 > .sc-pQSDG > .sc-pIwMV:nth-child(5)').click()
        cy.get('.sc-pKJXg > .sc-pCNjN > .sc-pkTlu > .sc-psPnT > #departureDate').click()
        cy.get('.CalendarMonthGrid_month__horizontal:nth-child(3) > .CalendarMonth > .CalendarMonth_table > tbody > tr:nth-child(3) > .CalendarDay:nth-child(2)').click()
        cy.get('.CalendarMonthGrid_month__horizontal:nth-child(3) > .CalendarMonth > .CalendarMonth_table > tbody > tr:nth-child(3) > .CalendarDay:nth-child(5)').click()
        cy.get('#inputSection > .sc-qbDfu > .sc-pKJXg > .sc-pCNjN > #btnSearchCTA').click()
        cy.visit('https://www.latamairlines.com/co/es/ofertas-vuelos?origin=MDE&inbound=2024-01-19T17%3A00%3A00.000Z&outbound=2024-01-16T17%3A00%3A00.000Z&destination=BOG&adt=1&chd=1&inf=0&trip=RT&cabin=Economy&redemption=false&sort=RECOMMENDED')
         .wait(5000);
    }

    // Método estático para buscar vuelos
    static selectSearchFlight() {
        cy.get('[data-test="5805dd2a90"] > .cardFlightstyle__WrapperCardShadow-sc__sc-1fa5kbc-0 > .cardFlightstyle__CardExpander-sc__sc-1fa5kbc-2').click();
        cy.get("[data-testid='bundle-detail-3-flight-select']").click();
        cy.wait(3000);
        cy.get('[data-test="12a66d2eba"] > .cardFlightstyle__WrapperCardShadow-sc__sc-1fa5kbc-0 > .cardFlightstyle__CardExpander-sc__sc-1fa5kbc-2').click();
        cy.get('[data-testid="bundle-detail-3-flight-select"]').click();
        cy.wait(10000);
    }
}

export default SelectTravel;
