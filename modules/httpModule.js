//Type your code here

function example() {
  var httpclient = new kony.net.HttpRequest();
  var url = "http:www.google.com";
  httpclient.ResponseType = constants.HTTP_RESPONSE_TYPE_TEXT;
  httpclient.onReadyStateChange = onReady;
  httpclient.open(constants.HTTP_METHOD_GET, url, false);
  httpclient.send();
}

function onReady() {
  if (this.status == 200) {
    kony.application.getCurrentForm().TextAreao0.text = this.response;
  }
}
/*
var rb = httpclient.response;
var myfile = new kony.io.File(kony.io.FileSystem.getDataDirectoryPath()+"/SampleImage.jpg");
myFile.write(rb, true);
*/