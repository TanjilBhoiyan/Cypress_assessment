import UpdateProductLocators from "../Locators/UpdateProductLocators";

class Updateproduct{
    constructor(){
        this.locators = UpdateProductLocators;
    }
    viewproduct1(){
        return cy.get(this.locators.Viewproduct);
    }
    quantity(){
        return cy.get(this.locators.Quantity);
    }
    addtocart(){
        return cy.get(this.locators.Addtocart);
    }
};
export default Updateproduct;