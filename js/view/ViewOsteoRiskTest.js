var oOsteoQA=null;
var indexQuestion=1;

function ViewOsteoRiskTest(_Model, _Controller){
    this.modelRef = _Model;
    this.controllerRef = _Controller;
    try{
        oOsteoQA= this.LoadOsteoQA();
        this.setListActiveQuestionHint();
        setQuestion(indexQuestion);
    }
    catch(e){
        window.location='error.html';
    }
 }

ViewOsteoRiskTest.prototype = {
    LoadOsteoQA: function(){
        return this.modelRef.allModels.insBackendDataContainer.getOsteoQA();
    },
    
    setListActiveQuestionHint: function(){
        if(oOsteoQA !=null && oOsteoQA.QA.length>0){
            $('#ulActiveQuestionHint').html('');
            for(var iQuesNo=0; iQuesNo< oOsteoQA.QA.length; iQuesNo++){
                   $('#ulActiveQuestionHint').append('<li></li>');
            }
        }
        
    }
}


function setQuestion(index){
    if(isNaN(index)){
        window.location="error.html"
    }
    else{
        if(oOsteoQA !=null && oOsteoQA.QA.length>0 ){
           if(oOsteoQA.QA.length >= index){
               
                /* Updates current question indicator */
                $('#ulActiveQuestionHint li').removeClass('active');
                $('#ulActiveQuestionHint li:eq('+(index-1)+')').addClass('active');
               
                /* Updates questions */
                $('#question').html(oOsteoQA.QA[index-1].Q);

                /*Initializes Answer if available */
                if(oOsteoQA.QA[index-1].A != 'NULL'){
                    $('#divButtonArea span').removeClass('pressed');
                    $('#divButtonArea span[data-ans="'+oOsteoQA.QA[index-1].A+'"]').addClass('pressed');
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
                if(index == oOsteoQA.QA.length){
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
        if(oOsteoQA !=null && oOsteoQA.QA.length>0 && oOsteoQA.QA.length >= index){
            oOsteoQA.QA[index-1].A=strAnswer;
            localStorage['QA_Osteo']= JSON.stringify(oOsteoQA);
            return true;
        }
    }
    catch(e){
        return false;
    }
}

function checkLastQuestion(){
    if(oOsteoQA !=null && oOsteoQA.QA.length>0 ){
           if(oOsteoQA.QA.length == indexQuestion){
               return true;
           }
    }
    return false;
}


function showTestResult(){
	$('#divSubmit').addClass('showAnsHint');   
	$('#divWrapWrapper').show();
}

function calculateOsteoTestResult(){
    var arrOsteoQA= oOsteoQA.QA;
    for(var iQuesNo=0; iQuesNo<arrOsteoQA.length; iQuesNo++){
        if(arrOsteoQA[iQuesNo].A == '1'){
            return true;
        }
    }
    return false;
}

function calculateOsteoStage(){
    var arrOsteoQA= oOsteoQA.QA;
    var iCount=0;
    for(var iQuesNo= 0; iQuesNo<arrOsteoQA.length; iQuesNo++){
        if(iCount<3){
           if(arrOsteoQA[iQuesNo].A == '1'){
                iCount++;
           } 
        }
        else{
            break;
        }
    }
    switch(iCount){
        case 1:
            return "Mild";
            break;
        case 2:
            return "Moderate";
            break;
        case 3:
            return "Severe";
            break;
        default:
            return null;
            break;
    }
}