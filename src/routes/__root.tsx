import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import React from 'react'
import Footer from '@/Footer'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="flex flex-col h-screen text-center p-4">
        <main className="flex-grow max-h-[90dvh]">
          <React.Fragment>
            <Outlet />
          </React.Fragment>
        </main>
        <Footer />
      </div>
      <hr />
      {import.meta.env.DEV && <TanStackRouterDevtools />}
    </>
  ),
})