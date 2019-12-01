docker run \
  --name=filebeat \
  --user=root \
  --volume="$(pwd)/filebeat.docker.yml:/usr/share/filebeat/filebeat.yml:ro" \
  --volume="/home/guestsudo/Projects/.um/tempo/app/hello-next/":"/var/run/next" \
  --network host \
  docker.elastic.co/beats/filebeat:7.4.2 filebeat -e -strict.perms=false 