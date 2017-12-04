//Type your code here

function onsuccesscallback(accelerometerdata) {
  kony.application.getCurrentForm().TextArea0.text = ("X: " + accelerometerdata.x + "\n" + "Y: " + accelerometerdata.y + "\n" + "Z: " + accelerometerdata.z + "\n" +  "T: " + accelerometerdata.timestamp);
}

function onfailurecallback(error) {
  kony.application.getCurrentForm().TextArea0.text = "error";
}

function retrieveCurrentAcceleration() {
  try {
  	kony.accelerometer.retrieveCurrentAcceleration(onsuccesscallback, onfailurecallback);
  }
    catch(e) 
    {
        alert("Accelerometer not supported.");
    }
}
