//The below function is the callback function for onBeginEditing event
function onBeginEditCallBack(txtBox
}

//Defining the properties for a Textbox with the id:"txtBox"
var txtBasic = {id:"txtBox",isVisible:true};

var txtLayout = {padding:[5,5,5,5], margin:[5,5,5,5], containerWeight:100, hExpand:true, widgetAlignment:constants.WIDGET_ALIGN_TOP_LEFT};

var txtPSP ={onBeginEditing:onBeginEditCallBack};

//Creating the Textbox.
var txtBox = new kony.ui.TextBox2(txtBasic, txtLayout, txtPSP);