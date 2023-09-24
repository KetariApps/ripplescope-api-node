#!/bin/bash

# Read JSON objects from the organizations.json file and process each entry
jq -c '.Organizations[]' org-test.json | while IFS= read -r formatted_organization; do
  # Create the JSON object with the formatted_organization variable
  body=$formatted_organization

  # Send text to the ripplescope endpoint and retrieve SSE key
  curl -X POST -H "Content-Type: application/json" -d "$body" https://ripplescope.com/api/ripplescope/scraped 
done
