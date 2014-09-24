function BackendDataContainer(){
    
}

BackendDataContainer.prototype = {
    
    getArthritisQA:function(){
        return JSON.parse(localStorage['QA_Arthritis']);
    },
    
    getOsteoQA:function(){
        return JSON.parse(localStorage['QA_Osteo']);
    }
}