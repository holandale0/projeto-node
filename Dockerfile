FROM node:10.0.0

MAINTAINER Leonardo <leonardo.h.araujo@gmail.com>

ENV HOME=/opt/fleury

# cria diretorio app
RUN mkdir -p $HOME/api

COPY package.json package-lock.json $HOME/api/

WORKDIR $HOME/api

RUN npm install --silent --progress=false

COPY . $HOME/api/

EXPOSE 8000

#ENTRYPOINT ["/bin/bash", "-c" , "echo \"10.255.7.15 svlxmongo01.fleury.com.br svlxmongo01\" >> /etc/hosts"]

#CMD echo \"10.255.7.15 svlxmongo01.fleury.com.br svlxmongo01\" >> /etc/hosts

CMD ["node", "index.js"]