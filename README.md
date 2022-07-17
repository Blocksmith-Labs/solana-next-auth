
<p align="center">
   <br/>
   <a href="https://next-auth.js.org" target="_blank"><img width="150px" src="https://i.imgur.com/WSdrE97.png" /></a>
   <h3 align="center">Solana NextAuth.js Example App</h3>

</p>

## Overview

NextAuth.js is a complete open source authentication solution.

This is an example application to demonstrate how to use [`NextAuth.js`](https://next-auth.js.org) with [`Solana Wallet Adapter`](https://github.com/solana-labs/wallet-adapter) as the Solana sign in option.

Bootstrapped with [`next-auth-example`](https://github.com/nextauthjs/next-auth-example) repository, an adaptation of [`siwe`](https://github.com/spruceid/siwe).

The deployed version can be found at [`solana-next-auth.vercel.app`](https://solana-next-auth.vercel.app)



## Getting Started

### 1. Clone the repository and install dependencies

```
git clone https://github.com/Blocksmith-Labs/solana-next-auth.git
cd solana-next-auth
npm install
```

### 2. Configure your local environment

Copy the .env.local.example file in this directory to .env.local (which will be ignored by Git):

```
cp .env.local.example .env.local
```

Add details for one or more providers (e.g. Google, Twitter, GitHub, Email, etc).

#### Database

A database is needed to persist user accounts and to support email sign in. However, you can still use NextAuth.js for authentication without a database by using OAuth for authentication. If you do not specify a database, [JSON Web Tokens](https://jwt.io/introduction) will be enabled by default.

You **can** skip configuring a database and come back to it later if you want.

For more information about setting up a database, please check out the following links:

* Docs: [next-auth.js.org/adapters/overview](https://next-auth.js.org/adapters/overview)

### 3. Configure Authentication Providers

1. Review and update options in `pages/api/auth/[...nextauth].js` as needed.

2. When setting up OAuth, in the developer admin page for each of your OAuth services, you should configure the callback URL to use a callback path of `{server}/api/auth/callback/{provider}`.

  e.g. For Google OAuth you would use: `http://localhost:3000/api/auth/callback/google`

  A list of configured providers and their callback URLs is available from the endpoint `/api/auth/providers`. You can find more information at https://next-auth.js.org/configuration/providers/oauth

3. You can also choose to specify an SMTP server for passwordless sign in via email.

### 4. Start the application

To run your site locally, use:

```
npm run dev
```

To run it in production mode, use:

```
npm run build
npm run start
```

### 5. Preparing for Production

Follow the [Deployment documentation](https://next-auth.js.org/deployment)

## License

ISC

