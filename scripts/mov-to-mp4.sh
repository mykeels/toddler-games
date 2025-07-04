#!/bin/bash

# Converts MOV files to MP4 format

input_file=$1
output_file="${input_file%.*}.mp4"

if [ -z "$input_file" ]; then
    echo "Usage: $0 <input.mov>"
    echo "Example: $0 video.mov"
    exit 1
fi

if [ ! -f "$input_file" ]; then
    echo "Error: File '$input_file' not found"
    exit 1
fi

echo "Converting $input_file to $output_file"

ffmpeg -i "$input_file" -c:v libx264 -crf 18 -preset medium -c:a aac -b:a 128k "$output_file"

echo "Conversion complete: $output_file"