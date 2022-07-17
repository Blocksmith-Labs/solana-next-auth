import Layout from "../components/layout";

export default function IndexPage() {
  return (
    <Layout>
      <h1>Solana NextAuth.js Example</h1>
      <p>
        This is an example application to demonstrate how to use{" "}
        <a href="https://next-auth.js.org">NextAuth.js</a> with{" "}
        <a href="https://github.com/solana-labs/wallet-adapter">
          Solana Wallet Adapter
        </a>{" "}
        as the sign in option.
      </p>

      <p>
        Bootstrapped with{" "}
        <a href="https://github.com/nextauthjs/next-auth-example">
          next-auth-example
        </a>{" "}
        repository, an adaptation of{" "}
        <a href="https://github.com/spruceid/siwe">siwe</a>.
      </p>

      <div>
        <p>
          <b>Features</b>
        </p>
        <ul>
          <li>Easily configurable with different wallets.</li>
          <li>Built-in in-memory auth state persistance.</li>
          <li>
            User is not required to keep their wallet connected at all times.
          </li>
          <li>Ready to use database user integration.</li>
        </ul>
      </div>

      <p>
        <b>Caveat:</b> Does not support Ledger sign in out of the box, as a
        workaround, you can send a transaction that contains a memo message and
        process that on the backend to support Ledger devices.
      </p>

      <div>
        <p>
          <b>Setup</b>
        </p>
        <ul>
          <li>
            Clone repository:{" "}
            <code>
              git clone https://github.com/BlockSmith-Labs/solana-next-auth
            </code>
          </li>
          <li>
            Install dependencies: <code>yarn install</code>
          </li>
          <li>
            Replace variables on the <code>.env.local.example</code> file and
            rename the file to <code>.env.local</code>
          </li>
          <li>
            Run with <code>yarn dev</code>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
