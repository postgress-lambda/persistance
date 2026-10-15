## Installation

1. In the root of `api-processor`, create `.npmrc`:

```ini
   @rm-ecommerce:registry=https://npm.pkg.github.com
   //npm.pkg.github.com/:_authToken=${NPM_TOKEN}
```

2. Set your GitHub token (classic, with `read:packages`):

```powershell
   # Windows PowerShell
   $env:NPM_TOKEN = "<your-github-token>"
```
```bash
   # macOS / Linux
   export NPM_TOKEN=<your-github-token>
```

3. Install the package:

```bash
   npm install @rm-ecommerce/persistence
```

4. Add the database URL to `.env`:

```env
   DATABASE_URL=""
```

## Usage

The package supports `import` only (ES modules).

```ts
import { prisma } from "@rm-ecommerce/persistence";

// read
const products = await prisma.products.findMany({
  where: { isActive: true },
  include: { mediafile: true },
});

// create
const customer = await prisma.customer.create({
  data: { name: "Aisha", phone: "+971500000000" },
});

// several tables at once: use a transaction
await prisma.$transaction(async (tx) => {
  const order = await tx.order.create({ data: { customerId } });
  await tx.carts.deleteMany({ where: { customerId } });
});
```

Model names in code start with a lowercase letter: `prisma.carts`, `prisma.orderItem`, `prisma.auditLog`.

## Updating

```bash
npm install @rm-ecommerce/persistence
```
