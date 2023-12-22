// Clase y método estático para la página de inicio
class HomePage {
  // Método estático para visitar la página de inicio de Latam
  static visitHomePage() {
    // Establecer el tamaño de la ventana antes de visitar la página para simular un tamaño de pantalla específico
    cy.viewport(1356, 678);
    // Se utiliza "Accept-Encoding" para indicar al servidor cómo debe comprimir la respuesta
    cy.visit('https://www.latamairlines.com/co/es', {
      headers: {
        "Accept-Encoding": "gzip, deflate, br"
      }
    });
  }
}

export default HomePage;
