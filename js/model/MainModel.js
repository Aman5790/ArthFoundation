
function MainModel(){
    return initializeSubModels();
    
}

function initializeSubModels(){
 try{
   this.allModels = {    
    insBackendDataContainer : new BackendDataContainer()                  
    }  
   return this;  
 }
  catch(e)
  {
    console.log("Error in initializeSubModels of Model:: " + e.message);
  }
}