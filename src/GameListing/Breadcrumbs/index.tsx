import { Link } from 'react-router';
import { useEffect, useRef } from 'react';
import clsx from 'clsx';

export type Breadcrumb = {
  title: string;
  path: string;
};

type BreadcrumbsProps = {
  breadcrumbs: Breadcrumb[];
};

export const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.scrollLeft = container.scrollWidth;
    }
  }, [breadcrumbs]);

  return (
    <div ref={containerRef} data-testid="breadcrumbs" className="flex px-1 md:px-4 py-1 w-full overflow-x-auto">
      <ul className="flex flex-row items-center justify-between md:justify-start gap-1 text-sm w-full md:w-auto">
        {breadcrumbs.map((breadcrumb, idx) => {
          const isLast = idx === breadcrumbs.length - 1;
          return (
            <>
              <li
                key={breadcrumb.path}
                className={clsx('flex flex-row items-center rounded outline max-w-[40dvw] md:max-w-auto', {
                  'bg-white text-black outline-slate-500': !isLast,
                  'text-white outline-white': isLast,
                })}
              >
                <Link to={breadcrumb.path} className="px-4 py-2 whitespace-nowrap text-ellipsis overflow-hidden">
                  {breadcrumb.title}
                </Link>
              </li>
              {idx < breadcrumbs.length - 1 && (
                <svg
                  className="mx-0.5 w-4 h-4 text-gray-500 hidden md:block"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              )}
            </>
          );
        })}
      </ul>
    </div>
  );
};
