function BackendDataContainer(){
    
}

BackendDataContainer.prototype = {
    
    getArthritisQA:function(){
        return JSON.parse(localStorage['QA_Arthritis']);
    }
}