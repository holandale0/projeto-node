

VERSAO=$1
TAG=fleury-api-novo-agendamento
REGISTRY=docker.registry.local:5000

if [ -z "$VERSAO" ]
then
   echo "Informe a versao para instalar! [./install.sh <VERSAO>]"
   exit 0;
fi

export VERSAO=$VERSAO
export TAG=$TAG
export REGISTRY=$REGISTRY
export HOST_BDCORP=srvdbv01
export PORT_BDCORP=1433

echo "Gerando apidoc $VERSAO..."
#apidoc -i ./ -e node_modules/ -o apidoc
apidoc -i ./ -e node_modules/ -o public/apidoc

echo "Gerando versao $VERSAO..."

docker build --tag=$TAG:$VERSAO .

echo "Registrando local..."

docker tag $TAG:$VERSAO $REGISTRY/$TAG:$VERSAO

docker push $REGISTRY/$TAG:$VERSAO

echo "Deploy service..."

docker stack deploy --compose-file docker-compose.yml $TAG



