import {
  Link,
  useNavigate,
  useSearch,
  type FileRoutesByPath,
} from "@tanstack/react-router";
import { fx } from "@/utils/sound";
import { useEffect, useState } from "react";
import { useHorizontalSwipe } from "@/utils/swipe";
import Container from "@/Container";
import Header from "@/Header/Header";
import { Tile } from "./Tile";

const GAME_LISTING: GameListing = {
  title: "Toddler Games",
  icon: "./icons/toddler.svg",
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
      title: "Tap to Count",
      path: "/tap-to-count/",
      icon: "./icons/1234.svg",
    },
    {
      title: "Free Draw",
      path: "/free-draw/",
      icon: "./icons/free-draw.svg",
    },
    {
      title: "Match Image to Letter",
      icon: "./icons/match-image/index.svg",
      children: [
        {
          title: "Uppercase Letters only",
          path: "/image-to-letter-matching/",
          icon: "./icons/match-image/to-uppercase.svg",
        },
        {
          title: "Lowercase Letters only",
          path: "/image-to-letter-matching/lowercase",
          icon: "./icons/match-image/to-lowercase.svg",
        },
      ],
    },
    {
      title: "Number Keypad",
      path: "/number-keypad/",
      icon: "./icons/123.svg",
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
          title: "Uppercase A",
          path: "/letter-tracing/a-upper",
          icon: "./icons/trace/a-uppercase.svg",
        },
        {
          title: "Uppercase B",
          path: "/letter-tracing/b-upper",
          icon: "./icons/trace/b-uppercase.svg",
        },
      ],
    },
  ],
};

type GameListing = {
  title: string;
  icon: string;
  back?: () => GameListing;
} & (
    | {
      children: GameListing[];
    }
    | {
      path: keyof FileRoutesByPath;
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

export const Home = () => {
  useHomeSound();
  const navigate = useNavigate();

  const searchListing = (title?: string): GameListing => {
    const findListing = (
      root: GameListing,
      searchTitle: string
    ): GameListing | undefined => {
      if (root.title === searchTitle) return root;
      if ("children" in root) {
        for (const child of root.children) {
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
      }
    }
    return GAME_LISTING;
  };
  const { title } = useSearch({ from: "/menu/" });
  const [listing, setListing] = useState(searchListing(title));
  const enterListing = (item: GameListing) => {
    if ("children" in item) {
      setListing({
        ...item,
        back: () => listing,
      });
    } else {
      navigate({
        to: item.path,
      });
    }
  };
  const isListingAtRoot = listing.title === GAME_LISTING.title;
  const { ref } = useHorizontalSwipe({
    onSwipe: ({ directions }) => {
      if (directions.right && !isListingAtRoot) {
        enterListing(listing.back!());
      }
    },
  });

  return (
    <Container
      ref={ref as React.LegacyRef<HTMLDivElement>}>
      <Header title={listing.title} onRestart={() => { }} Left={<Header.BackToHome />} Right={null}>
        {isListingAtRoot ? <h1 className="text-4xl font-bold font-lily">Let’s Play</h1> : null}
      </Header>
      <div
        className="flex flex-col items-center justify-center h-full p-4"
      >
        <ol className="list-none text-lg flex flex-wrap items-center justify-center gap-4">
          {"children" in listing ? listing.children.map((child) =>
            "path" in child ? (
              <Link to={child.path}>
                <Tile title={child.title} imageSourcePath={child.icon} />
              </Link>
            ) : (
              <li key={child.title} onClick={() => enterListing(child)}>
                <Link
                  to="."
                  search={{
                    title: child.title,
                  }}
                >
                  <Tile title={child.title} imageSourcePath={child.icon} />
                </Link>
              </li>
            )
          ) : null}
          {!isListingAtRoot && (
            <button onClick={() => enterListing(listing.back!())}>
              <Tile title="Back" imageSourcePath="./icons/arrow-left-black.svg" />
            </button>
          )}
        </ol>
      </div>
    </Container>
  );
};