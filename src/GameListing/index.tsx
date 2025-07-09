import { useNavigate, Link, useSearchParams, URLSearchParamsInit } from 'react-router';
import { fx } from '@/utils/sound';
import { useEffect } from 'react';
import { useHorizontalSwipe } from '@/utils/swipe';
import Container from '@/Container';
import { Tile } from './Tile';
import { speak } from '@/utils/speak';
import FloatAround from '@/FloatAround';
import { z } from 'zod';
import { getBaseUrl } from '@/utils/url';
import { GAME_LISTING, type GameListing } from './GameListing.consts';
import { Breadcrumb, Breadcrumbs } from './Breadcrumbs';
import { useMedia } from '@/utils/useMedia';

const useHomeSound = () => {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const $window = window as any;
    if (!$window.__hasPlayedHome) {
      $window.__hasPlayedHome = true;
    }
  }, []);
};

function useSearch(schema: z.AnyZodObject, defaultInit?: URLSearchParamsInit) {
  const [searchParams] = useSearchParams(defaultInit);
  const search = schema.parse(Object.fromEntries(searchParams));
  return search;
}

export const Home = () => {
  useHomeSound();

  const navigate = useNavigate();

  const { title } = useSearch(z.object({ title: z.string().optional() }), {
    from: '/menu/',
  });

  const searchListing = (title?: string): GameListing => {
    const findListing = (listing: GameListing, searchTitle: string): GameListing | undefined => {
      if (listing.title === searchTitle) {
        if ('children' in listing) {
          return listing;
        } else {
          return GAME_LISTING;
        }
      }
      if ('children' in listing) {
        for (const child of listing.children) {
          if (child.isDisabled?.()) continue;
          const found = findListing(
            {
              ...child,
              back: () => listing,
            },
            searchTitle
          );
          if (found) return found;
        }
      }
      return undefined;
    };

    const found = findListing(GAME_LISTING, title ?? '');
    if (found) {
      return {
        ...found,
        back: found.back ?? (() => GAME_LISTING),
      };
    }
    return GAME_LISTING;
  };
  const listing = searchListing(title);
  const isListingAtRoot = listing.title === GAME_LISTING.title;
  const { ref } = useHorizontalSwipe({
    onSwipe: ({ directions }) => {
      if (directions.right && !isListingAtRoot) {
        navigate('/menu/');
      }
    },
  });
  useEffect(() => {
    speak(listing.title ?? `Which game would you like to play?`);
    fx.click.play();
  }, [listing.title]);

  function getBreadcrumbs(): Breadcrumb[] {
    const breadcrumbs: Breadcrumb[] = [];
    let current: GameListing | undefined = listing;
    while (current) {
      const isMenu = !current.title;
      breadcrumbs.push({
        title: isMenu ? 'Menu' : current.title,
        path: isMenu ? '/menu' : 'path' in current ? current.path : `?title=${current.title}`,
      });
      current = current.back?.();
      if (isMenu) {
        break;
      }
    }
    breadcrumbs.push({
      title: 'Home',
      path: '/',
    });
    return breadcrumbs.reverse();
  }

  const isMobile = useMedia(['(max-width: 768px)'], [true], false);

  const breadcrumbs = getBreadcrumbs().slice(isMobile ? -2 : undefined);

  return (
    <Container ref={ref as React.LegacyRef<HTMLDivElement>}>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className="flex flex-col p-2 md:p-4 relative h-[80dvh]">
        {new Array(4).fill(null).map((_, index) => (
          <Floaters key={index} />
        ))}
        <div className="lg:flex overflow-y-auto h-full z-10 justify-center">
          <ol className="list-none text-lg grow snap-y flex portrait:max-md:flex-col flex-wrap items-center justify-center content-center gap-4">
            {'children' in listing
              ? listing.children.map((child) =>
                  'path' in child ? (
                    <Link key={child.title} className="snap-center" to={child.path}>
                      <Tile title={child.title} imageSourcePath={child.icon} imageClassName={child.iconClassName} />
                    </Link>
                  ) : (
                    <li
                      key={child.title}
                      className="snap-center"
                      onClick={() => {
                        navigate('path' in child ? String(child.path) : `?title=${child.title}`);
                      }}
                    >
                      <Link to={{ pathname: '.', search: `?title=${child.title}` }}>
                        <Tile title={child.title} imageSourcePath={child.icon} imageClassName={child.iconClassName} />
                      </Link>
                    </li>
                  )
                )
              : null}
            {!isListingAtRoot && (
              <button
                onClick={() => {
                  const newListing = listing.back?.();
                  const isMenu = !newListing?.title;
                  navigate(isMenu ? '/menu' : `?title=${newListing?.title}`);
                }}
              >
                <Tile title="Back" imageSourcePath="./icons/arrow-left-black.svg" />
              </button>
            )}
          </ol>
        </div>
      </div>
    </Container>
  );
};

const Floaters = () => {
  const baseUrl = getBaseUrl();
  return (
    <>
      <FloatAround>
        <img src={`${baseUrl}/icons/123.svg`} alt="123" className="opacity-20" />
      </FloatAround>
      <FloatAround>
        <img src={`${baseUrl}/icons/1234.svg`} alt="1234" className="opacity-20" />
      </FloatAround>
      <FloatAround>
        <img src={`${baseUrl}/icons/free-draw.svg`} alt="free-draw" className="opacity-20" />
      </FloatAround>
      <FloatAround>
        <img src={`${baseUrl}/icons/match-image/to-lowercase.svg`} className="opacity-20" />
      </FloatAround>
      <FloatAround>
        <img src={`${baseUrl}/icons/match-image/to-uppercase.svg`} className="opacity-20" />
      </FloatAround>
    </>
  );
};
