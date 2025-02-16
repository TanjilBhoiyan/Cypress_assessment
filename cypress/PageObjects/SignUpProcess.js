import SignupLocators from "../Locators/SignupLocators";

class SignUpPage
{
    constructor() {
        this.locators = SignupLocators;
    }
    visit()
    {
        cy.visit('https://automationexercise.com/login');
    }
    
    newUser() {
        cy.get(this.locators.newuser);
    }
    name(){
        return cy.get(this.locators.name);
    }
    email(){
        return cy.get(this.locators.emailaddress);
    }
    signupButton(){
        return cy.get(this.locators.signupbutton);
    }
    title(){
        return cy.get(this.locators.Title);
    }
    password(){
        return cy.get(this.locators.Password);
    }
    dateofbirth(){
        return cy.get(this.locators.Dateofbirth);
    }
    dateofbirthm(){
        return cy.get(this.locators.Dateofbirthm);
    }
    dateofbirthy(){
        return cy.get(this.locators.Dateofbirthy);
    }
    cehckbox1(){
        return cy.get(this.locators.Checkbox1);
    }
    checkbox2(){
        return cy.get(this.locators.Checkbox2);
    }
    firstname(){
        return cy.get(this.locators.Firstname);
    }
    lastname(){
        return cy.get(this.locators.Lastname);
    }
    company(){
        return cy.get(this.locators.company);
    }
    address(){
        return cy.get(this.locators.Address);
    }
    address2(){
        return cy.get(this.locators.Address2);
    }
    country(){
        return cy.get(this.locators.Country)
    }
    state(){
        return cy.get(this.locators.State);
    }
    city(){
        return cy.get(this.locators.city);
    }
    zipcode(){
        return cy.get(this.locators.Zipcode);
    }
    mobilenumber(){
        return cy.get(this.locators.Mobilenumber);
    }
    createaccountbutton(){
        return cy.get(this.locators.Createaccountbutton);
    }
    continue(){
        return cy.get(this.locators.Continue);
    }
}
export default SignUpPage;