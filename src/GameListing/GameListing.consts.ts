import { LetterTracingExercises } from '@/games/LetterTracing/LetterTracing.consts';
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
        {
          title: 'Letter Keypad',
          path: '/letter-keypad/',
          icon: './icons/tap-uppercase.svg',
        },
        {
          title: 'Phonics Keypad',
          path: '/phonics-keypad/',
          icon: './icons/tap-lowercase.svg',
        },
        {
          title: 'Sound Out Letters',
          path: '/sound-out-letters/',
          icon: './icons/tap-uppercase.svg',
        },
        {
          title: 'Image to Letter',
          icon: './icons/match-image/index.svg',
          children: [
            {
              title: 'Uppercase Letters',
              path: '/image-to-letter-matching/uppercase',
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
          title: 'Letter to Image',
          icon: './icons/match-letter/index.svg',
          children: [
            {
              title: 'Uppercase Letters',
              path: '/letter-to-image-matching/uppercase',
              icon: './icons/match-letter/to-uppercase.svg',
            },
            {
              title: 'Lowercase Letters',
              path: '/letter-to-image-matching/lowercase',
              icon: './icons/match-letter/to-lowercase.svg',
            },
          ],
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
      title: 'Can you trace this?',
      icon: './icons/trace.svg',
      children: LetterTracingExercises.map((e) => ({
        ...e,
        path: `/letter-tracing/${slugify(e.title)}`,
      })),
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
