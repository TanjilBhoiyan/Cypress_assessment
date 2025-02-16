import SignUpPage from "../PageObjects/SignUpProcess";
import ProductCategory from "../PageObjects/ProductCategory";
import Updateproduct from "../PageObjects/UpdateProduct";

const signup = new SignUpPage;
const productcategory= new ProductCategory;
const updateproduct = new Updateproduct;


describe('Task 4 : Update Product',()=>{
    beforeEach('should visit home page and login',()=>{
        signup.visit();
        productcategory.login();
    })
    it('Navigating  to the Men category and Select Jeans',()=>{
        updateproduct.viewproduct1().click();
        updateproduct.quantity().clear().type('2');
        updateproduct.addtocart().click();
    })
})