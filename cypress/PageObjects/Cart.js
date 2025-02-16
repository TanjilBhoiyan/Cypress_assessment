import CartLocators from "../Locators/CartLocators";

class Checkout{
    constructor(){
        this.locators = CartLocators;
    }
    cart(){
        return cy.get(this.locators.cart);
    }
    proceedtocheckout(){
        return cy.get(this.locators.proceedtocheckout);
    }
    placeorder(){
        return cy.get(this.locators.placeorder);
    }
    nameoncard(){
        return cy.get(this.locators.nameoncard);
    }
    cardnumber(){
        return cy.get(this.locators.cardnumber);
    }
    cvc(){
        return cy.get(this.locators.cvc);
    }
    ExpirationMM(){
        return cy.get(this.locators.ExpirationMM);
    }
    ExpirationYY(){
        return cy.get(this.locators.ExpirationYY);
    }
    confirmorder(){
        return cy.get(this.locators.Confirmorder);
    }
}
export default Checkout;