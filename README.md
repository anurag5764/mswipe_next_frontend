This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Harish notes 

# Commands to bootstrap a new next app

mkdir bookit   
mv bookit next-js-bookit 
cd next-js-bookit      
npx create-next-app .  
code .  
npm run dev  

# Section 8: Let's start BookIT frontend. 

Setting up _document: https://nextjs.org/docs/advanced-features/custom-document 
Setting up header & footer 
Setting up layout: https://nextjs.org/docs/basic-features/layouts

# Section 9: Data fetching & pre fetching in next.js

getStaticProps: https://nextjs.org/docs/basic-features/data-fetching/get-static-props (Static site generation)
getStaticPaths: https://nextjs.org/docs/basic-features/data-fetching/get-static-paths (Static site generation)

getServerSideProps: https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props (Server-side rendering)

Here we will be using this resource - https://jsonplaceholder.typicode.com/users


# Section 10: Implementing redux for state management. 

npm i redux redux-thunk redux-devtools-extension react-redux next-redux-wrapper --save
npm i axios

https://www.npmjs.com/package/react-toastify
npm i react-toastify

# Section 11: Adding pagination, search on frontend. 

https://www.npmjs.com/package/react-js-pagination
npm i react-js-pagination

# Section 12: Authentication with next-auth

npm i validator

https://next-auth.js.org/
npm i next-auth

Reference for next auth and Strapi integration.
https://next-auth.js.org/
https://strapi.io/blog/user-authentication-in-next-js-with-strapi
https://medium.com/@tom555my/strapi-next-js-email-password-authentication-a8207f72b446



              {/*
              <div className="ml-4 dropdown d-line">
                <a className="btn dropdown-toggle mr-4" id="dropDownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span>{user && user.email}</span>
                </a>

                <div className="dropdown-menu" aria-labelledby="dropDownMenuButton">
                  <Link href="/bookings/me">
                    <a className="dropdown-item">My Bookings</a>
                  </Link>
                  <Link href="/me/update">
                    <a className="dropdown-item">Profile</a>
                  </Link>
                  <Link href="/">
                    <a className="dropdown-item">Logout</a>
                  </Link>
                </div>
              </div>
               */}  


# Section 13: 

Reference for forgot password: 
https://medium.com/@giuliamalaroda/authentication-with-next-js-and-strapi-part-3-forgotten-reset-password-48c7ee1e85d6

How to send email in Strapi:
https://github.com/strapi/strapi/tree/main/packages/providers/email-nodemailer

How to extend the user-permissions plugin to add update/me route: 
https://medium.com/@fabian.froeschl/add-updateme-route-to-strapi-4-0s-users-permissons-plugin-fc31798df295


# Section 14: 

https://reactdatepicker.com/
https://reactdatepicker.com/#example-date-range

npm i react-datepicker


# Section 15: 
Install the stripe cli. The to test the webhooks we run the following command. 

stripe listen --events checkout.session.completed --forward-to localhost:1337/api/bookings/webhook
stripe listen --events checkout.session.completed --forward-to localhost:1337/api/bookings/stripe-webhook --skip-verify

Stripe webhook require raw body, to get that we need to do this setting in the Strapi middleware. 
https://github.com/strapi/strapi/issues/4720#issuecomment-1028953626
