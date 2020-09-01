import mqtt from 'mqtt';

let MQTT_URI = `${process.env.MQTT_CONNECTION}://${process.env.MQTT_HOST}:${process.env.MQTT_PORT}`
class MqttHandler {
  
  constructor() {
    this.mqttClient = null;
    this.host = MQTT_URI;

    // this.username = 'YOUR_USER'; // mqtt credentials if these are needed to connect
    // this.password = 'YOUR_PASSWORD';
  }
  connect() {
    // Connected MQTT server
    this.mqttClient = mqtt.connect(this.host);

    // Mqtt error callback
    this.mqttClient.on('error', (err) => {
      console.log(err);
      this.mqttClient.end();
    });

    // Connection callback
    this.mqttClient.on('connect', () => {
        console.log('MQTT client connect')
    });

    // mqtt subscriptions
    // this.mqttClient.subscribe('PLC_Mitsubishi', {qos: 0});

    // When a message arrives, console.log it
    // this.mqttClient.on('message', function (topic, message) {
    //   console.log(message.toString());
    // });

    this.mqttClient.on('close', () => {
      console.log(`MQTT client disconnected`);
    });

  }

  // Sends a mqtt message to topic: mytopic
  sendMessageReset(message) {
    this.mqttClient.publish(process.env.MQTT_TOPIC_RESET_0, message);
  };
  sendMessageSetup(message) {
    this.mqttClient.publish(process.env.MQTT_TOPIC_SETUP, message);
  };

}

module.exports = MqttHandler;