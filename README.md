# SmartPRD

This project is a Next.js application that renders the SmartPRD workspace experience.

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or later (Next.js requirement)
- npm (bundled with Node.js) or another compatible package manager such as pnpm or yarn

## Installation

After cloning or downloading the repository, change into the project directory (where `package.json` lives):

```bash
cd SmartPRD
```

Then install the dependencies:

```bash
npm install
```

> **Note:** In restricted environments (such as the execution sandbox used for automated assessment) the npm registry may be inaccessible, resulting in a `403 Forbidden` error. Run the command locally where you have registry access if you encounter this issue.

## Development server

Start the local development server with hot reloading:

```bash
npm run dev
```

Then open your browser to [http://localhost:3000](http://localhost:3000) to view the SmartPRD interface.

## Building for production

To create an optimized production build:

```bash
npm run build
```

You can preview the production build locally using:

```bash
npm run start
```

This will start the server on port 3000 by default.
