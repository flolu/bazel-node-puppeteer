IMAGE=drakery/node-puppeteer:latest

push-image:
	docker build -t ${IMAGE} .
	docker push ${IMAGE}

run:
	yarn bazelisk run //:server

deploy:
	yarn bazelisk run //:kubernetes.apply