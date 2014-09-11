var oArthritisQA=null;
var indexQuestion=1;

function ViewArthritisRiskTest(_Model, _Controller){
    debugger;
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
        if(oArthritisQA !=null && oArthritisQA.QA.length>0 ){
           if(oArthritisQA.QA.length >= index){
                /* Updates questions */
                divQuestion.innerHTML= oArthritisQA.QA[index-1].Q;

                /*Initializes Answer if available */
                if(oArthritisQA.QA[index-1].A != 'NULL'){
                    $("input:radio[name='rdAnswer'][value='"+oArthritisQA.QA[index-1].A+"']").prop("checked",true);
                }
                /* else Resets Radio Buttons */
                else{
                    $("input:radio[name='rdAnswer']").prop('checked',false);
                }

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
                    $('#btnNext').val('Show Result')        // As no more question left, and it's time to show results.
                }
            }
            else{
                var boolIsArthritis= calculateArthritisTestResult();
                if(boolIsArthritis){
                    var stageArthritis= calculateArthritisStage();
                    alert("");
                }
                else{
                    // You are fit !!
                }
            }
            
        }
    }
}

function saveAnswer(index,strAnswer){
    try{
        if(oArthritisQA !=null && oArthritisQA.QA.length>0 && oArthritisQA.QA.length >= index){
            oArthritisQA.QA[index-1].A=strAnswer;
            localStorage['QA_Arthritis']= JSON.stringify(oArthritisQA);
            return true;
        }
    }
    catch(e){
        return false;
    }
}

function calculateArthritisTestResult(){
    var arrArthritisQA= oArthritisQA.QA;
    for(var iQuesNo=0; iQuesNo<arrArthritisQA.length; iQuesNo++){
        if(arrArthritisQA[iQuesNo].A == '1'){
            return true;
        }
    }
    return false;
}

function calculateArthritisStage(){
    var arrArthritisQA= oArthritisQA.QA;
    for(var iQuesNo=arrArthritisQA.length -1; iQuesNo>0; iQuesNo--){
        switch(iQuesNo){
        
            case 8:
            case 7:
            case 6:
                    if(arrArthritisQA[iQuesNo].A == '1'){
                        return 1;
                    }
                    break;
            case 5:
            case 4:
            case 3:
                    if(arrArthritisQA[iQuesNo].A == '1'){
                        return 2;
                    }
                    break;
            case 2:
            case 1:
            case 0:
                    if(arrArthritisQA[iQuesNo].A == '1'){
                        return 3;
                    }
                    break;
            default:
                    break;
        }
    }
}