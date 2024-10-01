#!/bin/bash

output_path=""
text=""

# Parse command line options
while getopts "o:" opt; do
  case $opt in
    o)
      output_path="$OPTARG"
      ;;
    \?)
      echo "Invalid option: -$OPTARG" >&2
      exit 1
      ;;
    :)
      echo "Option -$OPTARG requires an argument." >&2
      exit 1
      ;;
  esac
done

# Shift the parsed options out of the argument list
shift $((OPTIND-1))

# Get the text argument
if [ $# -eq 0 ]; then
  echo "Error: Text argument is required."
  exit 1
fi
text="$1"

# Check if output path is provided
if [ -z "$output_path" ]; then
  echo "Error: Output path is required. Use -o option to specify the output path."
  exit 1
fi

# Your existing script logic goes here
# Use $text as the input text and $output_path as the destination for the generated MP3 file

echo "Text to convert: $text"
echo "MP3 file will be saved to: $output_path"

aiff_output_path="${output_path%.mp3}.aiff"
say "$text" -o "$aiff_output_path"
lame -m m "$aiff_output_path" "$output_path"
rm "$aiff_output_path"

# Example command (replace with actual text-to-speech command):
# say "$text" -o "$output_path"

