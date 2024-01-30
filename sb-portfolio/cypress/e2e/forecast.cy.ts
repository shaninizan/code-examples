describe('forecast example page', () => {
  it('loads', () => {
    cy.visit('localhost:3000/examples/forecast');

    cy.get('title').should('have.text', 'Shani Brown');
    cy.get('h1').should('have.text', 'Shani Brown');
    cy.get('h2').should('have.text', 'Lead Front End Software Engineer');

    cy.get('h3').should('have.text', 'Forecast');
    cy.get('label').contains('City:');
    cy.get('label').contains('Fahrenheit');
    cy.get('label').contains('Celsius');
    cy.get('button').should('have.text', 'Fetch Weather Data');
  });

  context('Displays Weather Data', () => {
    it('after input, default Fahrenheit', () => {
      cy.intercept(
        'GET',
        'https://api.openweathermap.org/geo/1.0/direct?q=tampa&limit=1&appid=be0d99f212222879fd2e71d8aa18ec34',
        {
          response: {
            lat: 27.9478,
            lon: -82.4584,
          },
        }
      ).as('getLatLong');
      cy.intercept(
        'GET',
        'https://api.openweathermap.org/data/3.0/onecall?lat=undefined&lon=undefined&units=imperial&appid=be0d99f212222879fd2e71d8aa18ec34',
        // 'https://api.openweathermap.org/data/3.0/onecall?lat=27.9477595&lon=-82.458444&units=imperial&appid=be0d99f212222879fd2e71d8aa18ec34',
        {
          fixture: 'forecast/fahrenheit',
        }
      ).as('getWeatherData');
      cy.visit('localhost:3000/examples/forecast');

      cy.get('#city').type('tampa');
      cy.get('button').click();
      cy.wait('@getWeatherData').then(() => {
        cy.get('h3').contains('tampa Forecast:');
        cy.get('h4').contains('Expect a day of partly cloudy with rain');
        cy.get('h5').contains('Low');
        cy.get('h5').contains('High');
        cy.get('span').contains('57.15');
        cy.get('span').contains('70.72');
        cy.get('[alt="moderate rain"]').should('have.lengthOf', 2);
        cy.get('[alt="overcast clouds"]').should('have.lengthOf', 3);
      });
    });

    it('in Celsius', () => {
      cy.intercept(
        'GET',
        'https://api.openweathermap.org/geo/1.0/direct?q=tampa&limit=1&appid=be0d99f212222879fd2e71d8aa18ec34',
        {
          response: {
            lat: 27.9478,
            lon: -82.4584,
          },
        }
      ).as('getLatLong');
      cy.intercept(
        'GET',
        'https://api.openweathermap.org/data/3.0/onecall?lat=undefined&lon=undefined&units=metric&appid=be0d99f212222879fd2e71d8aa18ec34',
        // 'https://api.openweathermap.org/data/3.0/onecall?lat=27.9477595&lon=-82.458444&units=metric&appid=be0d99f212222879fd2e71d8aa18ec34',
        {
          fixture: 'forecast/celsius',
        }
      ).as('getWeatherData');
      cy.visit('localhost:3000/examples/forecast');

      cy.get('#city').type('tampa');
      cy.get('label').contains('Celsius').click();
      cy.get('button').click();
      cy.wait('@getWeatherData').then(() => {
        cy.get('h3').contains('tampa Forecast:');
        cy.get('h4').contains('Expect a day of partly cloudy with rain');
        cy.get('h5').contains('Low');
        cy.get('h5').contains('High');
        cy.get('span').contains('13.84');
        cy.get('span').contains('21.54');
        cy.get('[alt="moderate rain"]').should('have.lengthOf', 2);
        cy.get('[alt="overcast clouds"]').should('have.lengthOf', 3);
      });
    });
  });
});
