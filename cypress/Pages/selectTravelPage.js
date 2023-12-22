class SelectTravel {
    static selectMoney() {
        cy.get('.sc-ptRml > .sc-plVjM > #currency-wrapper > #header__currentCurrency > .sc-fzoXWK').click()
        cy.get('.sc-pZOBi > #country-lang-selector-select-country--select > #country-lang-selector-select-country--select__trigger > #country-lang-selector-select-country--select__trigger--text-field__wrapper > #country-lang-selector-select-country--select__trigger--text-field').click()
        cy.get('#country-lang-selector-select-country--select__options--autocomplete__list > #xp_all_web_header_usa--autocomplete__listitem > #xp_all_web_header_usa--autocomplete__listitem--menuitem__content > .sc-fzqNJr > .sc-fzoyAV').click()
        cy.get('#country-lang-selector-select-country--select__options--autocomplete-card--card-body > #country-lang-selector-select-country--select__options--autocomplete__list > #xp_all_web_header_usa--autocomplete__listitem > #xp_all_web_header_usa--autocomplete__listitem--menuitem__content > .sc-fzqNJr').click()
        cy.get('#dialog-country-lang-selector > #dialog-country-lang-selector--dialog__body > .sc-fzonjX > .sc-pBzUF > #country-lang-selector-continue-button').click()
        cy.visit('https://www.latamairlines.com/us/es')
        cy.get('#country-suggestion > #country-suggestion--dialog__body > .sc-fzonjX > .sc-pLwIe > #country-suggestion-reject-change').click()
      }

      static selectOrigin(origin) {
        cy.get('.sc-qbDfu > .sc-pKJXg > .sc-pCNjN > #txtInputOrigin > #txtInputOrigin_field').click()
        cy.get('.sc-qbDfu > .sc-pKJXg > .sc-pCNjN > #txtInputOrigin > #txtInputOrigin_field').type('Mede')
        cy.get('#listAutoComplete > #lstItem_0 > #btnItemAutoComplete_0 > .sc-pQSDG > .sc-pIwMV:nth-child(3)').click()
      }

      static clickContinueButton() {
        cy.get('#btnContinueCTA').click();
      }
      static selectDestination(destination){
        cy.get('.sc-qbDfu > .sc-pKJXg > .sc-pCNjN > #txtInputDestination > #txtInputDestination_field').type('Bog')
        cy.get('#listAutoComplete > #lstItem_0 > #btnItemAutoComplete_0 > .sc-pQSDG > .sc-pIwMV:nth-child(5)').click()
        cy.get('.sc-pKJXg > .sc-pCNjN > .sc-pkTlu > .sc-psPnT > #departureDate').click()
        cy.get('.CalendarMonthGrid_month__horizontal:nth-child(3) > .CalendarMonth > .CalendarMonth_table > tbody > tr:nth-child(3) > .CalendarDay:nth-child(3)').click()
        cy.get('.CalendarMonthGrid_month__horizontal:nth-child(3) > .CalendarMonth > .CalendarMonth_table > tbody > tr:nth-child(3) > .CalendarDay:nth-child(7)').click()
        cy.get('#inputSection > .sc-qbDfu > .sc-pKJXg > .sc-pCNjN > #btnSearchCTA').click()
        cy.visit('https://www.latamairlines.com/co/es/ofertas-vuelos?origin=MDE&inbound=2024-01-04T17%3A00%3A00.000Z&outbound=2023-12-28T17%3A00%3A00.000Z&destination=BOG&adt=1&chd=1&inf=0&trip=RT&cabin=Economy&redemption=false&sort=RECOMMENDED')
        .wait(5000);
      }
      static selectSearchFlight(){
        cy.get('[data-test="dcad621dd5"] > .cardFlightstyle__WrapperCardShadow-sc__sc-1fa5kbc-0 > .cardFlightstyle__CardExpander-sc__sc-1fa5kbc-2').click();
        cy.get("[data-testid='bundle-detail-3-flight-select']").click();
        cy.wait(3000);
        cy.get('[data-test="e990999847"] > .cardFlightstyle__WrapperCardShadow-sc__sc-1fa5kbc-0').click();
        cy.get('[data-testid="bundle-detail-3-flight-select"]').click();
        cy.wait(10000);
      }

      static selectSeatOrigin(){
        cy.get('[data-testid="button9--button"]').click();
        cy.visit('https://www.latamairlines.com/co/es/seleccion-asientos?id=LA0351546FYHG')
        cy.wait(4000);
        cy.get(':nth-child(3) > :nth-child(3) > .MapSlot__SeatContent-sc-18zijkx-4 > .Seat__ButtonSeat-sc-1xsdv1h-0').click()
        cy.wait(4000);
        cy.get(':nth-child(3) > :nth-child(1) > .MapSlot__SeatContent-sc-18zijkx-4 > .Seat__ButtonSeat-sc-1xsdv1h-0').click()
        cy.wait(4000);
        cy.get('[data-testid="btn-next-flight-button"]').click()
      }
      static selectSeatDestination(){
        cy.wait(4000);
        cy.get(':nth-child(2) > :nth-child(2) > .MapSlot__SeatContent-sc-18zijkx-4 > .Seat__ButtonSeat-sc-1xsdv1h-0').click()
        cy.wait(4000);
        cy.get(':nth-child(3) > :nth-child(3) > .MapSlot__SeatContent-sc-18zijkx-4 > .Seat__ButtonSeat-sc-1xsdv1h-0').click()
        cy.wait(4000);
        cy.get('[data-testid="btn-confirm-and-continue-button"]').click()
      }

      static selectBaggage(){
        cy.wait(4000);
        cy.visit('https://www.latamairlines.com/co/es/tienda?id=LA0351546FYHG')
      }

      static selectEspecialBaggage(){
        cy.wait(4000);
        cy.get('.ListBaggages__ListSectionBaggage-eaweis-0 > .SectionBaggage__SectionBaggageWrapper-rccyl7-4 > .SectionBaggage__ListOffersWrapper-rccyl7-2 > .SpecialBaggage__ListContentSpecial-sc-6nr771-4 > #accordion-special-baggages').click()
        cy.wait(6000);
        cy.visit('https://www.latamairlines.com/co/es/centro-ayuda/preguntas/equipaje/especial');
        cy.get('[data-testid="main-content-sidebar-equipaje-1-level-1-item-equipaje-especial-4-level-2-item-sidebarListItem"]').click()
        cy.wait(2000);
        cy.visit('https://www.latamairlines.com/co/es/tienda?id=LA0351546FYHG');
      }

      static clickContinueButtonP()
      {
        cy.get('#BAGS-content > .MuiAccordionDetails-root > .sc-jXbUNg > #BAGS-continue-button > .MuiButton-label').click()
        cy.get('.Aside__AsideStyle-m8xp39-0 > .Aside__AsideFooter-m8xp39-2 > .CartSection__ContentCart-ylshii-0 > .sc-jXbUNg > #button-cart-confirm').click()
        cy.visit('https://www.latamairlines.com/co/es/pagos/pasajeros?orderId=LA0351546FYHG')
      }

       static passengerG()
      {
        cy.get('[data-testid="passengerDetails-firstName-ADT_1"] > .MuiInputBase-root').type('Testing')
        cy.get('[data-testid="passengerDetails-lastName-ADT_1"] > .MuiInputBase-root').type('Tester')
        cy.get('#passengerInfo-dateOfBirth-ADT_1').click()
        cy.get('[data-testid="documentInfo-documentNumber-ADT_1"] > .MuiInputBase-root').type('1092312312')
        cy.get('[data-testid="passengerInfo-emails-ADT_1"] > .MuiInputBase-root').click()
        cy.get('[data-testid="passengerInfo-phones0-number-ADT_1"] > .MuiInputBase-root').type('1234567809')
        cy.get('[data-testid="passengerFormSubmitButtonADT_1"]').click()
         cy.wait(2000);
      }

       static passengerJ()
      {
        cy.get('[data-testid="accordion-passenger-CHD_1-accordion"]')
        cy.get('[data-testid="passengerDetails-firstName-CHD_1"] > .MuiInputBase-root').type('tester')
        cy.get('[data-testid="passengerDetails-lastName-CHD_1"] > .MuiInputBase-root').type('jr')
        cy.get('#passengerInfo-dateOfBirth-CHD_1').type('12/12/2022')
        cy.get('[data-testid="documentInfo-documentNumber-CHD_1"] > .MuiInputBase-root').type('1231231233')
        cy.get('[data-testid="passengerInfo-emails-CHD_1"] > .MuiInputBase-root')
        cy.get('[data-testid="passengerInfo-phones0-number-CHD_1"] > .MuiInputBase-root')
        cy.get('[data-testid="passengerFormSubmitButtonCHD_1"]').click()
        cy.wait(2000);
        cy.get('[data-testid="undefined-button"]').click()
      }
 }