const ids = [];
let presence = {

};
const coordonneesHome = {
    lat : null,
    long : null
};

module.exports = {
    updatePresence : function(id, empty){
        (!ids.includes(id) && ids.push(id));
        presence[id] = {
            empty,
            timestamp : new Date().getTime()
        }
    },
    shouldRealyBeEmpty : function(){
        let isEmpty = true;
        let lastTimestamp = new Date().getTime();
        ids.forEach((id) => {
            isEmpty = isEmpty && presence[id].empty;
            if(lastTimestamp > presence[id].timestamp){
                lastTimestamp = presence[id].timestamp;
            }
        });
        if(isEmpty && lastTimestamp + 10000){// 1000*60*5
            return true;
        }

        return false;
    },
    setCoordonneesHome : function(lat, long){
        coordonneesHome.lat = lat;
        coordonneesHome.long = long;
    },
    getCoordonneesHome : function(){
        return coordonneesHome;
    }
};