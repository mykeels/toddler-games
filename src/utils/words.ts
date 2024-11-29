/**
 * In pronunciations,
 * The phonics sound "oh" is represented as "ō"
 * The phonics sound "ee" is represented as "ī"
 */

const TWO_LETTER_WORDS = [
  {
    value: "on",
    image:
      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnFhenVwOHZpeW51Y2ozYzBqM2VnZDFhcmptdXhndGx5Mm9kczhtcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/piO8R2DMyCXdalfXWQ/giphy.webp",
  },
  {
    value: "up",
    pronunciation: "op",
    image:
      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGpxZjFrZTg4aGF6dGhmM3RsbDBjOGFnMnJ6M3E3ejdybHI3cmNhbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iZGpuaRKdEZoI/giphy.webp",
  },
  {
    value: "go",
    pronunciation: "gō",
    image:
      "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHpuaWNsNjJpa2w2bHp4czJlMGExZGtjY21oYWoxc281bjBraXZrcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7ZetIsjtbkgNE1I4/200.webp",
  },
  {
    value: "no",
    pronunciation: "nō",
    image:
      "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzB2eHRyYW12dmU2M2lvNnRvczlkZjRzOGNkNHB3dXc4NGtqYjd3MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/izHlHlaz9n99skGyUt/giphy.webp",
  },
  {
    value: "me",
    pronunciation: "mi",
    image:
      "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXJqOTUwaXo0ZHl5cXQ2a3dqcWc4cTc0a2RkYWtjbTExZjdmN2hoYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/i3L6JoWcVZj1HuURSE/giphy.webp",
  },
];

const THREE_LETTER_WORDS = [
  {
    value: "you",
    pronunciation: "yuu",
    image:
      "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnJwNmFjMXRwc2h1dmdyNG92MW1uamlrZzNtZWZmcGxzOWxrZGV0MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5BUKkB7Ve74nYaF5tL/giphy.webp",
  },
  {
    value: "yes",
    image:
      "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDc5eWowaTMzeGo1ZHhocTh1N25qZWNpbXI2NWdkZ3VwYTUyM2ZmbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kwCLw42hH2cxvIywIi/giphy.webp",
  },
  {
    value: "off",
    image:
      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnFhenVwOHZpeW51Y2ozYzBqM2VnZDFhcmptdXhndGx5Mm9kczhtcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/piO8R2DMyCXdalfXWQ/giphy.webp",
  },
  {
    value: "bed",
    image:
      "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzU4cHh6cmhwMzIyMHNjYmJ3dnY4MHU2ejBxbXZubm01M2xiMTg1bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wsUuw16j6oyxLLRnnK/giphy.webp",
  },
  {
    value: "dog",
    image:
      "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnd0MmVjajg3emY5NWNpYzYwMjNsOG5uNDdhdXlvczRyYWs4cjA1ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT8qAYyGomTMWkqyME/giphy.webp",
  },
  {
    value: "cat",
    image:
      "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmI2cTdoY2o0czVpejkxNTc1cnM5dmhycHJ6eDMxYmY1ZGdrcjJtNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nR4L10XlJcSeQ/200.webp",
  },
  {
    value: "sun",
    pronunciation: "son",
    image:
      "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXhtaHJzNnVvMmllZ29ldTE0ZGMxdmFlNG9xYnkybGJ5cmNrcGdoNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1Fm7jEapE18HwS6fkT/giphy.webp",
  },
  {
    value: "big",
    pronunciation: "big",
    image:
      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmE1ajZ4MHNld3hmcDNlbGVvbnNzM3FwcmZhZzV3MXd0dG1sYTF4cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/85AU17hrcbCCMko/giphy.webp",
  },
  {
    value: "boy",
    pronunciation: "boy",
    image:
      "https://plus.unsplash.com/premium_photo-1672243483821-5d3855a21809?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const FOUR_LETTER_WORDS = [
  {
    value: "book",
    pronunciation: "buuk",
    image:
      "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWNldjJ3djI1bHNraXNtbHFiZXJheTNjNmNodnllZ2puNzc1Mjl6NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT77Y1T0zY1gR5qe5O/giphy.webp",
  },
  {
    value: "look",
    pronunciation: "luuk",
    image:
      "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHdtaWRhbXQ1aWl0YzR2aWhjanJmdmNybGo0YmZmbXV2YXE1cm9hNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UymgKJ3zWAgCZTVN16/giphy.webp",
  },
  {
    value: "good",
    pronunciation: "guud",
    image:
      "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGExdGFma2FkOWdvemJ1azdpeXg4YmYyeGVsMm53N2s0eGNkZDhtbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NDjtmyXAAUWKQ/200.webp",
  },
  {
    value: "home",
    pronunciation: "hōmm",
    image:
      "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    value: "tree",
    pronunciation: "trii",
    image:
      "https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJlZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    value: "four",
    pronunciation: "foor",
    image:
      "https://images.unsplash.com/photo-1580892934698-cd589f9538a4?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    value: "five",
    pronunciation: "fīvv",
    image:
      "https://plus.unsplash.com/premium_photo-1669349127530-23d9e3dab307?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    value: "bark",
    pronunciation: "bark",
    image:
      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnljaWN3N2s3cTllM2ZvODRzdHd1MmwzZzBjd3V2c2d6ZjV3MXdmdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oGRFIjETeuYgyLyo0/giphy.webp",
  },
  {
    value: "ball",
    pronunciation: "boll",
    image:
      "https://plus.unsplash.com/premium_photo-1709589145461-4797b4e80e9c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    value: "bear",
    pronunciation: "beer",
    image:
      "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExa280MXNheDNoenBudWtiZnkxNXEyZnl0dDJpb2NsaWFhYXBmOTc4dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QEIC6GZIEGStO/giphy.webp",
  },
  {
    value: "bird",
    pronunciation: "brrd",
    image:
      "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3o4cWU2b21jeG91dDdiYmd3aXFheTc4ZWhkY2ZjaXh5a29ic2w3NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WXgQucWm9SUHm/giphy.webp",
  },
  {
    value: "snow",
    pronunciation: "snōw",
    image:
      "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2Nwb2VqZnA1dHQ1am5kM2t3bHNiMmptMjA3M3p2N20yem03b2o5eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/14uJKhQMZ1wLfO/giphy.webp",
  },
  {
    value: "rain",
    pronunciation: "rāān",
    image:
      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExanZ2MTAwamVuNDE1amgyMTMzYjhicXpsa3d6czdlemtyZjJiaDh1ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o85xsNYU6Rlnw9cly/giphy.webp",
  },
  {
    value: "boat",
    pronunciation: "bōōt",
    image:
      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWxlZjBweXFoNXRhY3p1NGt4OW12ajZseWhzcXo2OHZxbXpqMmptayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iKOcmnyTJ3Daw/giphy.webp",
  },
];

const FIVE_LETTER_WORDS = [
  {
    value: "apple",
    pronunciation: "appll",
    image:
      "https://plus.unsplash.com/premium_photo-1661322640130-f6a1e2c36653?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    value: "house",
    pronunciation: "hauss",
    image:
      "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    value: "happy",
    image:
      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHVvaXJ3Mm0wMHRrdHRhOWxkN3YycnRqaHVkcmIyenBiOGIwaGk1bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fPRwBcYd71Lox1v7p2/giphy.webp",
  },
  {
    value: "bikes",
    pronunciation: "bīkss",
    image:
      "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3lrNzI4cDA2N3Jobzg0dTd0b2NydTcxcGtqZGIxc2FydXdnNHN4ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/q9XePYwXATVa53K899/giphy.webp",
  },
  {
    value: "quick",
    pronunciation: "kuikk",
    image:
      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHdydXIwcjRoc2RueGlub2duanRsYnVwNmpzaGpxNWRobmZndXdveiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VIEsDrchn6SQ62MoVc/giphy.webp",
  },
  {
    value: "bison",
    pronunciation: "bīsnn",
    image:
      "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHo3MGR2NzF0YmNwM2I2aXJtdGRlbWhhbXJ6eW5xMTRqMzZvYm44NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2NXKAc1o9w2rW1uZE6/giphy.webp",
  },
  {
    value: "nurse",
    pronunciation: "norss",
    image:
      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXJwOWQ1aTB2ZXdsajN1bDZheHltbmltanJsdnRuMmxwOTFwb2o3biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6R27TTGsfTbRRLKanA/giphy.webp",
  },
  {
    value: "mouse",
    pronunciation: "mauss",
    image:
      "https://plus.unsplash.com/premium_photo-1667066432588-9497038b21f9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    value: "water",
    pronunciation: "wotar",
    image:
      "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDV2OHdrYzlqcnh6OHkxYnpmdHNjMmFsN3BibDQyemFweGxlNXc4aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/h6x0ROdzJy4TKyUu1b/giphy.webp",
  },
  {
    value: "train",
    pronunciation: "trāān",
    image:
      "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3ZpNWJ3bmE0dG9rd2piOTBoM3NqbGd6YzQ0OWY1c2pmcjIyODh1YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IAgKhlQ9fg30A/giphy.webp",
  },
  {
    value: "plane",
    pronunciation: "plānn",
    image:
      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2FtaHJkZmRkb2c3N2g5YmppaHdzZ2ZxaTU3YmJtZ2E0M2RpOTA2eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xqGstZXPv7V91mdwGA/giphy.webp",
  },
  {
    value: "light",
    pronunciation: "lìììt",
    image:
      "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmk0N2h6MGd4emNjdWc1aHNhdXB0NXh1dm4xc2poOGozaDVoNzRzbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2JebisijdzVL2Cqs/giphy.webp",
  },
];

const SIX_LETTER_WORDS = [
  {
    value: "jungle",
    pronunciation: "jongll",
    image:
      "https://plus.unsplash.com/premium_photo-1687428554400-3ebabab7de29?q=80&w=2789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    value: "banana",
    pronunciation: "banana",
    image:
      "https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=2791&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    value: "bubble",
    pronunciation: "bobbll",
    image:
      "https://images.unsplash.com/photo-1554566490-b43da2d4c8fe?q=80&w=2767&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    value: "jaguar",
    pronunciation: "jaguaa",
    image:
      "https://plus.unsplash.com/premium_photo-1664304400278-8152cba3da20?q=80&w=2976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    value: "monkey",
    pronunciation: "monkii",
    image:
      "https://images.unsplash.com/photo-1516708274537-6f91e34ccaf2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    value: "eleven",
    pronunciation: "ilevnn",
    image:
      "https://images.unsplash.com/photo-1722411487086-38c61ce73a9c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVsZXZlbnxlbnwwfHwwfHx8MA%3D%3D",
  },
];

export const WORDS = {
  2: TWO_LETTER_WORDS,
  3: [...TWO_LETTER_WORDS, ...THREE_LETTER_WORDS],
  4: [...TWO_LETTER_WORDS, ...THREE_LETTER_WORDS, ...FOUR_LETTER_WORDS],
  5: [...THREE_LETTER_WORDS, ...FOUR_LETTER_WORDS, ...FIVE_LETTER_WORDS],
  6: [...FOUR_LETTER_WORDS, ...FIVE_LETTER_WORDS, ...SIX_LETTER_WORDS],
};

export type Levels = keyof typeof WORDS;

export const ALL_WORDS = [
  ...TWO_LETTER_WORDS,
  ...THREE_LETTER_WORDS,
  ...FOUR_LETTER_WORDS,
  ...FIVE_LETTER_WORDS,
  ...SIX_LETTER_WORDS,
];
