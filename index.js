export default function Home() { return <div>Home</div> }

.env.local template for RideauxRhythmCo

Shopify settings

SHOPIFY_STORE_DOMAIN=your-shop-name.myshopify.com SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_storefront_token

Stripe settings

STRIPE_SECRET_KEY=your_stripe_secret STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret NEXT_PUBLIC_BASE_URL=http://localhost:3000  # Change to Vercel URL in production

SendGrid settings

SENDGRID_API_KEY=your_sendgrid_api_key SENDGRID_FROM_EMAIL=your_email@example.com

MongoDB for orders

MONGODB_URI=your_mongodb_uri

Admin login (NextAuth)

ADMIN_USER=admin ADMIN_PASS=yourpassword

