// Clase y métodos estáticos para seleccionar el pasajero
class SelectPassenger {
    // Método estático para seleccionar un pasajero de tipo 'G'
    static passengerG() {
        // Prueba para verificar el flujo de selección de pasajeros de tipo 'G'
        cy.get('[data-testid="passengerDetails-firstName-ADT_1"] > .MuiInputBase-root').type('Tester');
        cy.get('[data-testid="passengerDetails-lastName-ADT_1"] > .MuiInputBase-root').type('jr');
        cy.get('#passengerInfo-dateOfBirth-ADT_1').type('12/12/2022');
        cy.get('[data-testid="documentInfo-documentNumber-ADT_1"] > .MuiInputBase-root').type('1231231233');
        //cy.get('[data-testid="passengerInfo-emails-ADT_1"] > .MuiInputBase-root').type('Tester@tester.com');
        cy.get('[data-testid="passengerInfo-phones0-number-ADT_1"] > .MuiInputBase-root').type('1234567809');
        cy.get('[data-testid="passengerFormSubmitButtonADT_1"]').click();
        cy.wait(2000);
    }

    // Método estático para seleccionar un pasajero de tipo 'J'
    static passengerJ() {
        // Prueba para verificar el flujo de selección de pasajeros de tipo 'J'
        cy.get('[data-testid="accordion-passenger-CHD_1"]');
        cy.get('[data-testid="passengerDetails-firstName-CHD_1"] > .MuiInputBase-root').type('Tester');
        cy.get('[data-testid="passengerDetails-lastName-CHD_1"] > .MuiInputBase-root').type('jr');
        cy.get('#passengerInfo-dateOfBirth-CHD_1').type('12/12/2022');
        cy.get('[data-testid="documentInfo-documentNumber-CHD_1"] > .MuiInputBase-root').type('1231231233');
        //cy.get('[data-testid="passengerInfo-emails-CHD_1"] > .MuiInputBase-root').type('Tester@tester.com');
        cy.get('[data-testid="passengerInfo-phones0-number-CHD_1"] > .MuiInputBase-root').type('1234567809');
        cy.get('[data-testid="passengerFormSubmitButtonCHD_1"]').click();
        cy.wait(2000);
        cy.get('[data-testid="undefined-button"]').click();
        cy.wait(4000);
    }
}

export default SelectPassenger;
