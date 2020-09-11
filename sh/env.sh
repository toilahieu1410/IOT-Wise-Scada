# config app
export APP_HOST=localhost
export APP_PORT=8002
# config Database env
export DB_CONNECTION=mongodb
export DB_HOST=10.10.15.20
export DB_PORT=27017
export DB_NAME=Scada
export DB_USERNAME=""
export DB_PASSWORD=""

# request
export RQ_API_NODE_RED=http://10.10.11.222:1880/diagram_plc_mitsubishi

# config MQTT
export MQTT_CONNECTION=mqtt
export MQTT_HOST=10.10.11.222
export MQTT_PORT=1883
export MQTT_TOPIC_RESET_0=webServerResetData
export MQTT_TOPIC_SETUP=webServerSendData