type VideoSource = 'youtube';
type Game = 'read-words';

export type AppVideo = {
  title: string;
  description: string;
  thumbnail: string;
  url: string;
  source: VideoSource;
  game: Game;
};

export type ReadWordsVideo = AppVideo & {
  game: 'read-words';
  words: string[];
};

const ReadWordsVideos: ReadWordsVideo[] = [
  {
    title: 'Reading 2 - 6 Letter Words with Phonics',
    description:
      'In this fun and educational video, we help children learn to read 2 to 6 letter words using phonics. Watch as we sound out each letter, blend the sounds together, and read simple words aloud. This video is perfect for preschoolers, kindergarteners, and early readers who are building their reading skills and confidence.',
    thumbnail:
      'https://res.cloudinary.com/mykeels/image/upload/v1750727308/Reading_2_-_6_letter_words_with_phonics_thumbnail_e2pqpc.png',
    url: 'https://www.youtube.com/watch?v=I2M9y588XmM',
    source: 'youtube',
    game: 'read-words',
    words: [
      'yes',
      'go',
      'three',
      'pester',
      'jungle',
      'prank',
      'look',
      'eleven',
      'jaguar',
      'bear',
      'bounce',
      'juggle',
      'timid',
      'monkey',
      'clumsy',
      'climb',
      'five',
      'eleven',
      'clumsy',
      'light',
      'on',
      'apple',
      'bear',
      'boy',
      'bounce',
      'steam',
      'dream',
      'clumsy',
      'kind',
      'wiggle',
      'four',
    ],
  },
  {
    title: 'Reading 2 - 3 Letter Words with Phonics',
    description:
      'In this fun and educational video, we help children learn to read 2 to 3 letter words using phonics. Watch as we sound out each letter, blend the sounds together, and read simple words aloud. This video is perfect for preschoolers, kindergarteners, and early readers who are building their reading skills and confidence.',
    thumbnail:
      'https://res.cloudinary.com/mykeels/image/upload/v1750730847/Reading_2_-_3_Letter_Words_with_Phonics_1280x720_d9v4mi.png',
    url: 'https://www.youtube.com/watch?v=eG1J_ORATak',
    source: 'youtube',
    game: 'read-words',
    words: [
      'on',
      'off',
      'cat',
      'boy',
      'dye',
      'go',
      'dog',
      'sun',
      'off',
      'bed',
      'cat',
      'you',
      'boy',
      'dye',
      'bed',
      'cat',
      'big',
      'boy',
      'dye',
      'boy',
      'big',
      'dog',
      'on',
      'me',
      'on',
      'off',
      'zap',
      'up',
      'off',
      'no',
      'yes',
      'boy',
      'cat',
      'boy',
      'off',
      'yes',
      'boy',
      'sun',
      'bed',
      'you',
    ],
  },
  {
    title: 'Reading 3 - 4 Letter Words with Phonics',
    description:
      'In this fun and educational video, we help children learn to read 3 to 4 letter words using phonics. Watch as we sound out each letter, blend the sounds together, and read simple words aloud. This video is perfect for preschoolers, kindergarteners, and early readers who are building their reading skills and confidence.',
    thumbnail:
      'https://res.cloudinary.com/mykeels/image/upload/v1750730847/Reading_2_-_3_Letter_Words_with_Phonics_1280x720_d9v4mi.png',
    url: 'https://www.youtube.com/watch?v=noq3yupbLvM',
    source: 'youtube',
    game: 'read-words',
    words: [
      'boat',
      'bear',
      'tree',
      'zap',
      'bear',
      'cat',
      'flop',
      'boat',
      'odor',
      'flop',
      'home',
      'book',
      'rain',
      'bear',
      'rain',
      'melt',
      'sun',
      'big',
      'stars',
      'boat',
      'flop',
      'tree',
      'kind',
      'book',
      'five',
      'flop',
      'four',
      'bark',
      'glow',
      'ball',
    ],
  },
  {
    title: 'Reading 4 - 5 Letter Words with Phonics',
    description:
      'In this fun and educational video, we help children learn to read 4 to 5 letter words using phonics. Watch as we sound out each letter, blend the sounds together, and read simple words aloud. This video is perfect for preschoolers, kindergarteners, and early readers who are building their reading skills and confidence.',
    thumbnail:
      'https://res.cloudinary.com/mykeels/image/upload/v1750730847/Reading_2_-_3_Letter_Words_with_Phonics_1280x720_d9v4mi.png',
    url: 'https://www.youtube.com/watch?v=N86GzCbv0Po',
    source: 'youtube',
    game: 'read-words',
    words: [
      'good',
      'yodel',
      'three',
      'nurse',
      'itchy',
      'four',
      'book',
      'belch',
      'quick',
      'yawn',
      'paper',
      'quick',
      'float',
      'paper',
      'ball',
      'bison',
      'cram',
      'bison',
      'melt',
      'boat',
      'timid',
      'bird',
      'bark',
      'stars',
      'handy',
      'blend',
      'dream',
      'water',
      'blend',
      'light',
      'plane',
    ],
  },
  {
    title: 'Reading 5 - 6 Letter Words with Phonics',
    description:
      'In this fun and educational video, we help children learn to read 5 to 6 letter words using phonics. Watch as we sound out each letter, blend the sounds together, and read simple words aloud. This video is perfect for preschoolers, kindergarteners, and early readers who are building their reading skills and confidence.',
    thumbnail:
      'https://res.cloudinary.com/mykeels/image/upload/v1750730847/Reading_2_-_3_Letter_Words_with_Phonics_1280x720_d9v4mi.png',
    url: 'https://www.youtube.com/watch?v=NLXzMS4StQ8',
    source: 'youtube',
    game: 'read-words',
    words: [
      'vacuum',
      'gargle',
      'tickle',
      'plane',
      'paper',
      'blend',
      'ruckus',
      'itchy',
      'bellow',
      'vacuum',
      'nurse',
      'tickle',
      'float',
      'yucky',
      'light',
      'climb',
      'tangle',
      'turtle',
      'light',
      'timid',
      'fluffy',
      'water',
      'zipper',
      'dream',
      'zigzag',
      'dream',
      'bubble',
      'house',
      'alarm',
      'blend',
    ],
  },
];

export const VIDEOS: AppVideo[] = [...ReadWordsVideos];

export const slugify = (title: string) => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '') // remove non-alphanumeric except spaces/hyphens
    .replace(/\s+/g, '-') // replace spaces with hyphens
    .replace(/-+/g, '-') // collapse multiple hyphens
    .replace(/^-+|-+$/g, ''); // trim leading/trailing hyphens
};
