# config app
export APP_HOST=127.0.0.1
export APP_PORT=8002
# config Database env
export DB_CONNECTION=mongodb
export DB_HOST=10.10.15.155
export DB_PORT=27017
export DB_NAME=Scada
export DB_USERNAME=""
export DB_PASSWORD=""

# request
export RQ_API_NODE_RED=http://10.10.11.222:1880/diagram_plc_mitsubishi

# config session key & secret
export SESSION_KEY="express.sid"
export SESSION_SECRET="mySecret"

# config MQTT
export MQTT_CONNECTION=mqtt
export MQTT_HOST=10.10.11.222
export MQTT_PORT=1883
export MQTT_TOPIC_RESET_0=webServerResetData
export MQTT_TOPIC_SETUP=webServerSendData