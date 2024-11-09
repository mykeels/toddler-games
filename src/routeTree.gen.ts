/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as TapToCountIndexImport } from './routes/tap-to-count/index'
import { Route as NumberKeypadIndexImport } from './routes/number-keypad/index'
import { Route as MenuIndexImport } from './routes/menu/index'
import { Route as ImageToLetterMatchingIndexImport } from './routes/image-to-letter-matching/index'
import { Route as FreeDrawIndexImport } from './routes/free-draw/index'
import { Route as LetterTracingTriangleImport } from './routes/letter-tracing/triangle'
import { Route as LetterTracingSquareImport } from './routes/letter-tracing/square'
import { Route as LetterTracingDownImport } from './routes/letter-tracing/down'
import { Route as LetterTracingCircleImport } from './routes/letter-tracing/circle'
import { Route as LetterTracingBUpperImport } from './routes/letter-tracing/b-upper'
import { Route as LetterTracingAcrossImport } from './routes/letter-tracing/across'
import { Route as LetterTracingAUpperImport } from './routes/letter-tracing/a-upper'
import { Route as ImageToLetterMatchingLowercaseImport } from './routes/image-to-letter-matching/lowercase'
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

const NumberKeypadIndexRoute = NumberKeypadIndexImport.update({
  path: '/number-keypad/',
  getParentRoute: () => rootRoute,
} as any)

const MenuIndexRoute = MenuIndexImport.update({
  path: '/menu/',
  getParentRoute: () => rootRoute,
} as any)

const ImageToLetterMatchingIndexRoute = ImageToLetterMatchingIndexImport.update(
  {
    path: '/image-to-letter-matching/',
    getParentRoute: () => rootRoute,
  } as any,
)

const FreeDrawIndexRoute = FreeDrawIndexImport.update({
  path: '/free-draw/',
  getParentRoute: () => rootRoute,
} as any)

const LetterTracingTriangleRoute = LetterTracingTriangleImport.update({
  path: '/letter-tracing/triangle',
  getParentRoute: () => rootRoute,
} as any)

const LetterTracingSquareRoute = LetterTracingSquareImport.update({
  path: '/letter-tracing/square',
  getParentRoute: () => rootRoute,
} as any)

const LetterTracingDownRoute = LetterTracingDownImport.update({
  path: '/letter-tracing/down',
  getParentRoute: () => rootRoute,
} as any)

const LetterTracingCircleRoute = LetterTracingCircleImport.update({
  path: '/letter-tracing/circle',
  getParentRoute: () => rootRoute,
} as any)

const LetterTracingBUpperRoute = LetterTracingBUpperImport.update({
  path: '/letter-tracing/b-upper',
  getParentRoute: () => rootRoute,
} as any)

const LetterTracingAcrossRoute = LetterTracingAcrossImport.update({
  path: '/letter-tracing/across',
  getParentRoute: () => rootRoute,
} as any)

const LetterTracingAUpperRoute = LetterTracingAUpperImport.update({
  path: '/letter-tracing/a-upper',
  getParentRoute: () => rootRoute,
} as any)

const ImageToLetterMatchingLowercaseRoute =
  ImageToLetterMatchingLowercaseImport.update({
    path: '/image-to-letter-matching/lowercase',
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
    '/image-to-letter-matching/lowercase': {
      id: '/image-to-letter-matching/lowercase'
      path: '/image-to-letter-matching/lowercase'
      fullPath: '/image-to-letter-matching/lowercase'
      preLoaderRoute: typeof ImageToLetterMatchingLowercaseImport
      parentRoute: typeof rootRoute
    }
    '/letter-tracing/a-upper': {
      id: '/letter-tracing/a-upper'
      path: '/letter-tracing/a-upper'
      fullPath: '/letter-tracing/a-upper'
      preLoaderRoute: typeof LetterTracingAUpperImport
      parentRoute: typeof rootRoute
    }
    '/letter-tracing/across': {
      id: '/letter-tracing/across'
      path: '/letter-tracing/across'
      fullPath: '/letter-tracing/across'
      preLoaderRoute: typeof LetterTracingAcrossImport
      parentRoute: typeof rootRoute
    }
    '/letter-tracing/b-upper': {
      id: '/letter-tracing/b-upper'
      path: '/letter-tracing/b-upper'
      fullPath: '/letter-tracing/b-upper'
      preLoaderRoute: typeof LetterTracingBUpperImport
      parentRoute: typeof rootRoute
    }
    '/letter-tracing/circle': {
      id: '/letter-tracing/circle'
      path: '/letter-tracing/circle'
      fullPath: '/letter-tracing/circle'
      preLoaderRoute: typeof LetterTracingCircleImport
      parentRoute: typeof rootRoute
    }
    '/letter-tracing/down': {
      id: '/letter-tracing/down'
      path: '/letter-tracing/down'
      fullPath: '/letter-tracing/down'
      preLoaderRoute: typeof LetterTracingDownImport
      parentRoute: typeof rootRoute
    }
    '/letter-tracing/square': {
      id: '/letter-tracing/square'
      path: '/letter-tracing/square'
      fullPath: '/letter-tracing/square'
      preLoaderRoute: typeof LetterTracingSquareImport
      parentRoute: typeof rootRoute
    }
    '/letter-tracing/triangle': {
      id: '/letter-tracing/triangle'
      path: '/letter-tracing/triangle'
      fullPath: '/letter-tracing/triangle'
      preLoaderRoute: typeof LetterTracingTriangleImport
      parentRoute: typeof rootRoute
    }
    '/free-draw/': {
      id: '/free-draw/'
      path: '/free-draw'
      fullPath: '/free-draw'
      preLoaderRoute: typeof FreeDrawIndexImport
      parentRoute: typeof rootRoute
    }
    '/image-to-letter-matching/': {
      id: '/image-to-letter-matching/'
      path: '/image-to-letter-matching'
      fullPath: '/image-to-letter-matching'
      preLoaderRoute: typeof ImageToLetterMatchingIndexImport
      parentRoute: typeof rootRoute
    }
    '/menu/': {
      id: '/menu/'
      path: '/menu'
      fullPath: '/menu'
      preLoaderRoute: typeof MenuIndexImport
      parentRoute: typeof rootRoute
    }
    '/number-keypad/': {
      id: '/number-keypad/'
      path: '/number-keypad'
      fullPath: '/number-keypad'
      preLoaderRoute: typeof NumberKeypadIndexImport
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
  '/image-to-letter-matching/lowercase': typeof ImageToLetterMatchingLowercaseRoute
  '/letter-tracing/a-upper': typeof LetterTracingAUpperRoute
  '/letter-tracing/across': typeof LetterTracingAcrossRoute
  '/letter-tracing/b-upper': typeof LetterTracingBUpperRoute
  '/letter-tracing/circle': typeof LetterTracingCircleRoute
  '/letter-tracing/down': typeof LetterTracingDownRoute
  '/letter-tracing/square': typeof LetterTracingSquareRoute
  '/letter-tracing/triangle': typeof LetterTracingTriangleRoute
  '/free-draw': typeof FreeDrawIndexRoute
  '/image-to-letter-matching': typeof ImageToLetterMatchingIndexRoute
  '/menu': typeof MenuIndexRoute
  '/number-keypad': typeof NumberKeypadIndexRoute
  '/tap-to-count': typeof TapToCountIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/find-and-tap/animals': typeof FindAndTapAnimalsRoute
  '/find-and-tap/fruits': typeof FindAndTapFruitsRoute
  '/find-and-tap/lowercase': typeof FindAndTapLowercaseRoute
  '/find-and-tap/numbers': typeof FindAndTapNumbersRoute
  '/find-and-tap/uppercase': typeof FindAndTapUppercaseRoute
  '/image-to-letter-matching/lowercase': typeof ImageToLetterMatchingLowercaseRoute
  '/letter-tracing/a-upper': typeof LetterTracingAUpperRoute
  '/letter-tracing/across': typeof LetterTracingAcrossRoute
  '/letter-tracing/b-upper': typeof LetterTracingBUpperRoute
  '/letter-tracing/circle': typeof LetterTracingCircleRoute
  '/letter-tracing/down': typeof LetterTracingDownRoute
  '/letter-tracing/square': typeof LetterTracingSquareRoute
  '/letter-tracing/triangle': typeof LetterTracingTriangleRoute
  '/free-draw': typeof FreeDrawIndexRoute
  '/image-to-letter-matching': typeof ImageToLetterMatchingIndexRoute
  '/menu': typeof MenuIndexRoute
  '/number-keypad': typeof NumberKeypadIndexRoute
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
  '/image-to-letter-matching/lowercase': typeof ImageToLetterMatchingLowercaseRoute
  '/letter-tracing/a-upper': typeof LetterTracingAUpperRoute
  '/letter-tracing/across': typeof LetterTracingAcrossRoute
  '/letter-tracing/b-upper': typeof LetterTracingBUpperRoute
  '/letter-tracing/circle': typeof LetterTracingCircleRoute
  '/letter-tracing/down': typeof LetterTracingDownRoute
  '/letter-tracing/square': typeof LetterTracingSquareRoute
  '/letter-tracing/triangle': typeof LetterTracingTriangleRoute
  '/free-draw/': typeof FreeDrawIndexRoute
  '/image-to-letter-matching/': typeof ImageToLetterMatchingIndexRoute
  '/menu/': typeof MenuIndexRoute
  '/number-keypad/': typeof NumberKeypadIndexRoute
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
    | '/image-to-letter-matching/lowercase'
    | '/letter-tracing/a-upper'
    | '/letter-tracing/across'
    | '/letter-tracing/b-upper'
    | '/letter-tracing/circle'
    | '/letter-tracing/down'
    | '/letter-tracing/square'
    | '/letter-tracing/triangle'
    | '/free-draw'
    | '/image-to-letter-matching'
    | '/menu'
    | '/number-keypad'
    | '/tap-to-count'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/find-and-tap/animals'
    | '/find-and-tap/fruits'
    | '/find-and-tap/lowercase'
    | '/find-and-tap/numbers'
    | '/find-and-tap/uppercase'
    | '/image-to-letter-matching/lowercase'
    | '/letter-tracing/a-upper'
    | '/letter-tracing/across'
    | '/letter-tracing/b-upper'
    | '/letter-tracing/circle'
    | '/letter-tracing/down'
    | '/letter-tracing/square'
    | '/letter-tracing/triangle'
    | '/free-draw'
    | '/image-to-letter-matching'
    | '/menu'
    | '/number-keypad'
    | '/tap-to-count'
  id:
    | '__root__'
    | '/'
    | '/find-and-tap/animals'
    | '/find-and-tap/fruits'
    | '/find-and-tap/lowercase'
    | '/find-and-tap/numbers'
    | '/find-and-tap/uppercase'
    | '/image-to-letter-matching/lowercase'
    | '/letter-tracing/a-upper'
    | '/letter-tracing/across'
    | '/letter-tracing/b-upper'
    | '/letter-tracing/circle'
    | '/letter-tracing/down'
    | '/letter-tracing/square'
    | '/letter-tracing/triangle'
    | '/free-draw/'
    | '/image-to-letter-matching/'
    | '/menu/'
    | '/number-keypad/'
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
  ImageToLetterMatchingLowercaseRoute: typeof ImageToLetterMatchingLowercaseRoute
  LetterTracingAUpperRoute: typeof LetterTracingAUpperRoute
  LetterTracingAcrossRoute: typeof LetterTracingAcrossRoute
  LetterTracingBUpperRoute: typeof LetterTracingBUpperRoute
  LetterTracingCircleRoute: typeof LetterTracingCircleRoute
  LetterTracingDownRoute: typeof LetterTracingDownRoute
  LetterTracingSquareRoute: typeof LetterTracingSquareRoute
  LetterTracingTriangleRoute: typeof LetterTracingTriangleRoute
  FreeDrawIndexRoute: typeof FreeDrawIndexRoute
  ImageToLetterMatchingIndexRoute: typeof ImageToLetterMatchingIndexRoute
  MenuIndexRoute: typeof MenuIndexRoute
  NumberKeypadIndexRoute: typeof NumberKeypadIndexRoute
  TapToCountIndexRoute: typeof TapToCountIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  FindAndTapAnimalsRoute: FindAndTapAnimalsRoute,
  FindAndTapFruitsRoute: FindAndTapFruitsRoute,
  FindAndTapLowercaseRoute: FindAndTapLowercaseRoute,
  FindAndTapNumbersRoute: FindAndTapNumbersRoute,
  FindAndTapUppercaseRoute: FindAndTapUppercaseRoute,
  ImageToLetterMatchingLowercaseRoute: ImageToLetterMatchingLowercaseRoute,
  LetterTracingAUpperRoute: LetterTracingAUpperRoute,
  LetterTracingAcrossRoute: LetterTracingAcrossRoute,
  LetterTracingBUpperRoute: LetterTracingBUpperRoute,
  LetterTracingCircleRoute: LetterTracingCircleRoute,
  LetterTracingDownRoute: LetterTracingDownRoute,
  LetterTracingSquareRoute: LetterTracingSquareRoute,
  LetterTracingTriangleRoute: LetterTracingTriangleRoute,
  FreeDrawIndexRoute: FreeDrawIndexRoute,
  ImageToLetterMatchingIndexRoute: ImageToLetterMatchingIndexRoute,
  MenuIndexRoute: MenuIndexRoute,
  NumberKeypadIndexRoute: NumberKeypadIndexRoute,
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
        "/image-to-letter-matching/lowercase",
        "/letter-tracing/a-upper",
        "/letter-tracing/across",
        "/letter-tracing/b-upper",
        "/letter-tracing/circle",
        "/letter-tracing/down",
        "/letter-tracing/square",
        "/letter-tracing/triangle",
        "/free-draw/",
        "/image-to-letter-matching/",
        "/menu/",
        "/number-keypad/",
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
    "/image-to-letter-matching/lowercase": {
      "filePath": "image-to-letter-matching/lowercase.tsx"
    },
    "/letter-tracing/a-upper": {
      "filePath": "letter-tracing/a-upper.tsx"
    },
    "/letter-tracing/across": {
      "filePath": "letter-tracing/across.tsx"
    },
    "/letter-tracing/b-upper": {
      "filePath": "letter-tracing/b-upper.tsx"
    },
    "/letter-tracing/circle": {
      "filePath": "letter-tracing/circle.tsx"
    },
    "/letter-tracing/down": {
      "filePath": "letter-tracing/down.tsx"
    },
    "/letter-tracing/square": {
      "filePath": "letter-tracing/square.tsx"
    },
    "/letter-tracing/triangle": {
      "filePath": "letter-tracing/triangle.tsx"
    },
    "/free-draw/": {
      "filePath": "free-draw/index.tsx"
    },
    "/image-to-letter-matching/": {
      "filePath": "image-to-letter-matching/index.tsx"
    },
    "/menu/": {
      "filePath": "menu/index.tsx"
    },
    "/number-keypad/": {
      "filePath": "number-keypad/index.tsx"
    },
    "/tap-to-count/": {
      "filePath": "tap-to-count/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
