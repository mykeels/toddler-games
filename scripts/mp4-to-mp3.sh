#!/bin/bash

# Extracts audio from an MP4 file and saves it as an MP3

input_file=$1
output_file="${input_file%.*}.mp3"

if [ -z "$input_file" ]; then
    echo "Usage: $0 <input.mp4>"
    echo "Example: $0 video.mp4"
    exit 1
fi

if [ ! -f "$input_file" ]; then
    echo "Error: File '$input_file' not found"
    exit 1
fi

echo "Extracting audio from $input_file to $output_file"

ffmpeg -i "$input_file" -vn -acodec libmp3lame -b:a 192k "$output_file"

echo "Extraction complete: $output_file" 