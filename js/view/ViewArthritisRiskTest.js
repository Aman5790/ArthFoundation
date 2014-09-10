var oArthritisQA=null;
var indexQuestion=1;

function ViewArthritisRiskTest(_Model, _Controller){
    this.modelRef = _Model;
    this.controllerRef = _Controller;
    try{
        oArthritisQA= this.LoadArthritisQA();
        setQuestion(indexQuestion);
    }
    catch(e){
        window.location='error.html';
    }
 }

ViewArthritisRiskTest.prototype = {
    LoadArthritisQA: function(){
        return this.modelRef.allModels.insBackendDataContainer.getArthritisQA();
    }
}


function setQuestion(index){
    if(isNaN(index)){
        window.location="error.html"
    }
    else{
        if(oArthritisQA !=null && oArthritisQA.QA.length>0 && oArthritisQA.QA.length >= index){
            /* Updates questions */
            divQuestion.innerHTML= oArthritisQA.QA[index-1].Q;
            
            /* Resets Radio Buttons */
            $("input:radio[name='rdAnswer']").prop('checked',false);
            
            /* Enables/disable next/back buttons */
            if(index >1){
                $('#btnBack').attr('disabled',false)
                $('#btnNext').attr('disabled',false)
            }
            if(index==1){
                $('#btnBack').attr('disabled',true)
                $('#btnNext').attr('disabled',false)
            }
            if(index == oArthritisQA.QA.length){
                $('#btnBack').attr('disabled',false)
                $('#btnNext').attr('disabled',true)
            }
            
        }
    }
}