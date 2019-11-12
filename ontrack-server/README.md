Docker scripts to run:

\$ docker build -t lfmainwaring/ontrack-server .

\$ docker run -p 8080:8080 -d lfmainwaring/ontrack-server

\$ docker stop {container id}

Optional
\$ docker logs {container id}

In future it'll look like this
\$ docker-compose build
\$ docker-compose up
\$ docker-compose down
