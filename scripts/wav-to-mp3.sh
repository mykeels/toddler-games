#!/bin/bash
letters=("0" "1" "2" "3" "4" "5" "6" "7" "8" "9")

for letter in "${letters[@]}"; do
    ffmpeg -i public/soundfx/digits/originals/$letter.wav -acodec libmp3lame -b:a 128k public/soundfx/digits/$letter.mp3;
done