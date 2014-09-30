var oArthritisQA=null;
var indexQuestion=1;

function ViewArthritisRiskTest(_Model, _Controller){
    this.modelRef = _Model;
    this.controllerRef = _Controller;
    try{
        oArthritisQA= this.LoadArthritisQA();
        this.setListActiveQuestionHint();
        setQuestion(indexQuestion);
    }
    catch(e){
        
    }
 }

ViewArthritisRiskTest.prototype = {
    LoadArthritisQA: function(){
        return this.modelRef.allModels.insBackendDataContainer.getArthritisQA();
    },
    
    setListActiveQuestionHint: function(){
        if(oArthritisQA !=null && oArthritisQA.QA.length>0){
            $('#ulActiveQuestionHint').html('');
            for(var iQuesNo=0; iQuesNo< oArthritisQA.QA.length; iQuesNo++){
                   $('#ulActiveQuestionHint').append('<li></li>');
            }
        }
        
    }
}


function setQuestion(index){
    if(isNaN(index)){
        
    }
    else{
        if(oArthritisQA !=null && oArthritisQA.QA.length>0 ){
           if(oArthritisQA.QA.length >= index){
               
                /* Updates current question indicator */
                $('#ulActiveQuestionHint li').removeClass('active');
                $('#ulActiveQuestionHint li:eq('+(index-1)+')').addClass('active');
               
                /* Updates questions */
                $('#question').html(oArthritisQA.QA[index-1].Q);

                /*Initializes Answer if available */
                if(oArthritisQA.QA[index-1].A != 'NULL'){
                    $('#divButtonArea span').removeClass('pressed');
                    $('#divButtonArea span[data-ans="'+oArthritisQA.QA[index-1].A+'"]').addClass('pressed');
                }
                /* else Resets Radio Buttons */
                else{
                    $('#divButtonArea span').removeClass('pressed');
                }

                /* Enables/disable next/back buttons */
                if(index >1){
                    $('#spBack').show();
                    $('#spNext').show();
                }
                if(index==1){
                    $('#spBack').hide();
                    $('#spNext').show();
                }
                if(index == oArthritisQA.QA.length){
                    $('#spBack').show();
                    $('#spNext').hide();        // As no more question left.
                    $('#lastQuesSubmit').show();
                }
            }
            else{
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

function checkLastQuestion(){
    if(oArthritisQA !=null && oArthritisQA.QA.length>0 ){
           if(oArthritisQA.QA.length == indexQuestion){
               return true;
           }
    }
    return false;
}


function showTestResult(){
	$('#divSubmit').addClass('showAnsHint');   
	$('#divWrapWrapper').show();
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
    for(var iQuesNo=arrArthritisQA.length -1; iQuesNo>=0; iQuesNo--){
        switch(iQuesNo){
        
            case 8:
            case 7:
            case 6:
                    if(arrArthritisQA[iQuesNo].A == '1'){
                        return "Severe";
                    }
                    break;
            case 5:
            case 4:
            case 3:
                    if(arrArthritisQA[iQuesNo].A == '1'){
                        return "Moderate";
                    }
                    break;
            case 2:
            case 1:
            case 0:
                    if(arrArthritisQA[iQuesNo].A == '1'){
                        return "Mild";
                    }
                    break;
            default:
                return null;
                    break;
        }
    }
}