import loginPage from "../pageobjects/login"

// login to herokuapp
describe('login to herokuapp',()=>{
    let LoginPage = new loginPage();
    let data;
    const expectedloadtimeinsec = 4

before('run before',()=>
    {
        let start=0;
        cy.then(()=>{
            start= (performance.now())/1000;
            cy.log("start"+start);
        })
    cy.visit('https://the-internet.herokuapp.com/login').then(()=>{
        cy.log(`page load time: ${((performance.now())/1000) - start} seconds`);       
        const pageloadtime = ((performance.now())/1000) - start
        expect(pageloadtime).to.be.below(expectedloadtimeinsec)

    });    


    cy.fixture('example').then( (fdata) => {
    data = fdata})
    }
)

    it('Login test',()=>{

      
        //visit the url
        LoginPage.getEmail().type(data.userId);
        LoginPage.getPassword().type(data.password);
        LoginPage.Loginbutton().click();

        }
    )

})