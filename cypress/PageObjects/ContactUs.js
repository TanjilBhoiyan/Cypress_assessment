import ContactUsLocators from "../Locators/ContactUsLocators";

class Contactus{
    constructor(){
        this.locators = ContactUsLocators;
    }
    Contact(){
        return cy.get(this.locators.contact);
    }
    contactname(){
        return cy.get(this.locators.contactname);
    }
    contactemail(){
        return cy.get(this.locators.contactemail);
    }
    contactsubject(){
        return cy.get(this.locators.contactsubject);
    }
    contactmessage(){
        return cy.get(this.locators.contactmessage);
    }
    choosefile(){
        return cy.get(this.locators.choosefile);
    }
    submitbutton(){
        return cy.get(this.locators.submitbutton);
    }
    successmessage(){
        return cy.get(this.locators.successmessage);
    }
}
export default Contactus;
