#!/bin/bash

## This script trims the wav files for the phonics game.
## Uses sox to trim the files.

letters=("0" "1" "2" "3" "4" "5" "6" "7" "8" "9" "10")

for letter in $letters; do
  sox public/soundfx/digits/originals/$letter.wav public/soundfx/digits/$letter.wav silence 1 0.1 1% reverse silence 1 0.1 1% reverse
done