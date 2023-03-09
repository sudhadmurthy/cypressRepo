class table {
    

    getallRows()
    {

    }

    getLastrow(){

    }

    getFirstRow(){

    }

    getRowValue(rowName,rowValue){
        cy.get(' #tablepress-1 > tbody > tr').find('td').each((e1,index)=>{
            const text=e1.text();
            if (text.includes(rowName)) {
                cy.get(' #tablepress-1 > tbody > tr').find('td').eq(index).next().invoke('text').then((val) => {
                    expect(val).to.include(rowValue);
            
                  })
            
            }


        }
        
        )

    }

}

export default table;