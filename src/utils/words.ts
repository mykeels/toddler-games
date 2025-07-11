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

import { getBaseUrl } from './url';

const baseUrl = getBaseUrl();
const imagesBaseUrl = `${baseUrl}/images`;

export const SPECIAL_PHONICS = {
  ā: 'a',
  ē: 'e',
  ī: 'i',
  ō: 'o',
  ū: 'u',
  č: 'ch',
  š: 'sh',
};

const TWO_LETTER_WORDS = [
  {
    value: 'on',
    image: `${imagesBaseUrl}/dazzelle-turns-on-the-light.png`,
  },
  {
    value: 'up',
    pronunciation: 'op',
    image: `${imagesBaseUrl}/dazzelle-points-up.png`,
  },
  {
    value: 'go',
    pronunciation: 'gō',
    image: `${imagesBaseUrl}/dazzle-holds-up-a-go-sign.png`,
  },
  {
    value: 'no',
    pronunciation: 'nō',
    image: `${imagesBaseUrl}/dazzelle-says-no.png`,
  },
  {
    value: 'me',
    pronunciation: 'mi',
    image: `${imagesBaseUrl}/dazzelle-says-me.png`,
  },
];

const THREE_LETTER_WORDS = [
  {
    value: 'you',
    pronunciation: 'yuu',
    image: `${imagesBaseUrl}/dazzle-points-at-you.png`,
  },
  {
    value: 'yes',
    image: `${imagesBaseUrl}/dazzelle-says-yes.png`,
  },
  {
    value: 'off',
    image: `${imagesBaseUrl}/dazzelle-turns-off-the-light.png`,
  },
  {
    value: 'bed',
    image: `${imagesBaseUrl}/dazzle-in-bed.png`,
  },
  {
    value: 'dog',
    image: `${imagesBaseUrl}/dazzle-walks-a-dog.png`,
  },
  {
    value: 'cat',
    image: `${imagesBaseUrl}/dazzle-pets-a-cat.png`,
  },
  {
    value: 'sun',
    pronunciation: 'son',
    image: `${imagesBaseUrl}/dazzle-in-sun.png`,
  },
  {
    value: 'big',
    pronunciation: 'big',
    image: `${imagesBaseUrl}/dazzelle-is-big.png`,
  },
  {
    value: 'boy',
    pronunciation: 'boy',
    image:
      'https://plus.unsplash.com/premium_photo-1672243483821-5d3855a21809?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    value: 'zap',
    pronunciation: 'zap',
    image:
      'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3h0bzV6cWQ4ajUxY2JqcDlhcXJjYXQweXNkanZ0aW15NHRzZm5vNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/y5oetElpzdbToijNGL/giphy.gif',
  },
];

const FOUR_LETTER_WORDS = [
  {
    value: 'book',
    pronunciation: 'buuk',
    image: `${imagesBaseUrl}/dazzle-reads-a-book.png`,
  },
  {
    value: 'look',
    pronunciation: 'luuk',
    image: `${imagesBaseUrl}/dazzelle-looks.png`,
  },
  {
    value: 'good',
    pronunciation: 'guud',
    image:
      'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGExdGFma2FkOWdvemJ1azdpeXg4YmYyeGVsMm53N2s0eGNkZDhtbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NDjtmyXAAUWKQ/200.webp',
  },
  {
    value: 'home',
    pronunciation: 'hōmm',
    image:
      'https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    value: 'tree',
    pronunciation: 'trii',
    image: `${imagesBaseUrl}/dazzle-and-a-tree.png`,
  },
  {
    value: 'four',
    pronunciation: 'foor',
    image: `${imagesBaseUrl}/dazzle-juggles-four-balls.png`,
  },
  {
    value: 'five',
    pronunciation: 'fīvv',
    image: `${imagesBaseUrl}/dazzle-juggles-five-stars.png`,
  },
  {
    value: 'bark',
    pronunciation: 'bark',
    image: `${imagesBaseUrl}/dazzelle-with-a-barking-dog.png`,
  },
  {
    value: 'ball',
    pronunciation: 'boll',
    image: `${imagesBaseUrl}/dazzle-plays-with-a-ball.png`,
  },
  {
    value: 'bear',
    pronunciation: 'beer',
    image: `${imagesBaseUrl}/dazzle-sees-a-bear.png`,
  },
  {
    value: 'bird',
    pronunciation: 'brrd',
    image: `${imagesBaseUrl}/dazzle-pets-a-bird.png`,
  },
  {
    value: 'snow',
    pronunciation: 'snōw',
    image: `${imagesBaseUrl}/dazzle-in-snow.png`,
  },
  {
    value: 'rain',
    pronunciation: 'rāān',
    image: `${imagesBaseUrl}/dazzle-in-the-rain.png`,
  },
  {
    value: 'boat',
    pronunciation: 'bōōt',
    image:
      'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWxlZjBweXFoNXRhY3p1NGt4OW12ajZseWhzcXo2OHZxbXpqMmptayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iKOcmnyTJ3Daw/giphy.webp',
  },
  {
    value: 'stars',
    pronunciation: 'stars',
    image:
      'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2M2NzhpNzAzajk4OHVkMTV4bjNranBiZ3BmZmtocHBtcjNqcDJ3YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/u1ebtrL6vnKf2dYfYr/giphy.webp',
  },
  {
    value: 'cram',
    pronunciation: 'cram',
    image:
      'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDY1NG9saHlzcDZzbTIwbmQyb3JpazBoYjAwdXIzOXgxNzg4ZDkxYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tZaFa1m8UfzXy/giphy.gif',
  },
  {
    value: 'flop',
    pronunciation: 'flop',
    image:
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGsycHEweGs2aTljbzlqYjg5NDA3bDFxaTA1dHFoM3hkdWUxZWFkbCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/wKdJuDV8eoa569ti9t/giphy.gif',
  },
  {
    value: 'glow',
    pronunciation: 'glōw',
    image:
      'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3eHd1MDVhbmo4eGxoenVrYmo4a3k0NTEzcWpuZmtiMDcyYW4yMnV0NiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xTiQytEgc9mGZwFBMQ/giphy.gif',
  },
  {
    value: 'kind',
    pronunciation: 'kīnd',
    image:
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExenVvYXQ4ZjNwdzhqNXo3MmRmeTJwbnRhaXA4YW9pOHBseG90MHlybSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/yTrk5kRx2sKU2fowK0/giphy.gif',
  },
  {
    value: 'lick',
    pronunciation: 'licc',
    image: `${imagesBaseUrl}/dazzle-licks-ice-cream.png`,
  },
  {
    value: 'melt',
    pronunciation: 'melt',
    image: `${imagesBaseUrl}/dazzelle-with-melting-ice-cream.png`,
  },
  {
    value: 'odor',
    pronunciation: 'ōdor',
    image:
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExajFlM2J0dXNoNTdtdzNxZzNmN3k5eXhobmpsaW1xODk0NGpvbndwZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3oz8xKaVomTm8vI3uw/giphy.gif',
  },
  {
    value: 'wave',
    pronunciation: 'wāvv',
    image: `${imagesBaseUrl}/dazzle-waves.png`,
  },
  {
    value: 'yawn',
    pronunciation: 'yoon',
    image: `${imagesBaseUrl}/dazzle-yawns.png`,
  },
];

const FIVE_LETTER_WORDS = [
  {
    value: 'apple',
    pronunciation: 'appll',
    image:
      'https://plus.unsplash.com/premium_photo-1661322640130-f6a1e2c36653?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    value: 'house',
    pronunciation: 'hauss',
    image: `${imagesBaseUrl}/dazzle-by-a-house.png`,
  },
  {
    value: 'happy',
    image:
      'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHVvaXJ3Mm0wMHRrdHRhOWxkN3YycnRqaHVkcmIyenBiOGIwaGk1bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fPRwBcYd71Lox1v7p2/giphy.webp',
  },
  {
    value: 'bikes',
    pronunciation: 'bīkss',
    image:
      'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3lrNzI4cDA2N3Jobzg0dTd0b2NydTcxcGtqZGIxc2FydXdnNHN4ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/q9XePYwXATVa53K899/giphy.webp',
  },
  {
    value: 'quick',
    pronunciation: 'kuikk',
    image:
      'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHdydXIwcjRoc2RueGlub2duanRsYnVwNmpzaGpxNWRobmZndXdveiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VIEsDrchn6SQ62MoVc/giphy.webp',
  },
  {
    value: 'bison',
    pronunciation: 'bīsnn',
    image:
      'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHo3MGR2NzF0YmNwM2I2aXJtdGRlbWhhbXJ6eW5xMTRqMzZvYm44NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2NXKAc1o9w2rW1uZE6/giphy.webp',
  },
  {
    value: 'nurse',
    pronunciation: 'norss',
    image:
      'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXJwOWQ1aTB2ZXdsajN1bDZheHltbmltanJsdnRuMmxwOTFwb2o3biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6R27TTGsfTbRRLKanA/giphy.webp',
  },
  {
    value: 'mouse',
    pronunciation: 'mauss',
    image:
      'https://plus.unsplash.com/premium_photo-1667066432588-9497038b21f9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    value: 'water',
    pronunciation: 'wotar',
    image:
      'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDV2OHdrYzlqcnh6OHkxYnpmdHNjMmFsN3BibDQyemFweGxlNXc4aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/h6x0ROdzJy4TKyUu1b/giphy.webp',
  },
  {
    value: 'train',
    pronunciation: 'trāān',
    image:
      'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3ZpNWJ3bmE0dG9rd2piOTBoM3NqbGd6YzQ0OWY1c2pmcjIyODh1YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IAgKhlQ9fg30A/giphy.webp',
  },
  {
    value: 'plane',
    pronunciation: 'plānn',
    image:
      'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2FtaHJkZmRkb2c3N2g5YmppaHdzZ2ZxaTU3YmJtZ2E0M2RpOTA2eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xqGstZXPv7V91mdwGA/giphy.webp',
  },
  {
    value: 'light',
    pronunciation: 'līīīt',
    image:
      'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmk0N2h6MGd4emNjdWc1aHNhdXB0NXh1dm4xc2poOGozaDVoNzRzbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2JebisijdzVL2Cqs/giphy.webp',
  },
  {
    value: 'three',
    pronunciation: 'thrii',
    image:
      'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZThuZjllOXVvemI3OGJ1djJ4aDkxZ2dmamZmZ2Z5bnM0OXlrNWdzcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fYHEmYNQzl0mWjzdoA/giphy.webp',
  },
  {
    value: 'paper',
    pronunciation: 'pāpar',
    image:
      'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGEyeDVmaGUzZnh5YmppbmhuNmx4cnBpdnJqbnI4bXBmY3dkMW1mYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gbDsm8Hn7aIuc/giphy.webp',
  },
  {
    value: 'climb',
    pronunciation: 'clīmb',
    image:
      'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjJjd25jZDJ0cTl3emJzeG93dGd5Zm1jMnd5enlvdXdneHN3c205dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/29HWHVyD4wB3MRmtIg/giphy.webp',
  },
  {
    value: 'dream',
    pronunciation: 'driim',
    image:
      'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3BnZmF0bmdpaDNsaGZvNjJoanNqeWtwbTJsYmo0ajFqaWl4amoxcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2SpUc5nqKBG79Mti/giphy.webp',
  },
  {
    value: 'alarm',
    pronunciation: 'alarm',
    image:
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmtxeTE2djEydGRoMDU4YmIwaXl5c3hwdGswanhhbXIxN3I0dHVuZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/loP4CZ8mX1yhwztQWR/giphy.gif',
  },
  {
    value: 'belch',
    pronunciation: 'belčč',
    image:
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGxiNWJidnJuNG51OTRkZHFwNmc5Nnhld2F2eXV5enZkcDl2cjhkeCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XwiCpwGgyolOIeA4Iw/giphy.gif',
  },
  {
    value: 'blend',
    pronunciation: 'blend',
    image:
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnliemFxM2xmYzVrYTVvZGkyeTBqbGg1NHQ2YWY4MjFzbXRwd2kxYSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/WTdOnTQJwTHmhifwGE/giphy.gif',
  },
  {
    value: 'clumsy',
    pronunciation: 'clomsy',
    image:
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3gzNzdkc2FnZ2cxZXM4dG81OTJ3Nnl2enNiMmx6bzBqeWQza3k0ZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/dJEMs13SrsiuA/giphy.gif',
  },
  {
    value: 'dizzy',
    pronunciation: 'dizzz',
    image:
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdm5lNWNrd2Nzdmg1bGY1cjdubnpxeXdiNzRhcWIzaTV3dmxqaGd4OCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/oc15axztWRKuRpgvct/giphy.gif',
  },
  {
    value: 'float',
    pronunciation: 'flōōt',
    image:
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGZia2lnMDVidm12anpja2QyMzJqcm9iaHVhbTc2M3d5Y2RlY2VuciZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l41lFiBrHIPUuxscg/giphy.gif',
  },
  {
    value: 'handy',
    pronunciation: 'handy',
    image:
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjNxbjJ0dTJ4dXR4OXl5cWJ2dWxhaWczbGJkNDl1bmk1Y3g5bG1tZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/MecSv0s6Z3mdBWrYtY/giphy.gif',
  },
  {
    value: 'itchy',
    pronunciation: 'ičččy',
    image:
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGhtcXNuMjlvYmxmZWVoY25oaW1wd2l3NmNxYXAzenVtZzZoZWlnciZlcD12MV9naWZzX3NlYXJjaCZjdD1n/EXEiGlZdr6eSFakl2R/giphy.gif',
  },
  {
    value: 'nosey',
    pronunciation: 'nōsii',
    image:
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2x1OWs3NThqczh6MWxiaDJjYnhtc3dxeGE4eGsyemo1b284NmFjeSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VMHangSajZV6yiC9ZV/giphy.gif',
  },
  {
    value: 'prank',
    pronunciation: 'prank',
    image:
      'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3d29kY2V6Mm5mZWE1cmRpcWFoOWhiZHhjZ2o5aGVjZWcyMjhuMXpnNyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/lVFaP1LfwOcyIaiSux/giphy.gif',
  },
  {
    value: 'scary',
    pronunciation: 'scery',
    image:
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3g2YjJzOTFuZnRkbTRsc3g0ZjVtZGcwaGt6cmVjdzRhdXFzOTBhNyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/2fXvNjhnat6yk/giphy.gif',
  },
  {
    value: 'steam',
    pronunciation: 'stiim',
    image:
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3cxa3N2dnZsYmowbTd3OXl0MnM2aXNkM2FhZndibm5keGs4cmR3eiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ee934C7BCxPQi5scNl/giphy.gif',
  },
  {
    value: 'timid',
    pronunciation: 'timid',
    image:
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZW53ZHp2dDdmdmNqcG9jdW1wZHM4NHhjdmVkMnV5dW1mdGtoajlyciZlcD12MV9naWZzX3NlYXJjaCZjdD1n/MM0JCkiFw3We3zJlzX/giphy.gif',
  },
  {
    value: 'yodel',
    pronunciation: 'yōdel',
    image:
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWMxYWRsdDdqd2pmejhudmUyejZpY3kxN25jZXZ0ajgxYXNyYnM0diZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VdAvVcQLJDwKKDUDJR/giphy.gif',
  },
  {
    value: 'yucky',
    pronunciation: 'yokky',
    image:
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2o0bDk0bnc1NzN1YWRoNThxcmRrMG1ncjg3Nmw2dTJ2b3Vqc3NsbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/khicG8Q0DywSc/giphy.gif',
  },
];

const SIX_LETTER_WORDS = [
  {
    value: 'jungle',
    pronunciation: 'jongll',
    image:
      'https://plus.unsplash.com/premium_photo-1687428554400-3ebabab7de29?q=80&w=2789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    value: 'banana',
    pronunciation: 'banana',
    image:
      'https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=2791&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    value: 'bubble',
    pronunciation: 'bobbll',
    image:
      'https://images.unsplash.com/photo-1554566490-b43da2d4c8fe?q=80&w=2767&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    value: 'jaguar',
    pronunciation: 'jaguar',
    image:
      'https://plus.unsplash.com/premium_photo-1664304400278-8152cba3da20?q=80&w=2976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    value: 'monkey',
    pronunciation: 'monkii',
    image:
      'https://images.unsplash.com/photo-1516708274537-6f91e34ccaf2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    value: 'eleven',
    pronunciation: 'ilevnn',
    image:
      'https://images.unsplash.com/photo-1722411487086-38c61ce73a9c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVsZXZlbnxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    value: 'turtle',
    pronunciation: 'tortll',
    image:
      'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2NndWUxNHh4bGw0OHM3dDQ1YWRibmpqb2Npd2RwYjB2OXp3eHJzaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UWhe73bSwu8XR6xdem/giphy.webp',
  },
  {
    value: 'bellow',
    pronunciation: 'bellōw',
    image:
      'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3c2s3bTVpbmowdm9weWE1eWUzanZlNzg4aHRxcWpzaHdmNzd1N2lyayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/2A5zHrIPvo8MNnkAXl/giphy.gif',
  },
  {
    value: 'bounce',
    pronunciation: 'baunss',
    image:
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDg2N3J0MGh0ZWtnbnJwbXA5ajdyNXBlMWZqd3F4aXlmMDJ1YTYzOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l0HlMhcc67eLP7oeA/giphy.gif',
  },
  {
    value: 'clumsy',
    pronunciation: 'clomsy',
    image:
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExemM2NTg5d3BwYzFlN3g3NWw4c3lxOHk0Z214cG5vbnYxYmpocjBxbyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/hh05KqdAkVTos/giphy.gif',
  },
  {
    value: 'fluffy',
    pronunciation: 'floffy',
    image:
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnExeTgyYmh6bXQ1cjhzeDN5a2M3Zzk4OTc2czdldnpkaHM2d2xwNSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/YkuzftfzdoPOE/giphy.gif',
  },
  {
    value: 'gargle',
    pronunciation: 'gargll',
    image:
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmY5ZzExNndyY2IzaThodXlucTZ2Z2xwcGVzYWt3MmJmdnY2ajF0MCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xTk2YI4CHaFOLbNVMQ/giphy.gif',
  },
  {
    value: 'juggle',
    pronunciation: 'joggll',
    image:
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHBpNW9mYzlwaWNsdHJ4OTBpbTY0d2xsanhibmlleXFydXN1NDEzOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/RyXv8qbbBxyOIM1X5y/giphy.gif',
  },
  {
    value: 'jumble',
    pronunciation: 'jombll',
    image:
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd21tM3IyZDd5MG4yczI2MWF5ODllNXh0cm13aXlpYmN4bGZ4ZnI2NiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/7NMVxStmJJg40sOb4y/giphy.gif',
  },
  {
    value: 'nibble',
    pronunciation: 'nibbll',
    image:
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWI1Nm5jaTFsM3doMmg4endnYzlkYXBwOWRqdWpkejE0d240eWhiaCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/LS35Jo0kZzO2lU75rV/giphy.gif',
  },
  {
    value: 'pester',
    pronunciation: 'pestar',
    image:
      'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3cHJkb3k1Ymx5dXc5YXhqdXY5aW02ZzgzM3N1MWRzZGNzZnJoZTM4ciZlcD12MV9naWZzX3NlYXJjaCZjdD1n/dn65vbCqM8IZzCpBmV/giphy.gif',
  },
  {
    value: 'rescue',
    pronunciation: 'rescūū',
    image:
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2ducjMzcmoxaHQ2ZWRtN2FkMW0zMjdvYW5rMWNtYnZobXB1OW1kdCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/5Fd9NV3yBn1RamHy9g/giphy.gif',
  },
  {
    value: 'ruckus',
    pronunciation: 'rokkos',
    image: '',
  },
  {
    value: 'shadow',
    pronunciation: 'shadōw',
    image:
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZW1lMTRvem1odnBkcHo1Y2Y2eXlncHp3MTN4ODJvOXhkOXRpYmdtcyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o6Zt5HXxxx8rRIjM4/giphy.gif',
  },
  {
    value: 'sticky',
    pronunciation: 'stikky',
    image:
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXk0YzJ6MzJuc3VrdjNlZHQwdTc1aWEwN2NsdmY4OWR6MnlqODc3cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/C6TUZ559o8hAA/giphy.gif',
  },
  {
    value: 'tangle',
    pronunciation: 'tangll',
    image:
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjVpeW93bXAwejYxNml2ZTA3OW1lOWJ0a2FlbWNtMDE3N201dGx0eCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/YFzFDNC7g03MB2N60i/giphy.gif',
  },
  {
    value: 'tickle',
    pronunciation: 'ticcll',
    image:
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmMzMHJ6Z2dubzlvcnV4YzIzaTYwaHhldHMzYWRheWRvMnhreTRzZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/H2GX5Ik1ILy5q/giphy.gif',
  },
  {
    value: 'vacuum',
    pronunciation: 'vacyum',
    image:
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2k2dTVuYnJ3bmNjeXprZzFxZzJsNzE1c3JvbzJ2YXF6eTh6bGJpbyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/br9UMgxhBGufLsjKKN/giphy.gif',
  },
  {
    value: 'wiggle',
    pronunciation: 'wiggll',
    image:
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG1oNXI4cTFhcGk2dXV4MHI3OWs1MzRqYXBxamdjbjYzYXFnZjJsMCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XCm6aoloWyUkwUuqkf/giphy.gif',
  },
  {
    value: 'zigzag',
    pronunciation: 'zigzag',
    image:
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWlkZTF1MnprbjB3cnZoMWl3cTc4cmR6bnBuYWQzN2lkbnpvOGJwZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/htXOrsFJihFmeoJik4/giphy.gif',
  },
  {
    value: 'zipper',
    pronunciation: 'zzppar',
    image:
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzN1azV1ODZyNzUzNDA1Zmx3Y3l1dGVkbWo0ODY2ZDF4d2l3MnM4biZlcD12MV9naWZzX3NlYXJjaCZjdD1n/2jMkaoEh70nHF1VrCq/giphy.gif',
  },
];

const SEVEN_LETTER_WORDS = [
  {
    value: 'courage',
    pronunciation: 'coorāgg',
    image: '',
  },
  {
    value: 'between',
    pronunciation: 'bitwiin',
    image: '',
  },
  {
    value: 'forgive',
    pronunciation: 'forgivv',
    image: '',
  },
  {
    value: 'harvest',
    pronunciation: 'harvest',
    image: '',
  },
  {
    value: 'journey',
    pronunciation: 'joornyy',
    image: '',
  },
  {
    value: 'magnify',
    pronunciation: 'magnifī',
    image: '',
  },
  {
    value: 'naughty',
    pronunciation: 'nooooty',
    image: '',
  },
  {
    value: 'quarrel',
    pronunciation: 'kworrel',
    image: '',
  },
  {
    value: 'quartet',
    pronunciation: 'kwortet',
    image: '',
  },
  {
    value: 'recycle',
    pronunciation: 'risīkll',
    image: '',
  },
  {
    value: 'squeeze',
    pronunciation: 'squiizz',
    image: '',
  },
  {
    value: 'whisper',
    pronunciation: 'wwispar',
    image: '',
  },
];

const EIGHT_LETTER_WORDS = [
  {
    value: 'artistic',
    pronunciation: 'artistic',
    image: '',
  },
  {
    value: 'decorate',
    pronunciation: 'decorātt',
    image: '',
  },
  {
    value: 'demolish',
    pronunciation: 'dimolišš',
    image: '',
  },
  {
    value: 'disguise',
    pronunciation: 'disgīīss',
    image: '',
  },
  {
    value: 'exercise',
    pronunciation: 'exercīss',
    image: '',
  },
  {
    value: 'famished',
    pronunciation: 'famiššdd',
    image: '',
  },
  {
    value: 'flexible',
    pronunciation: 'flexibll',
    image: '',
  },
  {
    value: 'graceful',
    pronunciation: 'grāssful',
    image: '',
  },
  {
    value: 'lopsided',
    pronunciation: 'lopsīded',
    image: '',
  },
  {
    value: 'magician',
    pronunciation: 'majišian',
    image: '',
  },
  {
    value: 'multiply',
    pronunciation: 'moltiplī',
    image: '',
  },
  {
    value: 'musician',
    pronunciation: 'musišian',
    image: '',
  },
  {
    value: 'portrait',
    pronunciation: 'portrāāt',
    image: '',
  },
  {
    value: 'powerful',
    pronunciation: 'powarful',
    image: '',
  },
  {
    value: 'question',
    pronunciation: 'qwestyon',
    image: '',
  },
  {
    value: 'squeegee',
    pronunciation: 'skwiigii',
    image: '',
  },
  {
    value: 'submerge',
    pronunciation: 'sobmergg',
    image: '',
  },
  {
    value: 'umbrella',
    pronunciation: 'umbrella',
    image: '',
  },
];

const NINE_LETTER_WORDS = [
  {
    value: 'celebrate',
    pronunciation: 'selibrātt',
    image: '',
  },
  {
    value: 'cooperate',
    pronunciation: 'coōperātt',
    image: '',
  },
  {
    value: 'beautiful',
    pronunciation: 'byuutiful',
    image: '',
  },
  {
    value: 'fireworks',
    pronunciation: 'fīrrworxx',
    image: '',
  },
  {
    value: 'hilarious',
    pronunciation: 'hilarioos',
    image: '',
  },
  {
    value: 'invention',
    pronunciation: 'invenšoon',
    image: '',
  },
  {
    value: 'invisible',
    pronunciation: 'invisibll',
    image: '',
  },
  {
    value: 'minuscule',
    pronunciation: 'minuskull',
    image: '',
  },
  {
    value: 'nightmare',
    pronunciation: 'nīīītmerr',
    image: '',
  },
  {
    value: 'rainstorm',
    pronunciation: 'rāānstorm',
    image: '',
  },
  {
    value: 'vegetable',
    pronunciation: 'vegitābll',
    image: '',
  },
  {
    value: 'xylophone',
    pronunciation: 'xīlōffōnn',
    image: '',
  },
];

const TEN_LETTER_WORDS = [
  {
    value: 'camouflage',
    pronunciation: 'camōōflagg',
    image: '',
  },
  {
    value: 'contagious',
    pronunciation: 'contāgioss',
    image: '',
  },
  {
    value: 'experiment',
    pronunciation: 'experiment',
    image: '',
  },
  {
    value: 'gargantuan',
    pronunciation: 'gargantuan',
    image: '',
  },
  {
    value: 'reflection',
    pronunciation: 'riflecšion',
    image: '',
  },
  {
    value: 'refreshing',
    pronunciation: 'rifrešsinn',
    image: '',
  },
  {
    value: 'stupendous',
    pronunciation: 'stupendoss',
    image: '',
  },
  {
    value: 'underneath',
    pronunciation: 'undarniith',
    image: '',
  },
];

const ELEVEN_LETTER_WORDS = [
  {
    value: 'contraption',
    pronunciation: 'contrapšion',
    image: '',
  },
  {
    value: 'electricity',
    pronunciation: 'ilectricity',
    image: '',
  },
  {
    value: 'scrumptious',
    pronunciation: 'scrumpšioss',
    image: '',
  },
];

export const WORDS = {
  2: [...TWO_LETTER_WORDS, ...THREE_LETTER_WORDS],
  3: [...TWO_LETTER_WORDS, ...THREE_LETTER_WORDS, ...FOUR_LETTER_WORDS],
  4: [...TWO_LETTER_WORDS, ...THREE_LETTER_WORDS, ...FOUR_LETTER_WORDS, ...FIVE_LETTER_WORDS, ...SIX_LETTER_WORDS],
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
  // ...SEVEN_LETTER_WORDS,
  // ...EIGHT_LETTER_WORDS,
  // ...NINE_LETTER_WORDS,
  // ...TEN_LETTER_WORDS,
  // ...ELEVEN_LETTER_WORDS,
];
