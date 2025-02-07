import PocketBase from 'pocketbase';

const pb = new PocketBase("http://10.31.0.138:8090");

class CheckOut {
    constructor(id, cameraId, name, checkoutTime) {
    this.id = id;
    this.cameraId = cameraId
    this.name = name;
    this.checkoutTime = checkoutTime;
    }
};

const checkoutCamera = async(cameraId, name) => {
    
    const rec = await pb.collection('Checkouts').create( {
        cameraId=cameraId,
        checkoutName = name,
        checkoutTime = new Date().toUTCString()
    }); 
    return rec.id;
};

const checkinCamera = async(id) => {

};