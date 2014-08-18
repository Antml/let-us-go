//function fillBlank() {
//    var fillBlank1 = new Topic("fillblank1", ['统一建模语言'], 1, 5)
//    var score1 = 0;
//    var x = document.getElementById("one").value;
//    if (x.value === fillBlank1.answer[0]) {
//        score1 += fillBlank1.score;
//    }
//    ;
//    var score2 = 0;
//    var fullBlank2 = new Topic('fullblank2', ['继承性', '多态性', '封装性'], 3, 5);
//    var y = [];
//    y.push(document.getElementById('two').value);
//    y.push(document.getElementById('three').value);
//    y.push(document.getElementById('four').value);
//    for (var i = 0; i < fullBlank2.answer.length; i++) {
//        for (var j = 0; j < y.length; j++) {
//            if (fullBlank2.answer[i] == y[j]) {
//                score2 += fullBlank2.score;
//                break;
//            }
//
//        }
//
//    }
//    return score1 + score2;
//}
function getFillBlankScore(){
    var fillblank = new FillBlank("one");
    var score = fillblank.matchOne("one");
    return score;
}
function getFillBlank2Score(){
    var fillBlankThree =new FillBlankThree ("two","three","four");
    var score = fillBlankThree.matchThree("two","three","four");
    return score;
}
//function singleChoose() {
//    var singlechoice = new Topic('choiceSubject', ['B', 'A'], 2, 10);
//    var getAnswer = function (Name) {
//        return document.getElementsByName(Name);
//    }
//    var score1 = 0;
//    var answer = getAnswer("choice");
//    if (answer[1].checked)
//        score1 += 10;
//
//    var score2 = 0;
//    var Seven = getAnswer("choice2");
//    if (Seven[0].checked)
//        score2 += 10;
//        return score1 + score2;
//
//}
function getSingleChooseScore (){
    var Answer = new Topic('choiceSubject',['B','A'],2);
    var score = 0;
    var singleChoose1 = new Singlechoose("choice1");
    var singleChoose2 = new Singlechoose("choice2");
    var value1 = singleChoose1.getValue();
    var value2 = singleChoose2.getValue();
    var value = [value1,value2];

    for(var i = 0; i < value.length; i++){
   if(value[i]== Answer.answer[i]){
       score += 10;
   }
    }
    return score;
}

//function myFunction1(){
//    var score1 = 0;
//  var x =document.getElementById("one").value;

//  if( x.value === "统一建模语言" ){
//     score1 += 5;
//     }
//   return score1 ;
//}

//function myFunction2(){
//    var score2 = 0;
//    var x=document.getElementById("two").value;
//    var y=document.getElementById("three").value;
//    var z= document.getElementById("four").value;
//    var answer = [x,y,z];
//    var answer1 = ["封装性", "继承性" ,"多态性"];
//    for(var i = 0; i<3; i++){
//      for(var j = 0; j<3; j++){
//    if (answer1[i] === answer[j]){
//      score2 += 5;
//      break ;
//     }
//   }
//  }

//    return score2 ;
//}

//function myFunction3(){
//    var score3 = 0;
//    var answer = document.getElementsByName("choice");
//    if(answer[1].checked)
//    score3 += 10;

//  return score3;
//}

//function myFunction4(){
//  var score4 = 0;
//  var Seven = document.getElementsByName("choice2");
//  if(Seven[0].checked){
//    score4 +=10;

//  }
//  return score4;
//}

function myFunction5() {
    var score5 = 0;
    var Eight = $('input[name="choice3"]');
    if (Eight[0].checked && Eight[1].checked && Eight[3].checked && !(Eight[2].checked)) {
        score5 += 10;
    }
    return score5;
}

function myFunction6() {
    var score6 = 0;
    var Nine = $('input[name="choice4"]');
    if (Nine[0].checked && Nine[1].checked && Nine[2].checked && !(Nine[3].checked)) {
        score6 += 10;
        return score6;
    }
    return score6;
}

function myFunction7() {
    var score7 = 0;
    var Ten = $('input[name="first"]');
    if (Ten[0].checked) {
        score7 += 10;
    }
    return score7;
}

function myFunction8() {
    var score8 = 0;
    var Eleven = $('input[name="second"]');
    if (Eleven[1].checked) {
        score8 += 10;
    }
    return score8;
}

function myFunction9() {
    var score9 = 0;

    var Final = $("#0");

    if (Final.value === "模型是对现实世界的简化和抽象,模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体;可以是某种图形;或者是一种数学表达式。") {
        score9 += 20;
    }
    return score9;
}

function myBossFunction() {
    var score1 = getFillBlankScore();
    var score2 = getSingleChooseScore();
    var score3 = getFillBlank2Score();
    var score5 = myFunction5();
    var score6 = myFunction6();
    var score7 = myFunction7();
    var score8 = myFunction8();
    var score9 = myFunction9();
    var Score = score1;
    Score += score2;
    Score += score3;
    Score += score5;
    Score += score6;
    Score += score7;
    Score += score8;
    Score += score9;
var ABC =document.getElementById("OK");
    if (judgeBasicInformation()) {
        $("#OK").text(+Score + "分");
        $("#total").addClass("text-danger");

        alert("您本次考试得分：" + Score + "分");
    }
    else {
        $('#myModal').modal();
    }
    return Score;

}
//function SingleChoose(name,answer) {
//    this.name = name;
//    this.answer = answer;

//}
//Single.prototype.getStudentchoice = function (name){
//var studentchoice = document.getElementsByName(name);
//var
//}

function judgeBasicInformation() {

    var student_name = $("#inputname");
    var student_Id = $("#inputcard");
    var student_grade = $("#inputgrade");
    if (student_name.val()) {
        var judgement1 = true;
        $("#name").removeClass("has-error");
    }
    else {
        $("#name").addClass("has-error");
    }
    if (student_Id.val()) {
        var judgement2 = true;
        $("#card").removeClass("has-error");
    }
    else {
        $("#card").addClass("has-error");
    }
    if (student_grade.val()) {
        var judgement3 = true;
        $("#class").removeClass("has-error");
    }
    else {
        $("#class").addClass("has-error");
    }

    return judgement1 && judgement2 && judgement3;
}
//    return judgement ;
//}
//function hasEmptyRequiredInput(inputs) {
//    for (var i = 0; i < inputs.length; i++) {
//        var input = inputs[i];
//        var element = document.getElementsByName(input.name);
//        var divElement = document.getElementById(input.id);
//        if (element[0] && _.isEmpty(element[0].value)) {
//            alert('请输入' + input.text + '！');
//            divElement.className = 'has-error';
//            return true;
//      }
//        else{
//          divElement.className = 'form control';
//        }
//    }
//    return false;
//}
