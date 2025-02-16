import SignUpPage from "../PageObjects/SignUpProcess";

const signup = new SignUpPage();

describe('New user sign_Up',()=>{
    beforeEach('should visit home page',()=>{
        signup.visit();
    })
    it.skip('Check new user text should showing',()=>{
        cy.get('.signup-form > h2')
            .eq(0).should('have.text', 'New User Signup!');;
    })
    it.only('Writting the name in name field',()=>{
        cy.fixture("example").then((data)=>{
            signup.name().type(data.name);
            signup.email().type(data.email);
            signup.signupButton().click();
            signup.title().click();
            signup.password().type(data.password);
            signup.dateofbirth().select('5');
            signup.dateofbirthm().select('3');
            signup.dateofbirthy().select('1999');
            signup.cehckbox1().click();
            signup.checkbox2().click();
            signup.firstname().type(data.firstname);
            signup.lastname().type(data.lastname);
            signup.company().type(data.company);
            signup.address().type(data.address1);
            signup.address2().type(data.address2);
            signup.country().select(data.country);
            signup.state().type(data.state);
            signup.city().type(data.state);
            signup.zipcode().type(data.zipcode);
            signup.mobilenumber().type(data.mobilenumber);
            signup.createaccountbutton().click();
            signup.continue().click(); 
        })
    })
})
