#!/bin/bash

# Set the message text in a variable
projectInfo="Company: Adamo Foods
Location: London, UK
Employees: 5
Problem Solving: Animal farming is a leading contributor to climate change and environmental degradation. Steak is one of the main culprits, using 15,000 liters of water to produce just 1kg. To fight climate change, we must reduce global red meat consumption. Think about it… we currently raise & slaughter billions of cows, feeding them enormous quantities of food and water every day for years. This inefficient technology is outdated.
How Solving: Simply leveraging the power of mother nature. Fungi grow at an exponential rate, and require minimal resources. Our large fermentation tanks make sure the fungi is happy and growing in the same way it does outside.  With our proprietary fermentation process, we end up with large batches of fibrous fungus roots, also called mycelium. 
Interesting Business Note: Our fungi steak contains zero cholesterol or hormones, and has much less saturated fat than beef. It is packed with protein & fibres, and contains all nine essential Amino Acids. Adamo’s technology creates good & delicious protein from fungi that only require small amounts of inexpensive nutrients & sugars. This efficient conversion process will contribute to tackling food insecurity worldwide.
"

# Use jq to properly escape and format the JSON string
formatted_projectInfo=$(jq -Rs '.' <<< "$projectInfo")


# Create the JSON object with the message variable
body="{\"projectInfo\":$formatted_projectInfo}"

echo $body

# Send text to the ripplescope endpoint and retrieve SSE key
stream_id=$(curl -X POST -H "Content-Type: application/json" -d "$body" http://localhost:4000/ripplescope | jq -r '.streamId')

echo $stream_id

# Make request to SSE endpoint using the obtained SSE key
# curl -N "https://copy.ketari.dev/api/sse?streamId=${stream_id}"

# Replace {PORT} with the actual port number you're using
