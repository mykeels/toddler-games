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

const GAME_LISTING: GameListing = {
  title: "Toddler Games",
  children: [
    {
      title: "Find and Tap",
      children: [
        {
          title: "Uppercase Letters only",
          path: "/find-and-tap/uppercase",
        },
        {
          title: "Lowercase Letters only",
          path: "/find-and-tap/lowercase",
        },
        {
          title: "Numbers only",
          path: "/find-and-tap/numbers",
        },
        {
          title: "Fruits only",
          path: "/find-and-tap/fruits",
        },
        {
          title: "Animals only",
          path: "/find-and-tap/animals",
        },
      ],
    },
    {
      title: "Tap to Count",
      path: "/tap-to-count/",
    },
    {
      title: "Free Draw",
      path: "/free-draw/",
    },
    {
      title: "Match Image to Letter",
      children: [
        {
          title: "Uppercase Letters only",
          path: "/image-to-letter-matching/",
        },
        {
          title: "Lowercase Letters only",
          path: "/image-to-letter-matching/lowercase",
        },
      ],
    },
    {
      title: "Number Keypad",
      path: "/number-keypad/",
    },
    {
      title: "Can you trace this?",
      children: [
        {
          title: "Down",
          path: "/letter-tracing/down",
        },
        {
          title: "Across",
          path: "/letter-tracing/across",
        },
        {
          title: "Uppercase A",
          path: "/letter-tracing/a-upper",
        },
        {
          title: "Uppercase B",
          path: "/letter-tracing/b-upper",
        },
      ],
    },
  ],
};

type GameListing = {
  title: string;
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
        <h1 className="text-4xl font-bold font-lily">Let’s Play</h1>
      </Header>
      <div
        className="flex flex-col space-y-4 items-center justify-center h-full px-4"
      >
        <h1 className="text-4xl font-bold">{listing.title}</h1>

        <ol className="list-decimal text-lg flex flex-col space-y-4">
          {"children" in listing ? listing.children.map((child) =>
            "path" in child ? (
              <li key={child.title}>
                <Link to={child.path}>{child.title}</Link>
              </li>
            ) : (
              <li key={child.title} onClick={() => enterListing(child)}>
                <Link
                  to="."
                  search={{
                    title: child.title,
                  }}
                >
                  {child.title}
                </Link>
              </li>
            )
          ) : null}
          {!isListingAtRoot && (
            <li onClick={() => enterListing(listing.back!())}>
              <Link to=".">Back</Link>
            </li>
          )}
        </ol>
      </div>
    </Container>
  );
};
