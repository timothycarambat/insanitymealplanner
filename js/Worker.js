// Worker Script


////////////////////////////////////////////////////////////////////////////
//This gets all of Breakfast Meal list etc.
//$.each(Object.keys(Breakfast), function( i, l ){
//  $('p').append(Breakfast[l].name+'<br>');
//		});
////////////////////////////////////////////////////////////////////////////



$(document).ready(function() {  //makes list out of Lib.js Objects

$.each(Object.keys(Breakfast), function( i, l ){
  $('#BreakfastList').append('<p>'+Breakfast[l].name+'<span class="glyphicon glyphicon-ok-sign"</span>'+'<abbr title="See Meal!"><span class="glyphicon glyphicon-info-sign"></span></abbr>'+'</p>');
		});
$.each(Object.keys(Snack1), function( i, l ){
  $('#Snack1List').append('<p>'+Snack1[l].name+'<span class="glyphicon glyphicon-ok-sign"</span>'+'<abbr title="See Meal!"><span class="glyphicon glyphicon-info-sign"></span></abbr>'+'</p>');
		});
$.each(Object.keys(Lunch), function( i, l ){
  $('#LunchList').append('<p>'+Lunch[l].name+'<span class="glyphicon glyphicon-ok-sign"</span>'+'<abbr title="See Meal!"><span class="glyphicon glyphicon-info-sign"></span></abbr>'+'</p>');
		});
$.each(Object.keys(Snack2), function( i, l ){
  $('#Snack2List').append('<p>'+Snack2[l].name+'<span class="glyphicon glyphicon-ok-sign"</span>'+'<abbr title="See Meal!"><span class="glyphicon glyphicon-info-sign"></span></abbr>'+'</p>');
		});
$.each(Object.keys(Dinner), function( i, l ){
  $('#DinnerList').append('<p>'+Dinner[l].name+'<span class="glyphicon glyphicon-ok-sign"</span>'+'<abbr title="See Meal!"><span class="glyphicon glyphicon-info-sign"></span></abbr>'+'</p>');
		});			
isOpen=false;
});//end of function
////////////////////////////////////////Click Header///////////////////////
$('#BreakfastGlyph').click(function(){  
	 if(isOpen==false){
	 $('#BCont').css('visibility','visible').height('100%');
	 $('#BreakfastGlyph').removeClass('rotate2 rotate').addClass('rotate');
		isOpen=true;
		}else{
	  $('#BCont').css('visibility','hidden').height('0px');
	  $('#BreakfastGlyph').removeClass('rotate2 rotate').addClass('rotate2');
		isOpen=false;
		}
});
$('#Snack1Glyph').click(function(){  
	 if(isOpen==false){
	 $('#S1Cont').css('visibility','visible').height('100%');
	 $('#Snack1Glyph').removeClass('rotate2 rotate').addClass('rotate');
		isOpen=true;
		}else{
	  $('#S1Cont').css('visibility','hidden').height('0px');
	  $('#Snack1Glyph').removeClass('rotate2 rotate').addClass('rotate2');
		isOpen=false;
		}
});
$('#Snack2Glyph').click(function(){  
	 if(isOpen==false){
	 $('#S2Cont').css('visibility','visible').height('100%');
	 $('#Snack2Glyph').removeClass('rotate2 rotate').addClass('rotate');
		isOpen=true;
		}else{
	  $('#S2Cont').css('visibility','hidden').height('0px');
	  $('#Snack2Glyph').removeClass('rotate2 rotate').addClass('rotate2');
		isOpen=false;
		}
});
$('#LunchGlyph').click(function(){  
	 if(isOpen==false){
	 $('#LCont').css('visibility','visible').height('100%');
	 $('#LunchGlyph').removeClass('rotate2 rotate').addClass('rotate');
		isOpen=true;
		}else{
	  $('#LCont').css('visibility','hidden').height('0px');
	  $('#LunchGlyph').removeClass('rotate2 rotate').addClass('rotate2');
		isOpen=false;
		}
});
$('#DinnerGlyph').click(function(){  
	 if(isOpen==false){
	 $('#DCont').css('visibility','visible').height('100%');
	 $('#DinnerGlyph').removeClass('rotate2 rotate').addClass('rotate');
		isOpen=true;
		}else{
	  $('#DCont').css('visibility','hidden').height('0px');
	  $('#DinnerGlyph').removeClass('rotate2 rotate').addClass('rotate2');
		isOpen=false;
		}
});
////////////////////////////////////////End Click Header//////////////////
$(document).ready(function() {
$('#PreviewPanel').hide();
///////////////////////////////////// Changes Text of meal on hover
  $('div p').find('p').hover(function(e){
	$(this).css('color','#0C6')
	},
	function(){
	$(this).css('color','black')
	}); //changes color of text on hover
///////////////////////////////////////////////////////shows preview panel on hover of info glyph
	$('div p p span').find('span').hover(function(e){
	$('#PreviewPanel').show();
	},
	function(){
	$('#PreviewPanel').hide();
	}); 
///////////////////////////////////////////////////////////adds active class to meals you want
	$('div p p').find('span').click(function(){
		$(this).first().toggleClass('active');
		if($(this).first().hasClass('active')==true){
				var loc=[$(this).parent().parent().parent().parent().index(),$(this).parent().index()];
				chosen.push(loc);
				where=[];
		}else{
		chosen.pop();
		}
	})//turns check green
	
});

//////////////////////////////////////////Hide How To Panel////////////
$(document).ready(function(){
	$("#HowToPanel").show();
	$("#ChevLeft,#ChevRight,#BreakfastGlyph,#Snack1Glyph,#LunchGlyph,#Snack2Glyph,#DinnerGlyph").click(function(){
		$("#HowToPanel").hide();
	});
});




