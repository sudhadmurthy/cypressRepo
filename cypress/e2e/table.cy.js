import table from "../pageobjects/table"


describe ('test table values',()=>{
    let Table = new table();

    beforeEach ('Load the table',()=>{
        cy.visit('https://automatenow.io/sandbox-automation-testing-practice-website/tables/')

    })

    it('get the all the rows',()=>{

    // method 1
    cy.get(' #tablepress-1 > tbody > tr').then ((row)=> {
    cy.log(row.length)
    })
    //method2 
    cy.get(' #tablepress-1').find('tr').then ((row)=> {
    cy.log(row.length)
    })
    })


    it('get the lastrow',()=>{

    //method 1
        cy.get(' #tablepress-1').find('tr').last().invoke('text').as('data').
        then((data)=> {
            cy.log(data);
        })

    //method 2
    cy.get(' #tablepress-1').find('tr').last().then((e1)=>{
        const id = e1.text();
        cy.log(id);
    })

    })
    it('get the fristrow',()=>{

         //method 1
         cy.get(' #tablepress-1').find('tr').first().invoke('text').as('data').
         then((data)=> {
             cy.log(data);
         })
 
     //method 2
     cy.get(' #tablepress-1').find('tr').first().then((e1)=>{
         const id = e1.text();
         cy.log(id);
     })

    })

    it.only('To check specific value is present in a row',()=>{

        Table.getRowValue('United States','331');

    })
})