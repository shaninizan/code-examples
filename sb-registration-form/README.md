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


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
