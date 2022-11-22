import { browser, element, by } from "protractor";

 //codigo de configuracion
describe("tabs",( ) => {
    beforeEach(() => {
        browser.get("/");

    
    });
    //Prueba1
    it("la pestaña tab one se muestra por defecto", () => {
        expect(element(by.css(".tab-selected ion-label")).getText()).toContain("Tab 1");
    });

});
