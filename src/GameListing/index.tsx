import {
  useNavigate,
  Link,
  useSearchParams,
  URLSearchParamsInit,
} from "react-router";
import { fx } from "@/utils/sound";
import { useEffect, useState } from "react";
import { useHorizontalSwipe } from "@/utils/swipe";
import Container from "@/Container";
import Header from "@/Header/Header";
import { Tile } from "./Tile";
import { speak } from "@/utils/speak";
import FloatAround from "@/FloatAround";
import { hasTouch } from "@/utils/touch";
import { z } from "zod";
import { getBaseUrl } from "@/utils/url";

const GAME_LISTING: GameListing = {
  title: null!,
  icon: "./icons/toddler.svg",
  children: [
    {
      title: "Flow",
      path: "/flow/",
      icon: "./icons/play.svg",
    },
    {
      title: "Letters, Numbers, and Symbols",
      icon: "./icons/tap-uppercase.svg",
      children: [
        {
          title: "Find and Tap",
          icon: "./icons/tap.svg",
          children: [
            {
              title: "Uppercase Letters only",
              path: "/find-and-tap/uppercase",
              icon: "./icons/tap-uppercase.svg",
            },
            {
              title: "Lowercase Letters only",
              path: "/find-and-tap/lowercase",
              icon: "./icons/tap-lowercase.svg",
            },
            {
              title: "Numbers only",
              path: "/find-and-tap/numbers",
              icon: "./icons/tap-numbers.svg",
            },
            {
              title: "Fruits only",
              path: "/find-and-tap/fruits",
              icon: "./icons/tap-fruits.svg",
            },
            {
              title: "Animals only",
              path: "/find-and-tap/animals",
              icon: "./icons/tap-animals.svg",
            },
          ],
        },
        {
          title: "Number Keypad",
          path: "/number-keypad/",
          icon: "./icons/123.svg",
        },
      ],
    },
    {
      title: "Tap to Count",
      path: "/tap-to-count/",
      icon: "./icons/1234.svg",
    },
    {
      title: "Place the Letters",
      path: "/place-the-letters/",
      icon: "./icons/tap-uppercase.svg",
    },
    {
      title: "What do you hear?",
      icon: "./icons/loudspeaker.svg",
      children: [
        {
          title: "Lowercase Letters only",
          path: "/what-do-you-hear",
          icon: "./icons/tap-lowercase.svg",
        },
        {
          title: "Uppercase Letters only",
          path: "/what-do-you-hear/uppercase",
          icon: "./icons/tap-uppercase.svg",
        },
      ],
    },
    {
      title: "Read Words",
      path: "/read-words/",
      icon: "./icons/tap-lowercase.svg",
    },
    {
      title: "Match Image to Letter",
      icon: "./icons/match-image/index.svg",
      children: [
        {
          title: "Uppercase Letters",
          path: "/image-to-letter-matching/",
          icon: "./icons/match-image/to-uppercase.svg",
        },
        {
          title: "Lowercase Letters",
          path: "/image-to-letter-matching/lowercase",
          icon: "./icons/match-image/to-lowercase.svg",
        },
      ],
    },
    {
      title: "Can you trace this?",
      icon: "./icons/trace.svg",
      children: [
        {
          title: "Down",
          path: "/letter-tracing/down",
          icon: "./icons/trace/arrows-vertical.svg",
        },
        {
          title: "Across",
          path: "/letter-tracing/across",
          icon: "./icons/trace/arrows-horizontal.svg",
        },
        {
          title: "Circle",
          path: "/letter-tracing/circle",
          icon: "./icons/trace/circle.svg",
        },
        {
          title: "Square",
          path: "/letter-tracing/square",
          icon: "./icons/trace/square.svg",
        },
        {
          title: "Triangle",
          path: "/letter-tracing/triangle",
          icon: "./icons/trace/triangle.svg",
        },
        {
          title: "Uppercase A",
          path: "/letter-tracing/a-upper",
          icon: "./icons/trace/a-uppercase.svg",
        },
        {
          title: "Uppercase B",
          path: "/letter-tracing/b-upper",
          icon: "./icons/trace/b-uppercase.svg",
        },
        {
          title: "Left Slash",
          path: "/letter-tracing/left-slash",
          icon: "./icons/trace/left-slash.svg",
        },
        {
          title: "Right Slash",
          path: "/letter-tracing/right-slash",
          icon: "./icons/trace/right-slash.svg",
        },
        {
          title: "Left Curve",
          path: "/letter-tracing/left-curve",
          icon: "./icons/trace/left-curve.svg",
        },
        {
          title: "Right Curve",
          path: "/letter-tracing/right-curve",
          icon: "./icons/trace/right-curve.svg",
        },
      ],
    },
    {
      title: "Free Draw",
      path: "/free-draw/",
      icon: "./icons/free-draw.svg",
    },
    {
      title: "Type Away",
      path: "/type-away/",
      icon: "./icons/ph_shuffle.svg",
      isDisabled: () => hasTouch(),
    },
  ],
};

type GameListing = {
  title: string;
  icon: string;
  back?: () => GameListing;
  isDisabled?: () => boolean;
} & (
  | {
      children: GameListing[];
    }
  | {
      path: string;
    }
);

const useHomeSound = () => {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const $window = window as any;
    if (!$window.__hasPlayedHome) {
      fx.home.play();
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
    const findListing = (
      root: GameListing,
      searchTitle: string
    ): GameListing | undefined => {
      if (root.title === searchTitle) {
        if ("children" in root) {
          return root;
        } else {
          return GAME_LISTING;
        }
      }
      if ("children" in root) {
        for (const child of root.children) {
          if (child.isDisabled?.()) continue;
          const found = findListing(child, searchTitle);
          if (found) return found;
        }
      }
      return undefined;
    };

    const found = findListing(GAME_LISTING, title ?? "");
    if (found) {
      return {
        ...found,
        back: () => GAME_LISTING,
      };
    }
    return GAME_LISTING;
  };
  const { title } = useSearch(z.object({ title: z.string().optional() }), {
    from: "/menu/",
  });
  const [listing, setListing] = useState(searchListing(title));
  const enterListing = (item: GameListing) => {
    if ("children" in item) {
      setListing({
        ...item,
        back: item.back ?? (() => listing),
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
            <Header.Back
              onClick={() => enterListing(listing.back?.() ?? GAME_LISTING)}
            />
          )
        }
        noLevels
      >
        {isListingAtRoot ? (
          <h1 className="text-4xl font-bold font-lily">Let’s Play</h1>
        ) : null}
      </Header>
      <div className="flex flex-col p-2 md:p-4 relative h-[80dvh]">
        {new Array(4).fill(null).map((_, index) => (
          <Floaters key={index} />
        ))}
        <ol className="list-none text-lg h-full overflow-y-auto snap-y flex portrait:max-md:flex-col md:flex-wrap items-center md:justify-center content-center gap-4 z-10">
          {"children" in listing
            ? listing.children.map((child) =>
                "path" in child ? (
                  <Link
                    key={child.title}
                    className="snap-center"
                    to={child.path}
                  >
                    <Tile title={child.title} imageSourcePath={child.icon} />
                  </Link>
                ) : (
                  <li
                    key={child.title}
                    className="snap-center"
                    onClick={() => enterListing(child)}
                  >
                    <Link
                      to={{ pathname: ".", search: `?title=${child.title}` }}
                    >
                      <Tile title={child.title} imageSourcePath={child.icon} />
                    </Link>
                  </li>
                )
              )
            : null}
          {!isListingAtRoot && (
            <button onClick={() => enterListing(listing.back!())}>
              <Tile
                title="Back"
                imageSourcePath="./icons/arrow-left-black.svg"
              />
            </button>
          )}
        </ol>
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
        <img
          src={`${baseUrl}/icons/free-draw.svg`}
          alt="free-draw"
          className="opacity-20"
        />
      </FloatAround>
      <FloatAround>
        <img
          src={`${baseUrl}/icons/match-image/to-lowercase.svg`}
          className="opacity-20"
        />
      </FloatAround>
      <FloatAround>
        <img
          src={`${baseUrl}/icons/match-image/to-uppercase.svg`}
          className="opacity-20"
        />
      </FloatAround>
    </>
  );
};
