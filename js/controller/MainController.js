function MainController(_Model, _PageRef){
    return initializeSubControllers(_Model, _PageRef);
}

function initializeSubControllers(_Model, _PageRef){
 try{
    this.modelRef = _Model;   
    if(_PageRef == 'INITIALIZE_APP'){
        this.allControllers = {  
        } 
    }
    else if(_PageRef == 'ARTHRITIS_TEST'){
        this.allControllers = {  
        } 
    }  
    return this;
  }
  catch(e)
  {
    console.log("Error in initializeSubControllers of MainController:: " + e.message);
  }
}