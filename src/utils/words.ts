/**
 * In pronunciations,
 * The long "a" sound is represented as "ā"
 * The long "e" sound is represented as "ē"
 * The long "i" sound is represented as "ī"
 * The long "o" sound is represented as "ō"
 * The long "u" sound is represented as "ū"
 * The "ch" sound is represented as "č"
 * The "sh" sound is represented as "š"
 * Every other sound is represented as its short sound
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
  {
    value: "dye",
    pronunciation: "dīī",
    image:
      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDFyMWs1Zzg5dGU2eDVpZWdqc3doa29pcWl1dG1raG0zenFvZXE0NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jUJVyEkGvCuIgsmAxf/giphy.gif",
  },
  {
    value: "zap",
    pronunciation: "zap",
    image:
      "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3h0bzV6cWQ4ajUxY2JqcDlhcXJjYXQweXNkanZ0aW15NHRzZm5vNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/y5oetElpzdbToijNGL/giphy.gif",
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
  {
    value: "stars",
    pronunciation: "stars",
    image:
      "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2M2NzhpNzAzajk4OHVkMTV4bjNranBiZ3BmZmtocHBtcjNqcDJ3YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/u1ebtrL6vnKf2dYfYr/giphy.webp",
  },
  {
    value: "cram",
    pronunciation: "cram",
    image:
      "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDY1NG9saHlzcDZzbTIwbmQyb3JpazBoYjAwdXIzOXgxNzg4ZDkxYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tZaFa1m8UfzXy/giphy.gif",
  },
  {
    value: "flop",
    pronunciation: "flop",
    image:
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGsycHEweGs2aTljbzlqYjg5NDA3bDFxaTA1dHFoM3hkdWUxZWFkbCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/wKdJuDV8eoa569ti9t/giphy.gif",
  },
  {
    value: "glow",
    pronunciation: "glōw",
    image:
      "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3eHd1MDVhbmo4eGxoenVrYmo4a3k0NTEzcWpuZmtiMDcyYW4yMnV0NiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xTiQytEgc9mGZwFBMQ/giphy.gif",
  },
  {
    value: "kind",
    pronunciation: "kīnd",
    image:
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExenVvYXQ4ZjNwdzhqNXo3MmRmeTJwbnRhaXA4YW9pOHBseG90MHlybSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/yTrk5kRx2sKU2fowK0/giphy.gif",
  },
  {
    value: "lick",
    pronunciation: "licc",
    image:
      "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3dmgyM3Uza3JmbHpjM3Q0OGoxZzhlNnc1cGYyeXI2OHBwMW9jMW9tZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/89AAoZicNaRsA/giphy.gif",
  },
  {
    value: "melt",
    pronunciation: "melt",
    image:
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmpubmgzbXRtdDV4c3M1NHFheWFsNzRhN3RsdG0zOXpicmwwM2I2aSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/4vGqobN49fU81m9lSu/giphy.gif",
  },
  {
    value: "odor",
    pronunciation: "ōdor",
    image:
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExajFlM2J0dXNoNTdtdzNxZzNmN3k5eXhobmpsaW1xODk0NGpvbndwZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3oz8xKaVomTm8vI3uw/giphy.gif",
  },
  {
    value: "wave",
    pronunciation: "wāvv",
    image:
      "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTJya2lld3VxamJrbWtvajJncGhhNjUxcTNxNWxpbDBwZ2J2dXljbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LPgFwCQg4HQBvPihcn/giphy.gif",
  },
  {
    value: "yawn",
    pronunciation: "yoon",
    image:
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNG5jbjkzeXV1enpxczd6eGYxN2gyOTV3MXFyN3hnbTVzcm80OWlwYSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/TfWhFbURIirNegNN4t/giphy.gif",
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
  {
    value: "three",
    pronunciation: "thrii",
    image:
      "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZThuZjllOXVvemI3OGJ1djJ4aDkxZ2dmamZmZ2Z5bnM0OXlrNWdzcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fYHEmYNQzl0mWjzdoA/giphy.webp",
  },
  {
    value: "paper",
    pronunciation: "pāpar",
    image:
      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGEyeDVmaGUzZnh5YmppbmhuNmx4cnBpdnJqbnI4bXBmY3dkMW1mYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gbDsm8Hn7aIuc/giphy.webp",
  },
  {
    value: "climb",
    pronunciation: "clīmb",
    image:
      "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjJjd25jZDJ0cTl3emJzeG93dGd5Zm1jMnd5enlvdXdneHN3c205dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/29HWHVyD4wB3MRmtIg/giphy.webp",
  },
  {
    value: "dream",
    pronunciation: "driim",
    image:
      "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3BnZmF0bmdpaDNsaGZvNjJoanNqeWtwbTJsYmo0ajFqaWl4amoxcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2SpUc5nqKBG79Mti/giphy.webp",
  },
  {
    value: "alarm",
    pronunciation: "alarm",
    image:
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmtxeTE2djEydGRoMDU4YmIwaXl5c3hwdGswanhhbXIxN3I0dHVuZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/loP4CZ8mX1yhwztQWR/giphy.gif",
  },
  {
    value: "belch",
    pronunciation: "belčč",
    image:
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGxiNWJidnJuNG51OTRkZHFwNmc5Nnhld2F2eXV5enZkcDl2cjhkeCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XwiCpwGgyolOIeA4Iw/giphy.gif",
  },
  {
    value: "blend",
    pronunciation: "blend",
    image:
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnliemFxM2xmYzVrYTVvZGkyeTBqbGg1NHQ2YWY4MjFzbXRwd2kxYSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/WTdOnTQJwTHmhifwGE/giphy.gif",
  },
  {
    value: "clumsy",
    pronunciation: "clomsy",
    image:
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3gzNzdkc2FnZ2cxZXM4dG81OTJ3Nnl2enNiMmx6bzBqeWQza3k0ZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/dJEMs13SrsiuA/giphy.gif",
  },
  {
    value: "dizzy",
    pronunciation: "dizzz",
    image:
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdm5lNWNrd2Nzdmg1bGY1cjdubnpxeXdiNzRhcWIzaTV3dmxqaGd4OCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/oc15axztWRKuRpgvct/giphy.gif",
  },
  {
    value: "float",
    pronunciation: "float",
    image:
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGZia2lnMDVidm12anpja2QyMzJqcm9iaHVhbTc2M3d5Y2RlY2VuciZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l41lFiBrHIPUuxscg/giphy.gif",
  },
  {
    value: "handy",
    pronunciation: "handy",
    image:
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjNxbjJ0dTJ4dXR4OXl5cWJ2dWxhaWczbGJkNDl1bmk1Y3g5bG1tZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/MecSv0s6Z3mdBWrYtY/giphy.gif",
  },
  {
    value: "itchy",
    pronunciation: "ičččy",
    image:
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGhtcXNuMjlvYmxmZWVoY25oaW1wd2l3NmNxYXAzenVtZzZoZWlnciZlcD12MV9naWZzX3NlYXJjaCZjdD1n/EXEiGlZdr6eSFakl2R/giphy.gif",
  },
  {
    value: "nosey",
    pronunciation: "nōsii",
    image:
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2x1OWs3NThqczh6MWxiaDJjYnhtc3dxeGE4eGsyemo1b284NmFjeSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VMHangSajZV6yiC9ZV/giphy.gif",
  },
  {
    value: "prank",
    pronunciation: "prank",
    image:
      "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3d29kY2V6Mm5mZWE1cmRpcWFoOWhiZHhjZ2o5aGVjZWcyMjhuMXpnNyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/lVFaP1LfwOcyIaiSux/giphy.gif",
  },
  {
    value: "scary",
    pronunciation: "scery",
    image:
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3g2YjJzOTFuZnRkbTRsc3g0ZjVtZGcwaGt6cmVjdzRhdXFzOTBhNyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/2fXvNjhnat6yk/giphy.gif",
  },
  {
    value: "steam",
    pronunciation: "stiim",
    image:
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3cxa3N2dnZsYmowbTd3OXl0MnM2aXNkM2FhZndibm5keGs4cmR3eiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ee934C7BCxPQi5scNl/giphy.gif",
  },
  {
    value: "timid",
    pronunciation: "timid",
    image:
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZW53ZHp2dDdmdmNqcG9jdW1wZHM4NHhjdmVkMnV5dW1mdGtoajlyciZlcD12MV9naWZzX3NlYXJjaCZjdD1n/MM0JCkiFw3We3zJlzX/giphy.gif",
  },
  {
    value: "yodel",
    pronunciation: "yōdel",
    image:
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWMxYWRsdDdqd2pmejhudmUyejZpY3kxN25jZXZ0ajgxYXNyYnM0diZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VdAvVcQLJDwKKDUDJR/giphy.gif",
  },
  {
    value: "yucky",
    pronunciation: "yokky",
    image:
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWMxYWRsdDdqd2pmejhudmUyejZpY3kxN25jZXZ0ajgxYXNyYnM0diZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VdAvVcQLJDwKKDUDJR/giphy.gif",
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
    pronunciation: "jaguar",
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
  {
    value: "turtle",
    pronunciation: "tortll",
    image:
      "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2NndWUxNHh4bGw0OHM3dDQ1YWRibmpqb2Npd2RwYjB2OXp3eHJzaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UWhe73bSwu8XR6xdem/giphy.webp",
  },
  {
    value: "bellow",
    pronunciation: "bellōw",
    image: "",
  },
  {
    value: "bounce",
    pronunciation: "baunss",
    image: "",
  },
  {
    value: "clumsy",
    pronunciation: "clomsy",
    image: "",
  },
  {
    value: "fluffy",
    pronunciation: "floffy",
    image: "",
  },
  {
    value: "gargle",
    pronunciation: "gargll",
    image: "",
  },
  {
    value: "juggle",
    pronunciation: "joggll",
    image: "",
  },
  {
    value: "jumble",
    pronunciation: "jombll",
    image: "",
  },
  {
    value: "nibble",
    pronunciation: "nibbll",
    image: "",
  },
  {
    value: "pester",
    pronunciation: "pestar",
    image: "",
  },
  {
    value: "rescue",
    pronunciation: "rescyu",
    image: "",
  },
  {
    value: "ruckus",
    pronunciation: "rokkos",
    image: "",
  },
  {
    value: "shadow",
    pronunciation: "shadōw",
    image: "",
  },
  {
    value: "sticky",
    pronunciation: "stikky",
    image: "",
  },
  {
    value: "tangle",
    pronunciation: "tangll",
    image: "",
  },
  {
    value: "tickle",
    pronunciation: "ticcll",
    image: "",
  },
  {
    value: "vacuum",
    pronunciation: "vacyum",
    image: "",
  },
  {
    value: "wiggle",
    pronunciation: "wiggll",
    image: "",
  },
  {
    value: "zigzag",
    pronunciation: "zigzag",
    image: "",
  },
  {
    value: "zipper",
    pronunciation: "zzppar",
    image: "",
  },
];

const SEVEN_LETTER_WORDS = [
  {
    value: "courage",
    pronunciation: "coorāgg",
    image: "",
  },
  {
    value: "between",
    pronunciation: "bitwiin",
    image: "",
  },
  {
    value: "forgive",
    pronunciation: "forgivv",
    image: "",
  },
  {
    value: "harvest",
    pronunciation: "harvest",
    image: "",
  },
  {
    value: "journey",
    pronunciation: "joornyy",
    image: "",
  },
  {
    value: "magnify",
    pronunciation: "magnifī",
    image: "",
  },
  {
    value: "naughty",
    pronunciation: "nooooty",
    image: "",
  },
  {
    value: "quarrel",
    pronunciation: "kworrel",
    image: "",
  },
  {
    value: "quartet",
    pronunciation: "kwortet",
    image: "",
  },
  {
    value: "recycle",
    pronunciation: "risīkll",
    image: "",
  },
  {
    value: "squeeze",
    pronunciation: "squiizz",
    image: "",
  },
  {
    value: "whisper",
    pronunciation: "wwispar",
    image: "",
  },
];

const EIGHT_LETTER_WORDS = [
  {
    value: "artistic",
    pronunciation: "artistic",
    image: "",
  },
  {
    value: "decorate",
    pronunciation: "decorātt",
    image: "",
  },
  {
    value: "demolish",
    pronunciation: "dimolišš",
    image: "",
  },
  {
    value: "disguise",
    pronunciation: "disgīīss",
    image: "",
  },
  {
    value: "exercise",
    pronunciation: "exercīss",
    image: "",
  },
  {
    value: "famished",
    pronunciation: "famiššdd",
    image: "",
  },
  {
    value: "flexible",
    pronunciation: "flexibll",
    image: "",
  },
  {
    value: "graceful",
    pronunciation: "grāssful",
    image: "",
  },
  {
    value: "lopsided",
    pronunciation: "lopsīded",
    image: "",
  },
  {
    value: "magician",
    pronunciation: "magišian",
    image: "",
  },
  {
    value: "multiply",
    pronunciation: "moltiplī",
    image: "",
  },
  {
    value: "musician",
    pronunciation: "musišian",
    image: "",
  },
  {
    value: "portrait",
    pronunciation: "portrāāt",
    image: "",
  },
  {
    value: "powerful",
    pronunciation: "powarful",
    image: "",
  },
  {
    value: "question",
    pronunciation: "qwestyon",
    image: "",
  },
  {
    value: "squeegee",
    pronunciation: "skwiigii",
    image: "",
  },
  {
    value: "submerge",
    pronunciation: "sobmergg",
    image: "",
  },
  {
    value: "umbrella",
    pronunciation: "umbrella",
    image: "",
  },
];

const NINE_LETTER_WORDS = [
  {
    value: "celebrate",
    pronunciation: "selibrātt",
    image: "",
  },
  {
    value: "cooperate",
    pronunciation: "coōperātt",
    image: "",
  },
  {
    value: "beautiful",
    pronunciation: "byuutiful",
    image: "",
  },
  {
    value: "fireworks",
    pronunciation: "fīrrworxx",
    image: "",
  },
  {
    value: "hilarious",
    pronunciation: "hilarioos",
    image: "",
  },
  {
    value: "invention",
    pronunciation: "invenšoon",
    image: "",
  },
  {
    value: "invisible",
    pronunciation: "invisibll",
    image: "",
  },
  {
    value: "minuscule",
    pronunciation: "minuskull",
    image: "",
  },
  {
    value: "nightmare",
    pronunciation: "nīīītmerr",
    image: "",
  },
  {
    value: "rainstorm",
    pronunciation: "rāānstorm",
    image: "",
  },
  {
    value: "vegetable",
    pronunciation: "vegitābll",
    image: "",
  },
  {
    value: "xylophone",
    pronunciation: "xīlōffōnn",
    image: "",
  },
];

const TEN_LETTER_WORDS = [
  {
    value: "camouflage",
    pronunciation: "camōōflagg",
    image: "",
  },
  {
    value: "contagious",
    pronunciation: "contāgioss",
    image: "",
  },
  {
    value: "experiment",
    pronunciation: "experiment",
    image: "",
  },
  {
    value: "gargantuan",
    pronunciation: "gargantuan",
    image: "",
  },
  {
    value: "reflection",
    pronunciation: "riflecšion",
    image: "",
  },
  {
    value: "refreshing",
    pronunciation: "rifrešsinn",
    image: "",
  },
  {
    value: "stupendous",
    pronunciation: "stupendoss",
    image: "",
  },
  {
    value: "underneath",
    pronunciation: "undarniith",
    image: "",
  },
];

const ELEVEN_LETTER_WORDS = [
  {
    value: "contraption",
    pronunciation: "contrapšion",
    image: "",
  },
  {
    value: "electricity",
    pronunciation: "ilectricity",
    image: "",
  },
  {
    value: "scrumptious",
    pronunciation: "scrumpšioss",
    image: "",
  },
];

export const WORDS = {
  2: [...TWO_LETTER_WORDS, ...THREE_LETTER_WORDS],
  3: [...TWO_LETTER_WORDS, ...THREE_LETTER_WORDS, ...FOUR_LETTER_WORDS],
  4: [
    ...TWO_LETTER_WORDS,
    ...THREE_LETTER_WORDS,
    ...FOUR_LETTER_WORDS,
    ...FIVE_LETTER_WORDS,
    ...SIX_LETTER_WORDS,
  ],
  5: [
    ...THREE_LETTER_WORDS,
    ...FOUR_LETTER_WORDS,
    ...FIVE_LETTER_WORDS,
    ...SIX_LETTER_WORDS,
    ...SEVEN_LETTER_WORDS,
    ...EIGHT_LETTER_WORDS,
  ],
  6: [
    ...FOUR_LETTER_WORDS,
    ...FIVE_LETTER_WORDS,
    ...SIX_LETTER_WORDS,
    ...SEVEN_LETTER_WORDS,
    ...EIGHT_LETTER_WORDS,
    ...NINE_LETTER_WORDS,
    ...TEN_LETTER_WORDS,
    ...ELEVEN_LETTER_WORDS,
  ],
};

export type Levels = keyof typeof WORDS;

export const ALL_WORDS = [
  ...TWO_LETTER_WORDS,
  ...THREE_LETTER_WORDS,
  ...FOUR_LETTER_WORDS,
  ...FIVE_LETTER_WORDS,
  ...SIX_LETTER_WORDS,
];
