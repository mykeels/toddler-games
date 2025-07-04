#!/bin/bash

# Shifts the pitch of the audio in an MP4 file by a given number of semitones
# Usage: ./mp4-key-change.sh input.mp4 semitone

input_file=$1
semitone=$2
output_file="${input_file%.*}_key${semitone}.mp4"

if [ -z "$input_file" ] || [ -z "$semitone" ]; then
    echo "Usage: $0 <input.mp4> <semitone>"
    echo "Example: $0 video.mp4 2   # up 2 semitones"
    echo "         $0 video.mp4 -1  # down 1 semitone"
    exit 1
fi

if [ ! -f "$input_file" ]; then
    echo "Error: File '$input_file' not found"
    exit 1
fi

# Calculate pitch shift factor: 2^(semitone/12)
pitch_factor=$(awk -v s="$semitone" 'BEGIN { printf "%.6f", (2^(s/12)) }')

echo "Shifting pitch of $input_file by $semitone semitone(s) (factor: $pitch_factor)"

echo "Output: $output_file"

ffmpeg -i "$input_file" -filter:a "asetrate=44100*$pitch_factor,aresample=44100" -c:v copy "$output_file"

echo "Key change complete: $output_file" 