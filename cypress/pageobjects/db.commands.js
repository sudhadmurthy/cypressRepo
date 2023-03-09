import dayjs from 'dayjs'

         Cypress.Commands.add('sqlServerDB', (query) => {
            let env = cy.envConfig.env();

            if (!query) {
                throw new Error('Query must be set');
            }
        
            cy.task('piesdb', {sql: query, piesenv: env }).then(response => {
                let result = [];
        
                const flatten = r => Array.isArray(r) && r.length === 1 ? flatten(r[0]) : r;
        
                if (response) {
                    for (let i in response) {
                        result[i] = [];
                        for (let c in response[i]) {
                            result[i][c] = response[i][c].value;
                        }
                    }
                    result = flatten(result);
                } else {
                    result = response;
                }

                return result;
            });
       
        });


        Cypress.Commands.add('getdiff', (query1,query2) => {
            cy.sqlServerDB(query1).then(result => {
                var eventhubarticledatetime = result
                if (eventhubarticledatetime != null) {
                    const eventhubarticledate = dayjs(eventhubarticledatetime)
                    cy.sqlServerDB(query2).then(result => {
                        const curretdatetime = dayjs(result)
                        const diff = curretdatetime.diff(eventhubarticledate, 'minutes')
                        cy.log(diff)
                        expect(diff).to.be.lessThan(30)
                    });
                }
                else {
                    expect(eventhubarticledatetime).to.be.equal(null)

                }

        })
    })

    


    