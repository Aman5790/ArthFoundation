
function MainView(_Model, _Controller, pageRef){
    initializeSubViews(_Model, _Controller, pageRef);           // Redirects to corresponding view based on pageRef parameter
}

function initializeSubViews(_Model, _Controller, pageRef){
     try{   
            this.controllerRef = _Controller;                   // Assigns controller
            this.modelRef = _Model;                             // Assigns model

            if(pageRef == 'INITIALIZE_APP')    {            
                insViewInitialize : new ViewInitialize(this.modelRef, this.controllerRef)     //  Initializes/Triggers View Initialize
                return insViewInitialize;
            } 
            else if(pageRef == 'ARTHRITIS_TEST'){
                insViewArthritisRiskTest : new ViewArthritisRiskTest(this.modelRef, this.controllerRef)     //  Initializes/Triggers View Initialize
                return insViewArthritisRiskTest;
            }
            else if(pageRef == 'OSTEO_TEST'){
                insViewOsteoRiskTest : new ViewOsteoRiskTest(this.modelRef, this.controllerRef)     //  Initializes/Triggers View Initialize
                return insViewOsteoRiskTest;
            }
      }
      catch(e)
      {
            console.log("Error in initializeSubViews of MainView:: " + e.message);
      }
}