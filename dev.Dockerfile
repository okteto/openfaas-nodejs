FROM registry.cloud.okteto.net/rberrelleza/openfaas-nodejs
USER root
RUN npm install  -g nodemon

USER app