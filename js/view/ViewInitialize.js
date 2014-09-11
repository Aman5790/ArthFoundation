function ViewInitialize(_Model, _Controller){
    this.modelRef = _Model;
    this.controllerRef = _Controller;
    try{
        this.initializeApp();
    }
    catch(e){
        window.location='error.html';
    }
 }

ViewInitialize.prototype = {
    
    initializeApp: function ()
    { 
        localStorage['QA_Arthritis']='{"QA":[\
                                          {"Q":"Is getting up from a seated position, or standing up for a long time while cooking, a painful experience?","A":"NULL"},\
                                          {"Q":"Do you have difficulty in routine household activities?","A":"NULL"},\
                                          {"Q":"Do you have mild joint pain with a family history of grandparents or parents suffering from Arthritis?","A":"NULL"},\
                                          {"Q":"Does the nagging knee pain disturb your night sleep?","A":"NULL"},\
                                          {"Q":"Do you avoid climbing stairs because of pain in joints?","A":"NULL"},\
                                          {"Q":"Is the pain & difficulty in activities there for more than three months?","A":"NULL"},\
                                          {"Q":"Do you feel continuous or intermittent stiffness & swelling in the joints?","A":"NULL"},\
                                          {"Q":"Is going for family outings & attending prayers meeting is impossible for you?","A":"NULL"},\
                                          {"Q":"Is sitting on floor & squatting extremely painful?","A":"NULL"}\
                                      ]}'; 
        
        
    }
}
