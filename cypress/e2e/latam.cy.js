import { HomePage } from '/wlatam.js';

class MainTest {
  static runTest() {
    describe('Template Spec', () => {
      before(() => {
        HomePage.visitHomePage();
      });

      it.only('Test Tesla Link', () => {
        // Paso a paso, utilizando métodos del Page Object
        HomePage.selectOrigin('bog');
        HomePage.clickContinueButton();
        HomePage.selectDestination('mede');

        // Agregar más pasos utilizando métodos del Page Object según sea necesario
      });
    });
  }
}


