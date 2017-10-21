# Showcase Static Website
# with tag

FROM nginx:stable-alpine
COPY index.html *.png /usr/share/nginx/html/

LABEL MAINTAINER="Johannes Sim" \
      REFRESHED_AT="2017-10-22"

# build:  docker image build -t sim007/staticws:latest .

# push:   docker push sim007/staticws:latest
# pull:   docker pull sim007/staticws:latest

# run:    docker container run --name staticws -d -p 4200:80 sim007/staticws:latest
# Azure:  docker container run --name staticws -d -p 8901:80 sim007/staticws:latest

# delete: docker container rm -f staticws
# in:     docker container exec -it staticws /bin/sh