// JavaScript Document ListMaker.js
//Make Grocery list from selected items
$(document).ready(function() {
 chosen=[];
 weeklyMealList=[];
 weeklyIngList=[];
 weeklyCals=[];


$('#GetList').click(function(){
	
	var type=[];
	var meal=[];
	Cluster=[];//return from Match to Meals function of Meals(index 0) and Ingredients(index 1)
	Meals=[];
	Ing=[];
	Cals=[];
	

	chosen.forEach(function(a) {
    	type.push(a[0]);///combines types into single array
		meal.push(a[1]);///combines meal index into single array
	});
//	console.log(type);
//	console.log(meal);
	
	for(i=0;i<type.length;i++){
		for(j=0;j<meal.length;j++){
			MatchToMeal(type[i],meal[j]);	
		}
	}
	Meals=unique(Cluster[0]);//remove duplicies from Meals Array
	Ing=unique(Cluster[1]);//remove duplicies from Ingredients Array
	
	AllIng=unique(RemoveQ(CombineIng(Ing)));
	Cals=AddCalories(Cals,Meals);
	
	
	weeklyMealList.push([$("#weeklist").children().eq(day).text(),Meals]);
	weeklyIngList.push([$("#weeklist").children().eq(day).text(),AllIng]);
	weeklyCals.push([$("#weeklist").children().eq(day).text(),Cals]);
	
	
	$('.active').removeClass("active");//removes selected Meals from previous day
	chosen=[];//clears chosen array so they arent appened to next day
	
	if(day!=6){//Goes to next day
		day++;
		showDay(day);
	}else if(day===6){
		$("#GetList").hide();
		$("#PrintList").show();
	}
	

	

		
});///End Buttonpress


$("#PrintList").click(function(){////changes screen to printable format with all information
	$('#Page1').empty();
	var WeeklyIng=[];
	var totalCals=0;
	
	for(i=0;i<weeklyMealList.length;i++){
		$('#Page1').append("<h1 class='printh1'><b>"+ weeklyMealList[i][0]+"---Total Calories:"+weeklyCals[i][1]+"</b></h1>");///lists day of week and calories
		for(j=0;j<weeklyMealList[i][1].length;j++){
			$('#Page1').append("<p class='printp'>"+weeklyMealList[i][1][j]+"</p>");//lists all meals for that single day
		}
	}
	
	for(i=0;i<weeklyCals.length;i++){//Adds up calories of everyday
		totalCals=totalCals+weeklyCals[i][1];
		}
	$('#Page1').append("<h1 class='printh1'><b> Your Weekly Caloric Intake is:"+totalCals+"</b></h1>");//prints total weekly caloric intake

	
	for(i=0;i<weeklyIngList.length;i++){
		for(j=0;j<weeklyIngList[i][1].length;j++){
			WeeklyIng.push(weeklyIngList[i][1][j]);//pushes each ingredient of everyday into one list
		}
	}
	
	$('#Page1').append("<h1 class='printh1ing'><b>Ingredient List for Week</b></h1>");//ingredient list label
	WeeklyIng=unique(WeeklyIng);//removes duplicies from when meals were compiled above
	for(i=0;i<WeeklyIng.length;i++){
		$('#Page1').append("<p class='printp'>"+WeeklyIng[i]+"</p>");//prints unqie list of all ingredidents
	}
});











});///end of document ready
