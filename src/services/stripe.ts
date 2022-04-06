import Stripe from 'stripe';
import { version } from '../../package.json';

const stripeApiKey = process.env.STRIPE_API_KEY as string;

export const stripe = new Stripe(
  stripeApiKey,
  {
    apiVersion: '2020-08-27',
    appInfo: {
      name: 'ig.news',
      version,
    },
  }
)