import SignUpPage from "../PageObjects/SignUpProcess";
import ProductCategory from "../PageObjects/ProductCategory";
import Contactus from "../PageObjects/ContactUs";
import 'cypress-file-upload'

const signup = new SignUpPage;
const productcategory= new ProductCategory;
const contactus = new Contactus;

describe('Task 6: Contact Us Form Submission',()=>{
    beforeEach('should visit home page and login',()=>{
        signup.visit();
        productcategory.login();
    })
    it('Submitting details for Form Submission',()=>{
        cy.fixture("example").then((data)=>{
            contactus.Contact().click();
            contactus.contactname().type(data.name);
            contactus.contactemail().type(data.email);
            contactus.contactsubject().type(data.contactsubject);
            contactus.contactmessage().type(data.contactmessage);
            //contactus.choosefile().selectFile('fixtures/images.png');
            contactus.choosefile().attachFile('images.png');
            contactus.submitbutton().click();
            contactus.successmessage().should('have.text','Success! Your details have been submitted successfully.')
                                      .should('be.visible');
        })
    })
})