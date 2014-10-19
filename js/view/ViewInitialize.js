function ViewInitialize(_Model, _Controller){
    this.modelRef = _Model;
    this.controllerRef = _Controller;
    try{
        this.initializeApp();
    }
    catch(e){
        
    }
 }

ViewInitialize.prototype = {
    
    initializeApp: function ()
    { 
        localStorage['QA_Arthritis']='{"QA":[\
                                          {"Q":"Is getting up from a seated position, say while cooking a painful experience?","A":"NULL"},\
                                          {"Q":"Do you have difficulty in routine household activities?","A":"NULL"},\
                                          {"Q":"Do you have mild joint pain with a family history of grandparents or parents suffering from Arthritis?","A":"NULL"},\
                                          {"Q":"Does the nagging knee pain disturb your night sleep?","A":"NULL"},\
                                          {"Q":"Do you avoid climbing stairs because of pain in joints?","A":"NULL"},\
                                          {"Q":"Is the pain & difficulty in activity been there for more than 3 months?","A":"NULL"},\
                                          {"Q":"Do you feel continuous or intermittent stiffness & swelling in the joints?","A":"NULL"},\
                                          {"Q":"Is going for family outings and neighborhood place of worship for prayers getting extremely difficult for you?","A":"NULL"},\
                                          {"Q":"Is sitting on floor & squatting extremely painful?","A":"NULL"}\
                                      ]}'; 
        
        localStorage['QA_Osteo']='{"QA":[\
                                          {"Q":"Has either of your parents been diagnosed with Osteoporosis or had a fracture after a minor fall (a fall from standing height or less)?","A":"NULL"},\
                                          {"Q":"Did you ever have fracture after a minor fall as an adult?","A":"NULL"},\
                                          {"Q":"Have you taken corticosteroid tablets (cortisone, prednisone, etc.) for more than 3 months?","A":"NULL"},\
                                          {"Q":"Have you lost more than 3 cms. (Just over 1 inch) in height?","A":"NULL"},\
                                          {"Q":"Do you take alcohol more than safe limits (30 ml 5 days a week)?","A":"NULL"},\
                                          {"Q":"Do you smoke more than 20 cigarettes a day?","A":"NULL"},\
                                          {"Q":"Do you suffer frequently with loose motions (caused by chronic gastric diseases like crohn\'s disease or celiac disease)?","A":"NULL"},\
                                          {"Q":"Did you have menopause before the age of 45?","A":"NULL"},\
                                          {"Q":"Have your periods stopped for 12 months or more in life time (other than because of pregnancy)?","A":"NULL"},\
                                          {"Q":"Have you been regularly consuming medicines for more than 3 years for Epilepsy, Hypothyroidism or chronic gastritis/ulcer?","A":"NULL"}\
                                      ]}'; 
        
        
    }
}
