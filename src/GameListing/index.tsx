import { useNavigate, Link, useSearchParams, URLSearchParamsInit } from 'react-router';
import { fx } from '@/utils/sound';
import { useEffect, useState } from 'react';
import { useHorizontalSwipe } from '@/utils/swipe';
import Container from '@/Container';
import Header from '@/Header/Header';
import { Tile } from './Tile';
import { speak } from '@/utils/speak';
import FloatAround from '@/FloatAround';
import { z } from 'zod';
import { getBaseUrl } from '@/utils/url';
import { GAME_LISTING, type GameListing } from './GameListing.consts';

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

  const searchListing = (title?: string): GameListing => {
    const findListing = (root: GameListing, searchTitle: string): GameListing | undefined => {
      if (root.title === searchTitle) {
        if ('children' in root) {
          return root;
        } else {
          return GAME_LISTING;
        }
      }
      if ('children' in root) {
        for (const child of root.children) {
          if (child.isDisabled?.()) continue;
          const found = findListing(child, searchTitle);
          if (found) return found;
        }
      }
      return undefined;
    };

    const found = findListing(GAME_LISTING, title ?? '');
    if (found) {
      return {
        ...found,
        back: () => GAME_LISTING,
      };
    }
    return GAME_LISTING;
  };
  const { title } = useSearch(z.object({ title: z.string().optional() }), {
    from: '/menu/',
  });
  const [listing, setListing] = useState(searchListing(title));
  const enterListing = (item: GameListing) => {
    if ('children' in item) {
      setListing({
        ...item,
        back: item.back ?? (() => listing),
      });
      navigate({
        pathname: '.',
        search: item.title ? `?title=${item.title}` : undefined,
      });
    } else {
      navigate(item.path);
    }
  };
  const isListingAtRoot = listing.title === GAME_LISTING.title;
  const { ref } = useHorizontalSwipe({
    onSwipe: ({ directions }) => {
      if (directions.right && !isListingAtRoot) {
        enterListing(GAME_LISTING);
      }
    },
  });
  useEffect(() => {
    speak(listing.title ?? `Which game would you like to play?`);
    fx.click.play();
  }, [listing.title]);

  return (
    <Container ref={ref as React.LegacyRef<HTMLDivElement>}>
      <Header
        title={listing.title}
        onRestart={undefined}
        Left={
          isListingAtRoot ? (
            <Header.BackToHome />
          ) : (
            <Header.Back onClick={() => enterListing(listing.back?.() ?? GAME_LISTING)} />
          )
        }
        noRight
        noLevels
      >
        {isListingAtRoot ? <h1 className="text-4xl font-bold font-lily">Let’s Play</h1> : null}
      </Header>
      <div className="flex flex-col p-2 md:p-4 relative h-[80dvh]">
        {new Array(4).fill(null).map((_, index) => (
          <Floaters key={index} />
        ))}
        <div className="overflow-y-auto h-full z-10">
          <ol className="list-none text-lg grow snap-y flex portrait:max-md:flex-col md:flex-wrap items-center md:justify-center content-center gap-4">
            {'children' in listing
              ? listing.children.map((child) =>
                  'path' in child ? (
                    <Link key={child.title} className="snap-center" to={child.path}>
                      <Tile title={child.title} imageSourcePath={child.icon} imageClassName={child.iconClassName} />
                    </Link>
                  ) : (
                    <li key={child.title} className="snap-center" onClick={() => enterListing(child)}>
                      <Link to={{ pathname: '.', search: `?title=${child.title}` }}>
                        <Tile title={child.title} imageSourcePath={child.icon} imageClassName={child.iconClassName} />
                      </Link>
                    </li>
                  )
                )
              : null}
            {!isListingAtRoot && (
              <button onClick={() => enterListing(listing.back!())}>
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
