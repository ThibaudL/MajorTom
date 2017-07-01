const osc = require('node-osc');

const client = new osc.Client('192.168.110.198', 8000);


const zwave = {};

zwave.setValue = function(nodeId,classId,instanceId,index,value){
    console.log("setNodeOff (nodeId,classId,instanceId,index,value) : (",nodeId,classId,instanceId,index,value,")");
};

const ON_VALUE = 99;
const OFF_VALUE = 0;

zwave.setNodeOn = function(node){
    client.send('/'+node, parseFloat(ON_VALUE));
    console.log("setNodeOn : ",node, ON_VALUE);
};
zwave.setNodeOff = function(node){
    client.send('/'+node, parseFloat(OFF_VALUE));
    console.log("setNodeOff : ",node,OFF_VALUE);
};
/*
 * Set a multi-level device to the specified level (between 0-99).
 * See warning below
 */
zwave.setLevel = function(node,value){
    client.send('/'+node, parseFloat(value));
    console.log("setLevel (node,value) : (",node,",",value,")");
};
zwave.setNodeLocation = function(node,location){
    console.log("setNodeLocation (node,location) : (",node,",",location,")");
};

zwave.setNodeName = function(node,name){
    console.log("setNodeName (node,name) : (",node,",",name,")");
};
zwave.enablePoll = function(id,intensity){
    console.log("enablePoll (id, intensity) : (",id,",",intensity,")");
};
zwave.disablePoll = function(id){
    console.log("disablePoll : ",id);
};
zwave.setPollInterval = function(interval){
    console.log("setPollInterval : ",interval);
};
zwave.getPollInterval = function(){
    console.log("getPollInterval");
    return 0;
};
// Set the frequency of polling (0=none, 1=every time through the list, 2-every other time, etc)
zwave.setPollIntensity = function(id,intensity){
    console.log("setPollIntensity (id, intensity) : (",id,",",intensity,")");
};
zwave.getPollIntensity = function(id){
    console.log("getPollIntensity : ",id);
};
zwave.isPolled = function(id){
    console.log("isPolled : ",id);
};
zwave.getNumGroups = function(id){
    console.log("getNumGroups : ",id);
};
zwave.getGroupLabel = function(id,groupe){
    console.log("getGroupLabel (id, groupe) : (",id,",",groupe,")");
};
zwave.getAssociations = function(id,groupe){
    console.log("getAssociations (id, groupe) : (",id,",",groupe,")");
};
zwave.getMaxAssociations = function(id,groupe){
    console.log("getMaxAssociations (id, groupe) : (",id,",",groupe,")");
};
zwave.addAssociation = function(id,groupe, targetId){
    console.log("addAssociation (id, groupe, targetId) : (",id,",",groupe,",",targetId,")");
};
zwave.removeAssociation = function(id,groupe, targetId){
    console.log("removeAssociation (id, groupe, targetId) : (",id,",",groupe,",",targetId,")");
};
// destructive! will wipe out all known configuration
zwave.hardReset = function(){
    console.log("hardReset");
};
// non-destructive, just resets the chip
zwave.softReset = function(){
    console.log("hardReset");
};
// create a scene and assign a label, return its numeric id.
zwave.createScene = function(label){
    console.log("createScene : ",label);
};
zwave.removeScene = function(id){
    console.log("removeScene : ",id);
};
// get all scenes as an array
zwave.getScenes = function(){
    console.log("getScenes");
};
// add a zwave value to a scene
zwave.addSceneValue = function(sceneId, nodeId, commandclass, instance, index){
    console.log("addSceneValue (sceneId, nodeId, commandclass, instance, index) : (",sceneId, nodeId, commandclass, instance, index,")");
};
// remove a zwave value from a scene
zwave.removeSceneValue = function(sceneId, nodeId, commandclass, instance, index){
    console.log("removeSceneValue (sceneId, nodeId, commandclass, instance, index) : (",sceneId, nodeId, commandclass, instance, index,")");
};
// return array of values associated with this scene
zwave.sceneGetValues = function(id){
    console.log("sceneGetValues : ",id);
};
// The Show Must Go On...
zwave.activateScene = function(id){
    console.log("activateScene : ",id);
};
zwave.healNetworkNode = function(nodeId, doReturnRoutes=false){
    console.log("getMaxAssociations (nodeId, doReturn) : (",nodeId, doReturn,")");
};
zwave.healNetwork = function(){
    console.log("healNetwork");
};
zwave.getNeighbors = function(){
    console.log("getNeighbors");
};

zwave.refreshNodeInfo = function(id){
    console.log("refreshNodeInfo : ",id);
};
// begin an async controller command on node1:
zwave.beginControllerCommand = function(command, highPower = false, node1_id, node2_id = null){
    console.log("beginControllerCommand (command, highPower, node1_id, node2_id) : (",command, highPower, node1_id, node2_id,")");
};
// cancel controller command in progress
zwave.cancelControllerCommand = function(){
    console.log("cancelControllerCommand");
};
// returns controller's node id
zwave.getControllerNodeId = function(){
    console.log("getControllerNodeId");
};
// returns static update controller node id
zwave.getSUCNodeId = function(){
    console.log("getSUCNodeId");
};
// is the OZW-managed controller the primary controller for this zwave network?
zwave.isPrimaryController = function(){
    console.log("isPrimaryController");
};
// Query if the controller is a static update controller.
zwave.isStaticUpdateController = function(){
    console.log("isStaticUpdateController");
};
// Query if the controller is using the bridge controller library.
zwave.isBridgeController = function(){
    console.log("isBridgeController");
};
// Get the version of the Z-Wave API library used by a controller.
zwave.getLibraryVersion = function(){
    console.log("getLibraryVersion");
};
// Get a string containing the Z-Wave API library type used by a controller
zwave.getLibraryTypeName = function(){
    console.log("getLibraryTypeName");
};
//
zwave.getSendQueueCount = function(){
    console.log("getSendQueueCount");
};
zwave.requestAllConfigParams = function(id){
    console.log("requestAllConfigParams : ",id);
};
zwave.requestConfigParam= function(nodeId, paramId){
    console.log("requestConfigParam (nodeId, param): ","(",nodeId, param,")");
};
zwave.setConfigParam= function(nodeId, paramId, paramValue, sizeOfParamValue){
    console.log("setConfigParam (nodeId, paramId, paramValue, sizeOfParamValue): ","(",nodeId, paramId, paramValue, sizeOfParamValue,")");
};

module.exports = {
    getZWave : function(){
        return zwave;
    }
};