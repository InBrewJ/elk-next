# Next + ELK

- ES6 + ELK
- Properly functional React, try hooks or st
- NextJS
- v simple web app that generates some logs on a server
- store things in elastic search
- admin endpoints that shows 'usage'

# Method

## A

ELK in docker
First step, `npm run start > next.log`
Mapped next.log into a filebeat docker thing
filebeat puts data into elasticsearch
kibana displays it

## B

Some functional ES6:

Carry on using the Batman API
Stick it serverside
Process the data somehow
Try to put something on Kibana that's like:
- If the batman API was used more than 5 times in the last 10 seconds, show that it's popular
- If it's not, it's no so popular
- Also show if the app has been built in the last hour or something

## Run instructions

- Start the elk stack
- Start filebeat
- Start the dev server and pipe logs to next.log / build.log
- Wrangle with elastic search queries
