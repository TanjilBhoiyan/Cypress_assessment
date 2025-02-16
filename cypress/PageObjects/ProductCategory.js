import ProductCategoryLocators from "../Locators/ProductCategoryLocators";

class ProductCategory{
    constructor(){
        this.locators = ProductCategoryLocators;
    }
    emailaddress(){
        return cy.get(this.locators.Emailaddress);
    }
    password(){
        return cy.get(this.locators.Password);
    }
    loginbutton(){
        return cy.get(this.locators.Loginbutton);
    }
    selectmen(){
        return cy.get(this.locators.Selectmen);
    }
    selectjeans(){
        return cy.get(this.locators.SelectJeans);
    }
    login() {
        return cy.fixture("example").then((data) => {
            //cy.log("User Data Loaded:", data);
            this.emailaddress().type(data.email);
            this.password().type(data.password);
            this.loginbutton().click();
        });
    }

}
export default ProductCategory;