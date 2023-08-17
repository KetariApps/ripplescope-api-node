#!/bin/bash

# Read JSON objects from the projects.json file and process each entry
jq -c '.Projects[]' project.json | while IFS= read -r formatted_project; do
  # Create the JSON object with the formatted_project variable
  body="{\"project\":$formatted_project}"

  # Send text to the ripplescope endpoint and retrieve SSE key
  curl -X POST -H "Content-Type: application/json" -d "$body" http://localhost:4000/categorize 


done
