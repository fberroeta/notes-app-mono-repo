describe('Note App', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000');

		cy.request('POST', 'http://localhost:3001/api/testing/reset');

		const user = {
			name: 'Oliuwu',
			username:'oliuwu',
			password: 'pass'
		};

		cy.request('POST', 'http://localhost:3001/api/users', user);
	});

	it('frontpage can be opened and contains the title Note, smoketest', () => {
		
		cy.contains('Notes');
	});

	it('login form can be opened', () => {
		cy.contains('Show Login').click();
	});
	
	it('user can login', () => {
		cy.contains('Show Login').click();
		cy.get('[placeholder="Username"]').type('oliuwu');
		cy.get('[placeholder="Password"]').type('pass');
		cy.get('#form-login-button').click();
		cy.contains('Show create note'); 
		
	});

	it('login fails with wrong password', () => {
		cy.contains('Show Login').click();
		cy.get('[placeholder="Username"]').type('oliuwu');
		cy.get('[placeholder="Password"]').type('wrongpassword');
		cy.get('#form-login-button').click();

		// cy.contains('Wrong credentials');
		cy.get('.error')
			.should('contain', 'Wrong credentials')
			.should('have.css','color','rgb(255, 0, 0)')
			.should('have.css','border-style','solid');
	});
	
	describe('when logged in', () => {
		beforeEach(() => {			
			cy.login({username: 'oliuwu', password:'pass'});
		});

		it('a new note can be created', () => {
			const noteContent = 'a note created by cypress';
			cy.contains(noteContent).should('not.exist');
			cy.contains('Show create note').click(); 
			cy.get('input').type(noteContent);
			cy.contains('save').click();
			cy.contains(noteContent);
		});
		
		describe('and a note exists', () => {
			beforeEach(() => {
				cy.createNote({ 
					content:'This is the first note',
					important: false
				});
				cy.createNote({ 
					content:'This is the second note',
					important: false
				});
				cy.createNote({ 
					content:'This is the third note',
					important: false
				});
				
			});
			it('it can be made important', () => {
				cy.contains('This is the second note').as('theNote');
					
					
				cy.get('@theNote')
					.contains('make important')
					.click();
				
				cy.get('@theNote')
					.contains('make not important');
			});
		});
	});
	
});