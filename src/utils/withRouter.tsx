import type { StoryFn, StoryContext } from "@storybook/react";
import { createMemoryRouter, RouterProvider } from "react-router";

export function withRouter(Story: StoryFn, { parameters }: StoryContext) {
  const {
    initialEntries = ["/"],
    initialIndex = 0,
    path = "/",
  } = parameters?.router || {};

  // Define a single route that renders the story at the given path
  const routes = [
    {
      path,
      element: <Story />,
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries,
    initialIndex,
  });

  return <RouterProvider router={router} />;
}

// Optionally extend Storybook's Parameters type for type safety
declare module "@storybook/react" {
  interface Parameters {
    router?: {
      initialEntries?: string[];
      initialIndex?: number;
      path?: string;
    };
  }
}
