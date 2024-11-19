## Getting Started

First, run the development server:

```bash
npm i

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

# Open a .env file and paste this:

DATABASE_URL=postgres://neondb_owner:4wUhdrmk0biy@ep-dark-thunder-a4rj56j6-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require

DATABASE_URL_UNPOOLED=postgresql://neondb_owner:4wUhdrmk0biy@ep-dark-thunder-a4rj56j6.us-east-1.aws.neon.tech/neondb?sslmode=require

PGHOST=ep-dark-thunder-a4rj56j6-pooler.us-east-1.aws.neon.tech
PGHOST_UNPOOLED=ep-dark-thunder-a4rj56j6.us-east-1.aws.neon.tech
PGUSER=neondb_owner
PGDATABASE=neondb
PGPASSWORD=4wUhdrmk0biy

POSTGRES_URL=postgres://neondb_owner:4wUhdrmk0biy@ep-dark-thunder-a4rj56j6-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require
POSTGRES_URL_NON_POOLING=postgresql://neondb_owner:4wUhdrmk0biy@ep-dark-thunder-a4rj56j6.us-east-1.aws.neon.tech/neondb?sslmode=require
POSTGRES_USER=neondb_owner
POSTGRES_HOST=ep-dark-thunder-a4rj56j6.us-east-1.aws.neon.tech
POSTGRES_PASSWORD=4wUhdrmk0biy
POSTGRES_DATABASE=neondb
POSTGRES_URL_NO_SSL=postgres://neondb_owner:4wUhdrmk0biy@ep-dark-thunder-a4rj56j6-pooler.us-east-1.aws.neon.tech/neondb
POSTGRES_PRISMA_URL=postgres://neondb_owner:4wUhdrmk0biy@ep-dark-thunder-a4rj56j6-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&pgbouncer=true&connect_timeout=15
