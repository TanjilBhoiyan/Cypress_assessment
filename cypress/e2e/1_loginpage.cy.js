import Login from "../PageObjects/VisitLoginPage";

describe('Visit Login Page',()=>{
    it('Login Page:',()=>{
        const login = new Login();
        login.visitloginpage();
    })
})
