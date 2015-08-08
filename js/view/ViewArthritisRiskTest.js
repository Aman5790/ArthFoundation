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


function setQuestion(index,direction){
    if(isNaN(index)){
    }
    else{
        if(oArthritisQA !=null && oArthritisQA.QA.length>0 ){
           if(oArthritisQA.QA.length >= index){
               
                /* Updates current question indicator */
                
                $('#ulActiveQuestionHint li').removeClass('active');
                $('#ulActiveQuestionHint li:eq('+(index-1)+')').addClass('active');
               
                /* Updates questions */
                
                if(direction == 'PREVIOUS'){
                    $('#question').stop().css({'opacity':'0','left':'-200px','right':'auto'}).html(oArthritisQA.QA[index-1].Q).animate({opacity:1}, { queue: false, duration: 400 }).animate({left: "0"}, { queue: false, duration: 400 });    
                }
                else{
                    $('#question').stop().css({'opacity':'0','right':'-200px','left':'auto'}).html(oArthritisQA.QA[index-1].Q).animate({opacity:1}, { queue: false, duration: 400 }).animate({right: "0"}, { queue: false, duration: 400 });
                }
                
                //$('#question').stop().css('opacity', '0').html(oArthritisQA.QA[index-1].Q).animate({opacity:1},1000);
               
               
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
    var mildCounter=parseInt(0);
    var modCounter=parseInt(0);
    var sevCounter=parseInt(0);
    var arrArthritisQA= oArthritisQA.QA;
    for(var iQuesNo=0; iQuesNo<=arrArthritisQA.length -1; iQuesNo++){
        switch(iQuesNo){
        
            case 0:
            case 1:
            case 2:
                    if(arrArthritisQA[iQuesNo].A == '1'){
                        mildCounter++;
                    }
                    break;
            case 3:
            case 4:
            case 5:
            case 6:
                    if(arrArthritisQA[iQuesNo].A == '1'){
                        modCounter++;
                    }
                    break;
            case 7:
            case 8:
                    if(arrArthritisQA[iQuesNo].A == '1'){
                        sevCounter++;
                    }
                    break;
            default:
                    return null;
                    break;
        }
    }
    
    if(mildCounter==0 && modCounter==0 && sevCounter==0){
        return "Fit";
    }
    else if(mildCounter>=1 && modCounter==0 && sevCounter==0){
        return "Mild";
    } 
    else if(modCounter=1 && sevCounter==0){
        return "MildToMod";
    }
    else if(modCounter>=2 && mildCounter==0 && sevCounter==0){
        return "MildToMod";
    }
    else if(modCounter>=2 && mildCounter>=1 && sevCounter==0){
        return "Moderate";
    }
    else if(sevCounter>=1 && mildCounter==0 && modCounter==0){
        return "ModToSev";
    }
    else if(sevCounter==2 && mildCounter>=1){
        return "Severe";
    }
    else if(sevCounter==2 && modCounter>=1){
        return "Severe";
    }
    else{
        return "MildToMod";
    }    
}


//function calculateArthritisStageOld(){
//    var arrArthritisQA= oArthritisQA.QA;
//    for(var iQuesNo=arrArthritisQA.length -1; iQuesNo>=0; iQuesNo--){
//        switch(iQuesNo){
//        
//            case 8:
//            case 7:
//            case 6:
//                    if(arrArthritisQA[iQuesNo].A == '1'){
//                        return "Severe";
//                    }
//                    break;
//            case 5:
//            case 4:
//            case 3:
//                    if(arrArthritisQA[iQuesNo].A == '1'){
//                        return "Moderate";
//                    }
//                    break;
//            case 2:
//            case 1:
//            case 0:
//                    if(arrArthritisQA[iQuesNo].A == '1'){
//                        return "Mild";
//                    }
//                    break;
//            default:
//                return null;
//                    break;
//        }
//    }
//}