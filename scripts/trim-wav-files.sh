#!/bin/bash

## This script trims the wav files for the phonics game.
## Uses sox to trim the files.

letters=("a" "b" "c" "d" "e" "f" "g" "h" "i" "j" "k" "l" "m" "n" "o" "p" "q" "r" "s" "t" "u" "v" "w" "x" "y" "z")

for letter in $letters; do
  sox public/soundfx/phonics/originals/$letter.wav public/soundfx/phonics/$letter.wav silence 1 0.1 1% reverse silence 1 0.1 1% reverse
done