# Express Starter with TypeScript

A production-ready Express.js starter template with TypeScript, featuring:
- Modern project structure
- Type safety
- Pre-configured ESLint & Prettier
- Docker support
- Utility classes for API responses and error handling

## Project Structure

```
.eslintrc
.gitignore
.prettierrc.json
.vscode/
├── extensions.json
└── settings.json
Dockerfile
README.md
app.ts
controllers/
└── hello.controller.ts
docker-compose.yaml
index.ts
lib/
└── constants.ts
middlewares/
└── auth.middleware.ts
models/
package.json
pnpm-lock.yaml
routes/
└── hello.route.ts
tsconfig.json
utils/
├── ApiError.ts
├── ApiResponse.ts
├── asyncHandler.ts
└── index.ts
```

## Key Features

### Configuration
- <mcfile name="tsconfig.json" path="./tsconfig.json"></mcfile>: TypeScript configuration
- <mcfile name=".eslintrc" path="./.eslintrc"></mcfile>: ESLint rules
- <mcfile name=".prettierrc.json" path="./.prettierrc.json"></mcfile>: Code formatting rules

### Core Components
- <mcfile name="app.ts" path="./app.ts"></mcfile>: Express app setup
- <mcfile name="index.ts" path="./index.ts"></mcfile>: Server entry point

### Utilities
- <mcfile name="ApiError.ts" path="./utils/ApiError.ts"></mcfile>: Standardized error handling
- <mcfile name="ApiResponse.ts" path="./utils/ApiResponse.ts"></mcfile>: Consistent API responses
- <mcfile name="asyncHandler.ts" path="./utils/asyncHandler.ts"></mcfile>: Async/await middleware

## Getting Started

1. Install dependencies:
```bash
pnpm install
```

2. Start development server:
```bash
pnpm dev
```

3. Build for production:
```bash
pnpm build
pnpm start
```

## Docker Support

Build and run with Docker:
```bash
docker compose up --build
```

## License
MIT License