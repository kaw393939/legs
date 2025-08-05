# Commit Message Convention

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification.

## Format

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

## Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **build**: Changes that affect the build system or external dependencies
- **ci**: Changes to our CI configuration files and scripts
- **chore**: Other changes that don't modify src or test files
- **revert**: Reverts a previous commit

## Scope

The scope provides additional contextual information and is contained within parentheses:

- **components**: Changes to component files
- **styles**: Changes to CSS/styling
- **config**: Changes to configuration files
- **deps**: Changes to dependencies

## Examples

```
feat(components): add property search functionality
fix(styles): resolve mobile responsive issues
docs: update deployment instructions
refactor(components): simplify BaseComponent class
test: add unit tests for PropertyCard component
ci: add GitHub Pages deployment workflow
```

## Breaking Changes

Breaking changes should be indicated by:

1. A `!` after the type/scope
2. A footer starting with `BREAKING CHANGE:`

```
feat!: remove deprecated API endpoints

BREAKING CHANGE: The old /api/v1 endpoints have been removed.
Use /api/v2 endpoints instead.
```

## Semantic Versioning

Based on commit types, semantic release will:

- **Major** (x.0.0): Breaking changes (`BREAKING CHANGE` or `!`)
- **Minor** (0.x.0): New features (`feat`)
- **Patch** (0.0.x): Bug fixes, docs, style, refactor, perf, test, build, ci, chore
