function BackendDataContainer(){
    
}

BackendDataContainer.prototype = {
    
    getArthritisQA:function(){
        return JSON.parse(localStorage['QA_Arthritis']);
        //return localStorage['QA_Arthritis'];
    }
}