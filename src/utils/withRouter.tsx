import type { StoryFn, StoryContext } from "@storybook/react";
import {
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";

export function withRouter(
  Story: StoryFn,
  { parameters }: StoryContext,
) {
	const {initialEntries = ['/'], initialIndex, routes = ['/']} = parameters?.router || {};

	const rootRoute = createRootRoute();

	const children = routes.map((path) =>
		createRoute({
			path,
			getParentRoute: () => rootRoute,
			component: Story as never,
		}),
	);

	rootRoute.addChildren(children);

	const router = createRouter({
		history: createMemoryHistory({initialEntries, initialIndex}),
		routeTree: rootRoute,
	});

	return <RouterProvider router={router as never} />;
}

declare module "@storybook/react" {
  interface Parameters {
    router?: {
			initialEntries?: string[];
			initialIndex?: number;
			routes?: string[];
		};
	}
}