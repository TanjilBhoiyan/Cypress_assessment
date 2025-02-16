import SignUpPage from "../PageObjects/SignUpProcess";
import ProductCategory from "../PageObjects/ProductCategory";
import Checkout from "../PageObjects/Cart";

const signup = new SignUpPage;
const productcategory= new ProductCategory;
const checkout = new Checkout;

describe('Task 5 : Proceed to Checkout',()=>{
    beforeEach('should visit home page and login',()=>{
        signup.visit();
        productcategory.login();
    })
    it('Go to the cart and Proceed to Checkout',()=>{
        cy.fixture("example").then((data)=>{
            checkout.cart().click();
            checkout.proceedtocheckout().click();
            checkout.placeorder().click();
            checkout.nameoncard().type(data.name);
            checkout.cardnumber().type(data.cardnumber);
            checkout.cvc().type(data.cvc);
            checkout.ExpirationMM().type('2');
            checkout.ExpirationYY().type('2026');
            checkout.confirmorder().click();
        })
    })
})