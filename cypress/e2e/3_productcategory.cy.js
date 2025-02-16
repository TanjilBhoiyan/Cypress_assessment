import SignUpPage from "../PageObjects/SignUpProcess";
import ProductCategory from "../PageObjects/ProductCategory";


const signup = new SignUpPage;
const productcategory= new ProductCategory;
describe('Task 3 : Select Product Category',()=>{
    beforeEach('should visit home page and login',()=>{
        signup.visit();
        productcategory.login();
    })
    it.only('Navigate to the Men category and Select Jeans',()=>{
        productcategory.selectmen().click();
        productcategory.selectjeans().click();
    })
})