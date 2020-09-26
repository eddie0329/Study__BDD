// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add("the", (testSelector) =>
  cy.get(`[data-test-${testSelector}]`)
);
Cypress.Commands.add("clickThe", (testSelector) => {
  cy.get(`[data-test-${testSelector}]`).click();
});
Cypress.Commands.add("clickTheFirst", (testSelector) => {
  cy.get(`[data-test-${testSelector}]`)
    .eq(0)
    .click();
});
Cypress.Commands.add("theFirst", (testSelector) =>
  cy.get(`[data-test-${testSelector}]`).eq(0)
);
Cypress.Commands.add("fillOutThe", (testSelector) =>
  cy.get(`[data-test-${testSelector}]`)
);
Cypress.Commands.add("with", { prevSubject: true }, (form, formData) => {
  cy.wrap(Object.keys(formData)).each((key) => {
    cy.get(form)
      .find(`[name=${key}]`)
      .type(formData[key]);
  });
  cy.get(form).submit();
});
Cypress.Commands.add("getStore", () => {
  return cy.window().its("app.__vue__.$store");
});
Cypress.Commands.add(
  "dispatch",
  { prevSubject: true },
  (store, moduleName, methodToDispatch, ...dispatchArguments) => {
    return store[moduleName].dispatch(methodToDispatch, ...dispatchArguments);
  }
);
Cypress.Commands.add(
  "commit",
  { prevSubject: true },
  (store, moduleName, methodToCommit, ...commitArguments) => {
    return store[moduleName].commit(methodToCommit, ...commitArguments);
  }
);
Cypress.Commands.add(
  "setState",
  { prevSubject: true },
  (store, moduleName, property, value) => {
    store.state[moduleName][property] = value;
    return value;
  }
);
Cypress.Commands.add(
  "getState",
  { prevSubject: true },
  (store, moduleName, property) => {
    return store.state[moduleName][property];
  }
);
