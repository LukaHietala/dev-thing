# Unnamed project

An open source application for asking questions related to technology and programming, and creating a community of people who are interested in technology and programming. This is just a side project of mine, so I don't know how far this will go, but I will try to make it as good as I can on my spare time.

### Prerequisites

```shell
node: "^>=18.16.0"
pnpm: "^8.3.1"
```

### Installation and running

Install the dependencies and run the project with pnpm.

```shell
pnpm install
```

Copy `.env.example` to `.env` and update the variables accordingly.

```shell
cp .env.example .env
```

Run the project in development mode.

```shell
pnpm dev
```

### Notes for development:

This notes section will be temporary, and will be removed once the project has proper documentation.

- All common ui elements are in `src/components/ui`, to add new ui elements, check https://ui.shadcn.com/docs/components/ for the list of available components. If what you want to add is not available, you can create a new component in `src/components/ui`
-
