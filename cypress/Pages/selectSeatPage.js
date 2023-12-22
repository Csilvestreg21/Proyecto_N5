// Clase y métodos estáticos para seleccionar el asiento y manejar el equipaje
class SelectSeat {
    // Método estático para seleccionar el asiento de origen
    static selectSeatOrigin() {
        // Prueba para verificar el flujo de selección del asiento de origen
        cy.get('[data-testid="button9--button"]').click();
        cy.visit('https://www.latamairlines.com/co/es/seleccion-asientos?id=LA0351733LHZH');
        cy.wait(4000);
        cy.get(':nth-child(3) > :nth-child(3) > .MapSlot__SeatContent-sc-18zijkx-4 > .Seat__ButtonSeat-sc-1xsdv1h-0').click();
        cy.wait(4000);
        cy.get(':nth-child(3) > :nth-child(1) > .MapSlot__SeatContent-sc-18zijkx-4 > .Seat__ButtonSeat-sc-1xsdv1h-0').click();
        cy.wait(4000);
        cy.get('[data-testid="btn-next-flight-button"]').click();
    }

    // Método estático para seleccionar el asiento de destino
    static selectSeatDestination() {
        // Prueba para verificar el flujo de selección del asiento de destino
        cy.wait(4000);
        cy.get(':nth-child(3) > :nth-child(3) > .MapSlot__SeatContent-sc-18zijkx-4 > .Seat__ButtonSeat-sc-1xsdv1h-0').click();
        cy.wait(4000);
        cy.get(':nth-child(3) > :nth-child(3) > .MapSlot__SeatContent-sc-18zijkx-4 > .Seat__ButtonSeat-sc-1xsdv1h-0').click();
        cy.wait(4000);
        cy.get('[data-testid="btn-confirm-and-continue-button"]').click();
    }

    // Método estático para seleccionar el manejo del equipaje
    static selectBaggage() {
        // Prueba para verificar el manejo del equipaje
        cy.wait(6000);
        cy.visit('https://www.latamairlines.com/co/es/tienda?id=LA0351733LHZH');
    }

    // Método estático para seleccionar el equipaje especial
    static selectEspecialBaggage() {
        // Prueba para verificar la selección de equipaje especial
        //cy.wait(4000);
        //cy.get('.ListBaggages__ListSectionBaggage-eaweis-0 > .SectionBaggage__SectionBaggageWrapper-rccyl7-4 > .SectionBaggage__ListOffersWrapper-rccyl7-2 > .SpecialBaggage__ListContentSpecial-sc-6nr771-4 > #accordion-special-baggages').click();
        cy.wait(6000);
        cy.visit('https://www.latamairlines.com/co/es/centro-ayuda/preguntas/equipaje/especial');
        cy.get('[data-testid="main-content-sidebar-equipaje-1-level-1-item-equipaje-especial-4-level-2-item-sidebarListItem"]').click();
        cy.wait(2000);
        cy.visit('https://www.latamairlines.com/co/es/tienda?id=LA0351733LHZH');
    }

    // Método estático para hacer clic en el botón de continuar
    static clickContinueButtonP() {
        // Prueba para verificar el flujo de clic en el botón de continuar
        cy.get('#BAGS-content > .MuiAccordionDetails-root > .sc-jXbUNg > #BAGS-continue-button > .MuiButton-label').click();
        cy.get('.Aside__AsideStyle-m8xp39-0 > .Aside__AsideFooter-m8xp39-2 > .CartSection__ContentCart-ylshii-0 > .sc-jXbUNg > #button-cart-confirm').click();
        cy.visit('https://www.latamairlines.com/co/es/pagos/pasajeros?orderId=LA0351733LHZH');
    }
}

export default SelectSeat;
