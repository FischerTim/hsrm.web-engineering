IMAGENAME = reactimage
DOCKERPORT = 3000
HOSTPORT = 3000
CONTAINERNAME = reactcontainer

build: 
	docker build . -t ${IMAGENAME}
run: build 
	docker run -it --name ${CONTAINERNAME} -d --rm -p ${HOSTPORT}:${DOCKERPORT} -e CHOKIDAR_USEPOLLING=true ${IMAGENAME}
stop: 
	docker rm --force ${CONTAINERNAME}

install:
	brew install docker
