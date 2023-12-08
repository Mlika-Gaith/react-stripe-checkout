# Stripe Checkout Demo

This is a simple product checkout demo that utilizes Stripe for payment processing. The backend server is hosted on [aircode.io](https://aircode.io).

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/stripe-checkout-demo.git
   cd stripe-checkout-demo
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory with the following content:

   ```env
   VITE_STRIPE_PK==your_stripe_secret_key

   ```

4. Run the application:

   ```bash
   npm run dev
   ```

## Notes

- Ensure you are using your test Stripe API keys during development.
- Do not use real card information in the demo.
