# AGENTS

## Node.js and NPM
- Install Node.js version specified in [.nvmrc](.nvmrc) using `nvm use`.
- Enable [corepack](https://nodejs.org/api/corepack.html) with `corepack enable` to ensure package manager shims are available.

## Linting & Formatting
- Run `npm run lint` to check code quality.
- Run `npm run lint:fix` to automatically fix lint issues.
- Format files with [Prettier](.prettierrc.js), e.g. `npx prettier --write <files>`.
- ESLint rules live in [.eslintrc](.eslintrc) and `frontend/.eslintrc`.

## Tests
- Tests require a MongoDB instance. The suite uses `mongodb-memory-server` and will download binaries automatically.
- To skip MongoDB binary downloads (e.g. offline), set `MONGOMS_DISABLE_POSTINSTALL=1` before installing dependencies or running tests.
- Run all tests with `npm test`.
- Run a subset with `npm test src/app/modules/webhook/__tests__/webhook.service.spec.ts` (replace path with your target spec) to speed up development.

## Commit Messages
- Follow [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `docs:`, etc.).

## PR Tips
- In pull request descriptions, cite file paths and line numbers like `F:path/to/file.js†L10-L20`.

