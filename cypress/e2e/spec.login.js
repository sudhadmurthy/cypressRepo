import loginPage from "../pageobjects/login"
// login to herokuapp
describe('login to herokuapp',()=>{
    let LoginPage = new loginPage();
    it('Login test',()=>{
        //visit the url
        LoginPage.getEmail();
        LoginPage.getPassword();
        LoginPage.Loginbutton().click();

        }
    )

})