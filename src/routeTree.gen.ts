/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as TapToCountIndexImport } from './routes/tap-to-count/index'
import { Route as FindAndTapUppercaseImport } from './routes/find-and-tap/uppercase'
import { Route as FindAndTapNumbersImport } from './routes/find-and-tap/numbers'
import { Route as FindAndTapLowercaseImport } from './routes/find-and-tap/lowercase'
import { Route as FindAndTapFruitsImport } from './routes/find-and-tap/fruits'
import { Route as FindAndTapAnimalsImport } from './routes/find-and-tap/animals'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const TapToCountIndexRoute = TapToCountIndexImport.update({
  path: '/tap-to-count/',
  getParentRoute: () => rootRoute,
} as any)

const FindAndTapUppercaseRoute = FindAndTapUppercaseImport.update({
  path: '/find-and-tap/uppercase',
  getParentRoute: () => rootRoute,
} as any)

const FindAndTapNumbersRoute = FindAndTapNumbersImport.update({
  path: '/find-and-tap/numbers',
  getParentRoute: () => rootRoute,
} as any)

const FindAndTapLowercaseRoute = FindAndTapLowercaseImport.update({
  path: '/find-and-tap/lowercase',
  getParentRoute: () => rootRoute,
} as any)

const FindAndTapFruitsRoute = FindAndTapFruitsImport.update({
  path: '/find-and-tap/fruits',
  getParentRoute: () => rootRoute,
} as any)

const FindAndTapAnimalsRoute = FindAndTapAnimalsImport.update({
  path: '/find-and-tap/animals',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/find-and-tap/animals': {
      id: '/find-and-tap/animals'
      path: '/find-and-tap/animals'
      fullPath: '/find-and-tap/animals'
      preLoaderRoute: typeof FindAndTapAnimalsImport
      parentRoute: typeof rootRoute
    }
    '/find-and-tap/fruits': {
      id: '/find-and-tap/fruits'
      path: '/find-and-tap/fruits'
      fullPath: '/find-and-tap/fruits'
      preLoaderRoute: typeof FindAndTapFruitsImport
      parentRoute: typeof rootRoute
    }
    '/find-and-tap/lowercase': {
      id: '/find-and-tap/lowercase'
      path: '/find-and-tap/lowercase'
      fullPath: '/find-and-tap/lowercase'
      preLoaderRoute: typeof FindAndTapLowercaseImport
      parentRoute: typeof rootRoute
    }
    '/find-and-tap/numbers': {
      id: '/find-and-tap/numbers'
      path: '/find-and-tap/numbers'
      fullPath: '/find-and-tap/numbers'
      preLoaderRoute: typeof FindAndTapNumbersImport
      parentRoute: typeof rootRoute
    }
    '/find-and-tap/uppercase': {
      id: '/find-and-tap/uppercase'
      path: '/find-and-tap/uppercase'
      fullPath: '/find-and-tap/uppercase'
      preLoaderRoute: typeof FindAndTapUppercaseImport
      parentRoute: typeof rootRoute
    }
    '/tap-to-count/': {
      id: '/tap-to-count/'
      path: '/tap-to-count'
      fullPath: '/tap-to-count'
      preLoaderRoute: typeof TapToCountIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/find-and-tap/animals': typeof FindAndTapAnimalsRoute
  '/find-and-tap/fruits': typeof FindAndTapFruitsRoute
  '/find-and-tap/lowercase': typeof FindAndTapLowercaseRoute
  '/find-and-tap/numbers': typeof FindAndTapNumbersRoute
  '/find-and-tap/uppercase': typeof FindAndTapUppercaseRoute
  '/tap-to-count': typeof TapToCountIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/find-and-tap/animals': typeof FindAndTapAnimalsRoute
  '/find-and-tap/fruits': typeof FindAndTapFruitsRoute
  '/find-and-tap/lowercase': typeof FindAndTapLowercaseRoute
  '/find-and-tap/numbers': typeof FindAndTapNumbersRoute
  '/find-and-tap/uppercase': typeof FindAndTapUppercaseRoute
  '/tap-to-count': typeof TapToCountIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/find-and-tap/animals': typeof FindAndTapAnimalsRoute
  '/find-and-tap/fruits': typeof FindAndTapFruitsRoute
  '/find-and-tap/lowercase': typeof FindAndTapLowercaseRoute
  '/find-and-tap/numbers': typeof FindAndTapNumbersRoute
  '/find-and-tap/uppercase': typeof FindAndTapUppercaseRoute
  '/tap-to-count/': typeof TapToCountIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/find-and-tap/animals'
    | '/find-and-tap/fruits'
    | '/find-and-tap/lowercase'
    | '/find-and-tap/numbers'
    | '/find-and-tap/uppercase'
    | '/tap-to-count'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/find-and-tap/animals'
    | '/find-and-tap/fruits'
    | '/find-and-tap/lowercase'
    | '/find-and-tap/numbers'
    | '/find-and-tap/uppercase'
    | '/tap-to-count'
  id:
    | '__root__'
    | '/'
    | '/find-and-tap/animals'
    | '/find-and-tap/fruits'
    | '/find-and-tap/lowercase'
    | '/find-and-tap/numbers'
    | '/find-and-tap/uppercase'
    | '/tap-to-count/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  FindAndTapAnimalsRoute: typeof FindAndTapAnimalsRoute
  FindAndTapFruitsRoute: typeof FindAndTapFruitsRoute
  FindAndTapLowercaseRoute: typeof FindAndTapLowercaseRoute
  FindAndTapNumbersRoute: typeof FindAndTapNumbersRoute
  FindAndTapUppercaseRoute: typeof FindAndTapUppercaseRoute
  TapToCountIndexRoute: typeof TapToCountIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  FindAndTapAnimalsRoute: FindAndTapAnimalsRoute,
  FindAndTapFruitsRoute: FindAndTapFruitsRoute,
  FindAndTapLowercaseRoute: FindAndTapLowercaseRoute,
  FindAndTapNumbersRoute: FindAndTapNumbersRoute,
  FindAndTapUppercaseRoute: FindAndTapUppercaseRoute,
  TapToCountIndexRoute: TapToCountIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/find-and-tap/animals",
        "/find-and-tap/fruits",
        "/find-and-tap/lowercase",
        "/find-and-tap/numbers",
        "/find-and-tap/uppercase",
        "/tap-to-count/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/find-and-tap/animals": {
      "filePath": "find-and-tap/animals.tsx"
    },
    "/find-and-tap/fruits": {
      "filePath": "find-and-tap/fruits.tsx"
    },
    "/find-and-tap/lowercase": {
      "filePath": "find-and-tap/lowercase.tsx"
    },
    "/find-and-tap/numbers": {
      "filePath": "find-and-tap/numbers.tsx"
    },
    "/find-and-tap/uppercase": {
      "filePath": "find-and-tap/uppercase.tsx"
    },
    "/tap-to-count/": {
      "filePath": "tap-to-count/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
