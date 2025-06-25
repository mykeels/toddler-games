import { hasTouch } from '@/utils/touch';
import { slugify, VIDEOS } from '@/utils/videos';

export const GAME_LISTING: GameListing = {
  title: null!,
  icon: './icons/toddler.svg',
  children: [
    {
      title: 'Flow',
      path: '/flow/',
      icon: './icons/play.svg',
    },
    {
      title: 'Letters, Numbers, and Symbols',
      icon: './icons/tap-uppercase.svg',
      children: [
        {
          title: 'Find and Tap',
          icon: './icons/tap.svg',
          children: [
            {
              title: 'Uppercase Letters only',
              path: '/find-and-tap/uppercase',
              icon: './icons/tap-uppercase.svg',
            },
            {
              title: 'Lowercase Letters only',
              path: '/find-and-tap/lowercase',
              icon: './icons/tap-lowercase.svg',
            },
            {
              title: 'Numbers only',
              icon: './icons/tap-numbers.svg',
              children: [
                {
                  title: 'Digits',
                  path: '/find-and-tap/numbers/digits',
                  icon: './icons/tap-numbers-digits.svg',
                  iconClassName: {
                    'w-16': false,
                    'h-16': false,
                    'w-32 h-20': true,
                  },
                },
                {
                  title: 'Tens',
                  path: '/find-and-tap/numbers/tens',
                  icon: './icons/tap-numbers-tens.svg',
                  iconClassName: {
                    'w-16': false,
                    'h-16': false,
                    'w-32 h-20': true,
                  },
                },
                {
                  title: 'Hundreds',
                  path: '/find-and-tap/numbers/hundreds',
                  icon: './icons/tap-numbers-hundreds.svg',
                  iconClassName: {
                    'w-16': false,
                    'h-16': false,
                    'w-32 h-20': true,
                  },
                },
              ],
            },
            {
              title: 'Fruits only',
              path: '/find-and-tap/fruits',
              icon: './icons/tap-fruits.svg',
            },
            {
              title: 'Animals only',
              path: '/find-and-tap/animals',
              icon: './icons/tap-animals.svg',
            },
          ],
        },
        {
          title: 'Number Keypad',
          path: '/number-keypad/',
          icon: './icons/123.svg',
        },
      ],
    },
    {
      title: 'Tap to Count',
      path: '/tap-to-count/',
      icon: './icons/1234.svg',
    },
    {
      title: 'Place the Letters',
      path: '/place-the-letters/',
      icon: './icons/tap-uppercase.svg',
    },
    {
      title: 'What do you hear?',
      icon: './icons/loudspeaker.svg',
      children: [
        {
          title: 'Lowercase Letters only',
          path: '/what-do-you-hear',
          icon: './icons/tap-lowercase.svg',
        },
        {
          title: 'Uppercase Letters only',
          path: '/what-do-you-hear/uppercase',
          icon: './icons/tap-uppercase.svg',
        },
      ],
    },
    {
      title: 'Read Words',
      icon: './icons/tap-lowercase.svg',
      children: [
        {
          title: 'Read Words',
          path: '/read-words/',
          icon: './icons/tap-lowercase.svg',
        },
        ...VIDEOS.filter((video) => video.game === 'read-words').map((video) => ({
          title: video.title,
          path: `/videos/${slugify(video.title)}`,
          icon: './icons/video.svg',
        })),
      ],
    },
    {
      title: 'Match Image to Letter',
      icon: './icons/match-image/index.svg',
      children: [
        {
          title: 'Uppercase Letters',
          path: '/image-to-letter-matching/',
          icon: './icons/match-image/to-uppercase.svg',
        },
        {
          title: 'Lowercase Letters',
          path: '/image-to-letter-matching/lowercase',
          icon: './icons/match-image/to-lowercase.svg',
        },
      ],
    },
    {
      title: 'Can you trace this?',
      icon: './icons/trace.svg',
      children: [
        {
          title: 'Down',
          path: '/letter-tracing/down',
          icon: './icons/trace/arrows-vertical.svg',
        },
        {
          title: 'Across',
          path: '/letter-tracing/across',
          icon: './icons/trace/arrows-horizontal.svg',
        },
        {
          title: 'Circle',
          path: '/letter-tracing/circle',
          icon: './icons/trace/circle.svg',
        },
        {
          title: 'Square',
          path: '/letter-tracing/square',
          icon: './icons/trace/square.svg',
        },
        {
          title: 'Triangle',
          path: '/letter-tracing/triangle',
          icon: './icons/trace/triangle.svg',
        },
        {
          title: 'Uppercase A',
          path: '/letter-tracing/a-upper',
          icon: './icons/trace/a-uppercase.svg',
        },
        {
          title: 'Uppercase B',
          path: '/letter-tracing/b-upper',
          icon: './icons/trace/b-uppercase.svg',
        },
        {
          title: 'Left Slash',
          path: '/letter-tracing/left-slash',
          icon: './icons/trace/left-slash.svg',
        },
        {
          title: 'Right Slash',
          path: '/letter-tracing/right-slash',
          icon: './icons/trace/right-slash.svg',
        },
        {
          title: 'Left Curve',
          path: '/letter-tracing/left-curve',
          icon: './icons/trace/left-curve.svg',
        },
        {
          title: 'Right Curve',
          path: '/letter-tracing/right-curve',
          icon: './icons/trace/right-curve.svg',
        },
      ],
    },
    {
      title: 'Free Draw',
      path: '/free-draw/',
      icon: './icons/free-draw.svg',
    },
    {
      title: 'Type Away',
      path: '/type-away/',
      icon: './icons/ph_shuffle.svg',
      isDisabled: () => hasTouch(),
    },
    {
      title: 'Memory Cards',
      path: '/memory-cards/',
      icon: './icons/memory-cards.svg',
    },
  ],
};

export type GameListing = {
  title: string;
  icon: string;
  iconClassName?: string | Record<string, boolean>;
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
