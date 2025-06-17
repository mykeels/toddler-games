#!/bin/bash

# Removes noise from mp4 files

input_file=$1
output_file="${input_file%.*}_denoised.mp4"

echo "Denoising $input_file to $output_file"

ffmpeg -i "$input_file" -af "highpass=f=200, lowpass=f=3000, highpass=f=5000, lowpass=f=10000" -c:v libx264 -crf 18 -preset slow -c:a aac -b:a 128k "$output_file"
