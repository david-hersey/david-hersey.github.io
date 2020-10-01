const terminalLog = (violations) => {
    cy.task(
      'log',
      `${violations.length} accessibility violation${
        violations.length === 1 ? '' : 's'
      } ${violations.length === 1 ? 'was' : 'were'} detected`
    )
    // pluck specific keys to keep the table readable
    const violationData = violations.map(
      ({ id, impact, description, nodes }) => ({
        id,
        impact,
        description,
        nodes: nodes.length
      })
    )
   
    cy.task('table', violationData)
}

const routes = ['contact', 'test-three'];

describe('Form Field accessibility test', () => {
  routes.forEach((route) => {
    const componentName = route;
    const testName = `${componentName} has no detectable accessibility violations on load`;

    it(testName, () => {
      cy.visit(route);
      cy.request({
        url: route,
        failOnStatusCode: false
      });
      cy.injectAxe();
      
      cy.get('.field').each((element, index) => {
        cy.checkA11y(
          '.field',
          {
            runOnly: {
              type: 'tag',
              values: ['wcag2a'],
            },
          },
          terminalLog,
        );
      });
    });
  });
});