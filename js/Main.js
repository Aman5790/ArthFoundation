function main(Page){
 try{
     debugger;
  initialize(Page);
 }
 catch(e)
 {
  console.log("Error in main function:: " + e.message);
 }
}

function initialize(Page){    
  try{
    var _Model = new MainModel();
    var _Controller = new MainController(_Model, Page);
    new MainView(_Model, _Controller, Page);    
  }
  catch(e)
  {
   console.log("Error in initialize function of mainGame:: " + e.message);
  }    
}  