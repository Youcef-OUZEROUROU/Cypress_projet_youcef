

describe('Test de la quête number two', () => {
    beforeEach(() =>{
        cy.visit("https://www.backmarket.fr/register")
        cy.wait(2000)
    })
    it('Testé le login ok',()=>{
       cy.get('#email-signin', {timeout: 1000}).type('youcef@yopmail.com')
       cy.get('#password-signin', {timeout: 1000}).type('Youcef87@')
        cy.get('[data-test=submit-button-login]').click()
        cy.url().should('contain', '/dashboard/orders')
        
    } )
    it('Testé le login with login  empty',()=>{
        cy.get('#email-signin').type('jj').clear()
        cy.get('._3EiijXdZYR7s-feQq8KOZl').click()  
        cy.get('[data-test=list] > [data-test=list-item]').should('contain','Le champ "Email" est obligatoire')
        
    } )
    it('Testé le login with  password empty',()=>{
        cy.get('#email-signin').type('youyou@yopmail.com')
        cy.get('[data-test=password-wrapper] > [data-test=password-input] > [data-test=input-field-input-wrapper] > [data-test=input-field-input]').type('kkkk').clear()
        cy.get('._3EiijXdZYR7s-feQq8KOZl').click()   
        cy.get('[data-test=form-group-errors] > [data-test=list-item]',{timeout: 1000}).should('contain','Merci de saisir un mot de passe valide.')
    } )
    it('Testé le login with fail password',()=>{
        cy.get('#email-signin', {timeout: 1000}).type('youcef@yopmail.com')
        cy.get('#password-signin', {timeout: 1000}).type('Youcef')
        cy.get('[data-test=submit-button-login]').click()
        cy.get('[data-test=login-credential-error]').should('contain','Mauvaise combinaison email/mot de passe')
    } )
    it('Testé le login with fail email',()=>{
        cy.get('#email-signin', {timeout: 1000}).type('you@yopmail.com')
        cy.get('#password-signin', {timeout: 1000}).type('Youcef87@')
        cy.get('[data-test=submit-button-login]').click()
        cy.get('[data-test=login-credential-error]').should('contain','Mauvaise combinaison email/mot de passe')
    } )
    after(()=>{
        cy.log("Bravo vous avez fait votre quête number two")

    })
})//email: youcef@yopmail.com
 //mp : Youcef87@