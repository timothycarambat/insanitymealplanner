$(document).ready(function(){
	$("#Sun").show();
	$("#Mon,#Tue,#Wed,#Thu,#Fri,#Sat,#PrintList").hide();
	 day=0;
	 
	$('#ChevRight').click(function(){		
			if(day!=6){//Goes to next day
				day++;
				showDay(day);
				$('.active').removeClass("active");//removes selected Meals from previous day
				chosen=[];//clears chosen array so they arent appened to next day
			}else if(day===6){
				$("#GetList").hide();
				$("#PrintList").show();
			}	
	});
	$('#ChevLeft').click(function(){		
			if(day!=0){//Goes to next day
				day--;
				showDay(day);
				$('.active').removeClass("active");//removes selected Meals from previous day
				chosen=[];//clears chosen array so they arent appened to next day
				$("#GetList").show();
				$("#PrintList").hide();
			}	

	});
	
});//End of Doc.ready()

function showDay(num){
	if(num===0){
	$("#Sun").show();
	$("#Mon,#Tue,#Wed,#Thu,#Fri,#Sat").hide();
		}
	else if(num===1){
	$("#Mon").show();
	$("#Sun,#Tue,#Wed,#Thu,#Fri,#Sat").hide();
	}
	else if(num===2){
	$("#Tue").show();
	$("#Sun,#Mon,#Wed,#Thu,#Fri,#Sat").hide();
	}
	else if(num===3){
	$("#Wed").show();
	$("#Sun,#Mon,#Tue,#Thu,#Fri,#Sat").hide();
	}
	else if(num===4){
	$("#Thu").show();
	$("#Sun,#Mon,#Tue,#Wed,#Fri,#Sat").hide();
	}
	else if(num===5){
	$("#Fri").show();
	$("#Sun,#Mon,#Tue,#Wed,#Thu,#Sat").hide();
	}
	else if(num===6){
	$("#Sat").show();
	$("#Sun,#Mon,#Tue,#Wed,#Thu,#Fri").hide();
	}
};

