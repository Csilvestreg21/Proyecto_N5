// Clase y método estático para realizar el pago
class SelectPayment {
    static methodPayment() {
        // Prueba para verificar el flujo completo de reserva de viaje en Latam

        // Espera 10 segundos
        cy.wait(10000);

        // Realiza el proceso de pago
        cy.get('[data-testid="new-credit-card-payment-method-radio-accordion-item--radio__label"]').click();
        cy.get('[data-testid="cardNumber--text-field__wrapper"]').type('36230000000019');
        cy.get('[data-testid="cardHolder--text-field__wrapper"]').type('Camila santos');
        cy.get('[data-testid="expirationDate--text-field__wrapper"]').type(12/28);
        cy.get('[data-testid="CVV--password__input--text-field__wrapper"]').type('083');
        cy.get('[data-testid="owner_owner_email--text-field__wrapper"]').type('test@test.com');
        cy.get('[data-testid="checkbox-id--checkbox-styled"]').click();
        cy.get('[data-testid="paymentCTA--button"]').click();

        // Espera 5 segundos después de realizar el pago
        cy.wait(5000);
    }
}

export default SelectPayment;
