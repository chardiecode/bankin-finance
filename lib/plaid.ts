import { Configuration, PlaidApi, PlaidEnvironments } from "plaid";

const confiuration = new Configuration({
  basePath: PlaidEnvironments.sandBox,
  baseOptions: {
    "PLAID-CLIENT-ID": process.env.PLAID_CLIENT_ID,
    "PLAID-SECRET": process.env.PLAID_SECRET,
  },
});

export const plaidClient = new PlaidApi(confiuration);
