class homePage {
  static visitHomePage() {
    // Establecer el tamaño de la ventana antes de visitar la página
    cy.viewport(1356, 678);
    // Visitar la página de Latam
    cy.visit('https://www.latamairlines.com/co/es', {
      headers: {
        "Accept-Encoding": "gzip, deflate, br"
      }
    });
  }
}
