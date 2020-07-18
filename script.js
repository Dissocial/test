
$(".plan-radio").click(function () {
    var selectVal = $("#number").val();
    var currentPlan = $(this).val();
    var calculatedVal = '$' + currentPlan * selectVal;
    $("#cost").text(calculatedVal);
    var planName = $(".plan-radio:checked").data("name");
    $(".plan").text(planName);
});
$("#number").change(function () {
    var selectVal = $(this).val();
    var currentPlan = $(".plan-radio:checked").val();
    var calculatedVal = '$' + currentPlan * selectVal;
    $("#cost").text(calculatedVal);
    
});
