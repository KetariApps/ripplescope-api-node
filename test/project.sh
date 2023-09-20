#!/bin/bash

# Read JSON objects from the organizations.json file and process each entry
jq -c '.Organizations[]' organization.json | while IFS= read -r formatted_organization; do
  # Create the JSON object with the formatted_organization variable
  body="{\"organization\":$formatted_organization}"

  # Send text to the ripplescope endpoint and retrieve SSE key
  curl -X POST -H "Content-Type: application/json" -d "$body" http://localhost:4000/ripplescope 
done
