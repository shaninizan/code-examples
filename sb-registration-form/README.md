This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Install node modules:

```bash
npm i
```

Run the development server:

```bash
npm run dev
```

Navigate to [http://localhost:3000](http://localhost:3000) to interact with the registration form.

Run tests:

```bash
npm run cypress
```

Both e2e and component tests are available.
_Note: the dev server must be running in order for tests to run._
From Cypress Dashboard:

- Select `E2E Testing`
- Choose `Chrome` Browser and click `Start E2E Testing in Chrome`
- This will open a Chrome Browser

In the Chrome Browser, select `Specs` from the left column if it's not already selected.
Click `registration.cy.ts` to run the e2e test.

From the Cypress Dashboard:

- Select `Switch testing type` (it's under the browsers and start testing button)
- Select `Component Teting`
- Choose `Chrome` Browser and click `Start Component Testing in Chrome`
- This will open a Chrome Browser

In the Chrome Browser, select `Specs` from the left column if it's not already selected.
Click each of the tests to run them.
_Note: Label tests are run through `<Input>` component_

To exit Cypress, control-C in your terminal and it will close both the browser and Dashboard.