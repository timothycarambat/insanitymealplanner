// JavaScript Document----Dude Wheres My Meal? DWMM.js
//Populates the Preview Window
$(document).ready(function(){
  ///Selects If you are in Breakfast[0],Snack1[1],Lunch[2],Snack2[3], or Dinner[4] -----$(this).parent().parent().parent().index()

$('div p').find('p').hover(function(e){
	if($(this).parent().parent().parent().index()==0){///////////////////////////////////////////////////////////////In Breakfast
					
				if($(this).index()==0){
				$('#MealIngedients').text("");
							$('#MealName').text(Breakfast.Proatmeal.name+"---"+Breakfast.Proatmeal.nutrition[0]);
							$.each(Breakfast.Proatmeal.ingredients,function(i,v){
								$('#MealIngedients').append('<p>'+v+'</p>');
							});
							$('#MealPrep').text(Breakfast.Proatmeal.prep);

							
				}else if($(this).index()==1){
				$('#MealIngedients').text("");
							$('#MealName').text(Breakfast.Fruit_and_Cottage_Cheese.name+"---"+Breakfast.Fruit_and_Cottage_Cheese.nutrition[0]);
							$.each(Breakfast.Fruit_and_Cottage_Cheese.ingredients,function(i,v){
								$('#MealIngedients').append('<p>'+v+'</p>');
							});
							$('#MealPrep').text(Breakfast.Fruit_and_Cottage_Cheese.prep);
							
				}else if($(this).index()==2){
				$('#MealIngedients').text("");
							$('#MealName').text(Breakfast.Berry_Protein_Smoothie.name+"---"+Breakfast.Berry_Protein_Smoothie.nutrition[0]);
							$.each(Breakfast.Berry_Protein_Smoothie.ingredients,function(i,v){
								$('#MealIngedients').append('<p>'+v+'</p>');
							});
							$('#MealPrep').text(Breakfast.Berry_Protein_Smoothie.prep);
							
				}else if($(this).index()==3){
				$('#MealIngedients').text("");
							$('#MealName').text(Breakfast.Bagel_and_Lox.name+"---"+Breakfast.Bagel_and_Lox.nutrition[0]);
							$.each(Breakfast.Bagel_and_Lox.ingredients,function(i,v){
								$('#MealIngedients').append('<p>'+v+'</p>');
							});
							$('#MealPrep').text(Breakfast.Bagel_and_Lox.prep);
							
				}else if($(this).index()==4){
				$('#MealIngedients').text("");
							$('#MealName').text(Breakfast.Egg_White_and_Fruit_Plate.name+"---"+Breakfast.Egg_White_and_Fruit_Plate.nutrition[0]);
							$.each(Breakfast.Egg_White_and_Fruit_Plate.ingredients,function(i,v){
								$('#MealIngedients').append('<p>'+v+'</p>');
							});
							$('#MealPrep').text(Breakfast.Egg_White_and_Fruit_Plate.prep);
							
				}else if($(this).index()==5){
				$('#MealIngedients').text("");
							$('#MealName').text(Breakfast.Egg_White_Breakfast_Wrap.name+"---"+Breakfast.Egg_White_Breakfast_Wrap.nutrition[0]);
							$.each(Breakfast.Egg_White_Breakfast_Wrap.ingredients,function(i,v){
								$('#MealIngedients').append('<p>'+v+'</p>');
							});
							$('#MealPrep').text(Breakfast.Egg_White_Breakfast_Wrap.prep);
							
				}else if($(this).index()==6){
				$('#MealIngedients').text("");
							$('#MealName').text(Breakfast.Cereal_Bowl.name+"---"+Breakfast.Cereal_Bowl.nutrition[0]);
							$.each(Breakfast.Cereal_Bowl.ingredients,function(i,v){
								$('#MealIngedients').append('<p>'+v+'</p>');
							});
							$('#MealPrep').text(Breakfast.Cereal_Bowl.prep);	
							
				}else if($(this).index()==7){
				$('#MealIngedients').text("");
							$('#MealName').text(Breakfast.Shakeology_Shake.name+"---"+Breakfast.Shakeology_Shake.nutrition[0]);
							$.each(Breakfast.Shakeology_Shake.ingredients,function(i,v){
								$('#MealIngedients').append('<p>'+v+'</p>');
							});
							$('#MealPrep').text(Breakfast.Shakeology_Shake.prep);
							
				}else if($(this).index()==8){
				$('#MealIngedients').text("");
							$('#MealName').text(Breakfast.Peanut_Butter_Toast.name+"---"+Breakfast.Peanut_Butter_Toast.nutrition[0]);
							$.each(Breakfast.Peanut_Butter_Toast.ingredients,function(i,v){
								$('#MealIngedients').append('<p>'+v+'</p>');
							});
							$('#MealPrep').text(Breakfast.Peanut_Butter_Toast.prep);
							
				}else if($(this).index()==9){
				$('#MealIngedients').text("");
							$('#MealName').text(Breakfast.Veggie_Omelet.name+"---"+Breakfast.Veggie_Omelet.nutrition[0]);
							$.each(Breakfast.Veggie_Omelet.ingredients,function(i,v){
								$('#MealIngedients').append('<p>'+v+'</p>');
							});
							$('#MealPrep').text(Breakfast.Veggie_Omelet.prep);
				}
	}else if($(this).parent().parent().parent().index()==1){/////////////////////////////////////////////////////////////////////In Snack1
				if($(this).index()==0){
				$('#MealIngedients').text("");
							$('#MealName').text(Snack1.Mexican_Style_Eggs.name+"---"+Snack1.Mexican_Style_Eggs.nutrition[0]);
							$.each(Snack1.Mexican_Style_Eggs.ingredients,function(i,v){
								$('#MealIngedients').append('<p>'+v+'</p>');
							});
							$('#MealPrep').text(Snack1.Mexican_Style_Eggs.prep);
							
				}else if($(this).index()==1){
				$('#MealIngedients').text("");
							$('#MealName').text(Snack1.Warm_Cereal_Bowl.name+"---"+Snack1.Warm_Cereal_Bowl.nutrition[0]);
							$.each(Snack1.Warm_Cereal_Bowl.ingredients,function(i,v){
								$('#MealIngedients').append('<p>'+v+'</p>');
							});
							$('#MealPrep').text(Snack1.Warm_Cereal_Bowl.prep);
							
				}else if($(this).index()==2){
				$('#MealIngedients').text("");
							$('#MealName').text(Snack1.Protein_Pancake.name+"---"+Snack1.Protein_Pancake.nutrition[0]);
							$.each(Snack1.Protein_Pancake.ingredients,function(i,v){
								$('#MealIngedients').append('<p>'+v+'</p>');
							});
							$('#MealPrep').text(Snack1.Protein_Pancake.prep);
							
				}else if($(this).index()==3){
				$('#MealIngedients').text("");
							$('#MealName').text(Snack1.Egg_Sandwhich.name+"---"+Snack1.Egg_Sandwhich.nutrition[0]);
							$.each(Snack1.Egg_Sandwhich.ingredients,function(i,v){
								$('#MealIngedients').append('<p>'+v+'</p>');
							});
							$('#MealPrep').text(Snack1.Egg_Sandwhich.prep);
							
				}else if($(this).index()==4){
				$('#MealIngedients').text("");
							$('#MealName').text(Snack1.Protein_Omelet.name+"---"+Snack1.Protein_Omelet.nutrition[0]);
							$.each(Snack1.Protein_Omelet.ingredients,function(i,v){
								$('#MealIngedients').append('<p>'+v+'</p>');
							});
							$('#MealPrep').text(Snack1.Protein_Omelet.prep);
							
				}else if($(this).index()==5){
				$('#MealIngedients').text("");
							$('#MealName').text(Snack1.Vanilla_Berry_Protein_Shake.name+"---"+Snack1.Vanilla_Berry_Protein_Shake.nutrition[0]);
							$.each(Snack1.Vanilla_Berry_Protein_Shake.ingredients,function(i,v){
								$('#MealIngedients').append('<p>'+v+'</p>');
							});
							$('#MealPrep').text(Snack1.Vanilla_Berry_Protein_Shake.prep);
							
				}else if($(this).index()==6){
				$('#MealIngedients').text("");
							$('#MealName').text(Snack1.Yogurt_Bowl.name+"---"+Snack1.Yogurt_Bowl.nutrition[0]);
							$.each(Snack1.Yogurt_Bowl.ingredients,function(i,v){
								$('#MealIngedients').append('<p>'+v+'</p>');
							});
							$('#MealPrep').text(Snack1.Yogurt_Bowl.prep);	
							
				}else if($(this).index()==7){
				$('#MealIngedients').text("");
							$('#MealName').text(Snack1.Nutrition_Bar.name+"---"+Snack1.Nutrition_Bar.nutrition[0]);
							$.each(Snack1.Nutrition_Bar.ingredients,function(i,v){
								$('#MealIngedients').append('<p>'+v+'</p>');
							});
							$('#MealPrep').text(Snack1.Nutrition_Bar.prep);
							
				}else if($(this).index()==8){
				$('#MealIngedients').text("");
							$('#MealName').text(Snack1.Deli_Sandwhich.name+"---"+Snack1.Deli_Sandwhich.nutrition[0]);
							$.each(Snack1.Deli_Sandwhich.ingredients,function(i,v){
								$('#MealIngedients').append('<p>'+v+'</p>');
							});
							$('#MealPrep').text(Snack1.Deli_Sandwhich.prep);
							
				}else if($(this).index()==9){
				$('#MealIngedients').text("");
							$('#MealName').text(Snack1.Turkey_BLT.name+"---"+Snack1.Turkey_BLT.nutrition[0]);
							$.each(Snack1.Turkey_BLT.ingredients,function(i,v){
								$('#MealIngedients').append('<p>'+v+'</p>');
							});
							$('#MealPrep').text(Snack1.Turkey_BLT.prep);
				}
	
	
	
	}else if($(this).parent().parent().parent().index()==2){/////////////////////////////////////////////////////////////////////In Lunch
				if($(this).index()==0){
							$('#MealIngedients').text("");
										$('#MealName').text(Lunch.Grilled_Chicken_Salad.name+"---"+Lunch.Grilled_Chicken_Salad.nutrition[0]);
										$.each(Lunch.Grilled_Chicken_Salad.ingredients,function(i,v){
											$('#MealIngedients').append('<p>'+v+'</p>');
										});
										$('#MealPrep').text(Lunch.Grilled_Chicken_Salad.prep);
										
							}else if($(this).index()==1){
							$('#MealIngedients').text("");
										$('#MealName').text(Lunch.Sushi.name+"---"+Lunch.Sushi.nutrition[0]);
										$.each(Lunch.Sushi.ingredients,function(i,v){
											$('#MealIngedients').append('<p>'+v+'</p>');
										});
										$('#MealPrep').text(Lunch.Sushi.prep);
										
							}else if($(this).index()==2){
							$('#MealIngedients').text("");
										$('#MealName').text(Lunch.Black_Bean_Soup_And_Half_Sandwhich.name+"---"+Lunch.Black_Bean_Soup_And_Half_Sandwhich.nutrition[0]);
										$.each(Lunch.Black_Bean_Soup_And_Half_Sandwhich.ingredients,function(i,v){
											$('#MealIngedients').append('<p>'+v+'</p>');
										});
										$('#MealPrep').text(Lunch.Black_Bean_Soup_And_Half_Sandwhich.prep);
										
							}else if($(this).index()==3){
							$('#MealIngedients').text("");
										$('#MealName').text(Lunch.Roast_Beef_Sandwhich.name+"---"+Lunch.Roast_Beef_Sandwhich.nutrition[0]);
										$.each(Lunch.Roast_Beef_Sandwhich.ingredients,function(i,v){
											$('#MealIngedients').append('<p>'+v+'</p>');
										});
										$('#MealPrep').text(Lunch.Roast_Beef_Sandwhich.prep);
										
							}else if($(this).index()==4){
							$('#MealIngedients').text("");
										$('#MealName').text(Lunch.Teryaki_Grilled_Tuna.name+"---"+Lunch.Teryaki_Grilled_Tuna.nutrition[0]);
										$.each(Lunch.Teryaki_Grilled_Tuna.ingredients,function(i,v){
											$('#MealIngedients').append('<p>'+v+'</p>');
										});
										$('#MealPrep').text(Lunch.Teryaki_Grilled_Tuna.prep);
										
							}else if($(this).index()==5){
							$('#MealIngedients').text("");
										$('#MealName').text(Lunch.Shakeology.name+"---"+Lunch.Shakeology.nutrition[0]);
										$.each(Lunch.Shakeology.ingredients,function(i,v){
											$('#MealIngedients').append('<p>'+v+'</p>');
										});
										$('#MealPrep').text(Lunch.Shakeology.prep);
										
							}else if($(this).index()==6){
							$('#MealIngedients').text("");
										$('#MealName').text(Lunch.Chicken_Ranch_Wrap.name+"---"+Lunch.Chicken_Ranch_Wrap.nutrition[0]);
										$.each(Lunch.Chicken_Ranch_Wrap.ingredients,function(i,v){
											$('#MealIngedients').append('<p>'+v+'</p>');
										});
										$('#MealPrep').text(Lunch.Chicken_Ranch_Wrap.prep);	
										
							}else if($(this).index()==7){
							$('#MealIngedients').text("");
										$('#MealName').text(Lunch.Lean_Burger.name+"---"+Lunch.Lean_Burger.nutrition[0]);
										$.each(Lunch.Lean_Burger.ingredients,function(i,v){
											$('#MealIngedients').append('<p>'+v+'</p>');
										});
										$('#MealPrep').text(Lunch.Lean_Burger.prep);
										
							}else if($(this).index()==8){
							$('#MealIngedients').text("");
										$('#MealName').text(Lunch.Whole_Wheat_Pasta_with_Vegetables_and_Feta.name+"---"+Lunch.Whole_Wheat_Pasta_with_Vegetables_and_Feta.nutrition[0]);
										$.each(Lunch.Whole_Wheat_Pasta_with_Vegetables_and_Feta.ingredients,function(i,v){
											$('#MealIngedients').append('<p>'+v+'</p>');
										});
										$('#MealPrep').text(Lunch.Whole_Wheat_Pasta_with_Vegetables_and_Feta.prep);
										
							}else if($(this).index()==9){
							$('#MealIngedients').text("");
										$('#MealName').text(Lunch.Salmon_Nicoise_Plate.name+"---"+Lunch.Salmon_Nicoise_Plate.nutrition[0]);
										$.each(Lunch.Salmon_Nicoise_Plate.ingredients,function(i,v){
											$('#MealIngedients').append('<p>'+v+'</p>');
										});
										$('#MealPrep').text(Lunch.Salmon_Nicoise_Plate.prep);
							}
	
	
	}else if($(this).parent().parent().parent().index()==3){//////////////////////////////////////////////////////////////////////////In Snack2
				if($(this).index()==0){
							$('#MealIngedients').text("");
										$('#MealName').text(Snack2.Sashimi.name+"---"+Snack2.Sashimi.nutrition[0]);
										$.each(Snack2.Sashimi.ingredients,function(i,v){
											$('#MealIngedients').append('<p>'+v+'</p>');
										});
										$('#MealPrep').text(Snack2.Sashimi.prep);
										
							}else if($(this).index()==1){
							$('#MealIngedients').text("");
										$('#MealName').text(Snack2.Insanity_Special_Nut_Butter_and_Jelly_Sandwhich.name+"---"+Snack2.Insanity_Special_Nut_Butter_and_Jelly_Sandwhich.nutrition[0]);
										$.each(Snack2.Insanity_Special_Nut_Butter_and_Jelly_Sandwhich.ingredients,function(i,v){
											$('#MealIngedients').append('<p>'+v+'</p>');
										});
										$('#MealPrep').text(Snack2.Insanity_Special_Nut_Butter_and_Jelly_Sandwhich.prep);
										
							}else if($(this).index()==2){
							$('#MealIngedients').text("");
										$('#MealName').text(Snack2.Cold_Cut_Platter.name+"---"+Snack2.Cold_Cut_Platter.nutrition[0]);
										$.each(Snack2.Cold_Cut_Platter.ingredients,function(i,v){
											$('#MealIngedients').append('<p>'+v+'</p>');
										});
										$('#MealPrep').text(Snack2.Cold_Cut_Platter.prep);
										
							}else if($(this).index()==3){
							$('#MealIngedients').text("");
										$('#MealName').text(Snack2.Tuna_Salad_In_a_Tomato.name+"---"+Snack2.Tuna_Salad_In_a_Tomato.nutrition[0]);
										$.each(Snack2.Tuna_Salad_In_a_Tomato.ingredients,function(i,v){
											$('#MealIngedients').append('<p>'+v+'</p>');
										});
										$('#MealPrep').text(Snack2.Tuna_Salad_In_a_Tomato.prep);
										
							}else if($(this).index()==4){
							$('#MealIngedients').text("");
										$('#MealName').text(Snack2.Turkey_Lettuce_Wrap_and_Bean_Salad.name+"---"+Snack2.Turkey_Lettuce_Wrap_and_Bean_Salad.nutrition[0]);
										$.each(Snack2.Turkey_Lettuce_Wrap_and_Bean_Salad.ingredients,function(i,v){
											$('#MealIngedients').append('<p>'+v+'</p>');
										});
										$('#MealPrep').text(Snack2.Turkey_Lettuce_Wrap_and_Bean_Salad.prep);
										
							}else if($(this).index()==5){
							$('#MealIngedients').text("");
										$('#MealName').text(Snack2.Turkey_Chili.name+"---"+Snack2.Turkey_Chili.nutrition[0]);
										$.each(Snack2.Turkey_Chili.ingredients,function(i,v){
											$('#MealIngedients').append('<p>'+v+'</p>');
										});
										$('#MealPrep').text(Snack2.Turkey_Chili.prep);
										
							}else if($(this).index()==6){
							$('#MealIngedients').text("");
										$('#MealName').text(Snack2.Protein_Pizza_Muffin.name+"---"+Snack2.Protein_Pizza_Muffin.nutrition[0]);
										$.each(Snack2.Protein_Pizza_Muffin.ingredients,function(i,v){
											$('#MealIngedients').append('<p>'+v+'</p>');
										});
										$('#MealPrep').text(Snack2.Protein_Pizza_Muffin.prep);	
										
							}else if($(this).index()==7){
							$('#MealIngedients').text("");
										$('#MealName').text(Snack2.Shrimp_Cocktail_Platter.name+"---"+Snack2.Shrimp_Cocktail_Platter.nutrition[0]);
										$.each(Snack2.Shrimp_Cocktail_Platter.ingredients,function(i,v){
											$('#MealIngedients').append('<p>'+v+'</p>');
										});
										$('#MealPrep').text(Snack2.Shrimp_Cocktail_Platter.prep);
										
							}else if($(this).index()==8){
							$('#MealIngedients').text("");
										$('#MealName').text(Snack2.Rotisserie_Chicken_and_Salad.name+"---"+Snack2.Rotisserie_Chicken_and_Salad.nutrition[0]);
										$.each(Snack2.Rotisserie_Chicken_and_Salad.ingredients,function(i,v){
											$('#MealIngedients').append('<p>'+v+'</p>');
										});
										$('#MealPrep').text(Snack2.Rotisserie_Chicken_and_Salad.prep);
										
							}else if($(this).index()==9){
							$('#MealIngedients').text("");
										$('#MealName').text(Snack2.Roast_Beef_Wrap.name+"---"+Snack2.Roast_Beef_Wrap.nutrition[0]);
										$.each(Snack2.Roast_Beef_Wrap.ingredients,function(i,v){
											$('#MealIngedients').append('<p>'+v+'</p>');
										});
										$('#MealPrep').text(Snack2.Roast_Beef_Wrap.prep);
							}
				
	
	
	}else if($(this).parent().parent().parent().index()==4){///////////////////////////////////////////////////////////////////////In Dinner
				if($(this).index()==0){
							$('#MealIngedients').text("");
										$('#MealName').text(Dinner.Baked_Cod_With_Steamed_Carrots_Corn_and_Cauliflower.name+"---"+Dinner.Baked_Cod_With_Steamed_Carrots_Corn_and_Cauliflower.nutrition[0]);
										$.each(Dinner.Baked_Cod_With_Steamed_Carrots_Corn_and_Cauliflower.ingredients,function(i,v){
											$('#MealIngedients').append('<p>'+v+'</p>');
										});
										$('#MealPrep').text(Dinner.Baked_Cod_With_Steamed_Carrots_Corn_and_Cauliflower.prep);
										
							}else if($(this).index()==1){
							$('#MealIngedients').text("");
										$('#MealName').text(Dinner.Dinner_Omelet.name+"---"+Dinner.Dinner_Omelet.nutrition[0]);
										$.each(Dinner.Dinner_Omelet.ingredients,function(i,v){
											$('#MealIngedients').append('<p>'+v+'</p>');
										});
										$('#MealPrep').text(Dinner.Dinner_Omelet.prep);
										
							}else if($(this).index()==2){
							$('#MealIngedients').text("");
										$('#MealName').text(Dinner.Steak_With_Broccoli.name+"---"+Dinner.Steak_With_Broccoli.nutrition[0]);
										$.each(Dinner.Steak_With_Broccoli.ingredients,function(i,v){
											$('#MealIngedients').append('<p>'+v+'</p>');
										});
										$('#MealPrep').text(Dinner.Steak_With_Broccoli.prep);
										
							}else if($(this).index()==3){
							$('#MealIngedients').text("");
										$('#MealName').text(Dinner.Chicken_Meatballs.name+"---"+Dinner.Chicken_Meatballs.nutrition[0]);
										$.each(Dinner.Chicken_Meatballs.ingredients,function(i,v){
											$('#MealIngedients').append('<p>'+v+'</p>');
										});
										$('#MealPrep').text(Dinner.Chicken_Meatballs.prep);
										
							}else if($(this).index()==4){
							$('#MealIngedients').text("");
										$('#MealName').text(Dinner.Grilled_Salmon_with_Asparagus.name+"---"+Dinner.Grilled_Salmon_with_Asparagus.nutrition[0]);
										$.each(Dinner.Grilled_Salmon_with_Asparagus.ingredients,function(i,v){
											$('#MealIngedients').append('<p>'+v+'</p>');
										});
										$('#MealPrep').text(Dinner.Grilled_Salmon_with_Asparagus.prep);
										
							}else if($(this).index()==5){
							$('#MealIngedients').text("");
										$('#MealName').text(Dinner.Turkey_Burger.name+"---"+Dinner.Turkey_Burger.nutrition[0]);
										$.each(Dinner.Turkey_Burger.ingredients,function(i,v){
											$('#MealIngedients').append('<p>'+v+'</p>');
										});
										$('#MealPrep').text(Dinner.Turkey_Burger.prep);
										
							}else if($(this).index()==6){
							$('#MealIngedients').text("");
										$('#MealName').text(Dinner.Brown_Rice_Bowl.name+"---"+Dinner.Brown_Rice_Bowl.nutrition[0]);
										$.each(Dinner.Brown_Rice_Bowl.ingredients,function(i,v){
											$('#MealIngedients').append('<p>'+v+'</p>');
										});
										$('#MealPrep').text(Dinner.Brown_Rice_Bowl.prep);	
										
							}else if($(this).index()==7){
							$('#MealIngedients').text("");
										$('#MealName').text(Dinner.Citrus_Baked_Chicken_With_Glazed_Carrots.name+"---"+Dinner.Citrus_Baked_Chicken_With_Glazed_Carrots.nutrition[0]);
										$.each(Dinner.Citrus_Baked_Chicken_With_Glazed_Carrots.ingredients,function(i,v){
											$('#MealIngedients').append('<p>'+v+'</p>');
										});
										$('#MealPrep').text(Dinner.Citrus_Baked_Chicken_With_Glazed_Carrots.prep);
										
							}else if($(this).index()==8){
							$('#MealIngedients').text("");
										$('#MealName').text(Dinner.Chicken_Stir_Fry_with_Broccoli_Mushrooms_and_Snow_Peas.name+"---"+Dinner.Chicken_Stir_Fry_with_Broccoli_Mushrooms_and_Snow_Peas.nutrition[0]);
										$.each(Dinner.Chicken_Stir_Fry_with_Broccoli_Mushrooms_and_Snow_Peas.ingredients,function(i,v){
											$('#MealIngedients').append('<p>'+v+'</p>');
										});
										$('#MealPrep').text(Dinner.Chicken_Stir_Fry_with_Broccoli_Mushrooms_and_Snow_Peas.prep);
										
							}else if($(this).index()==9){
							$('#MealIngedients').text("");
										$('#MealName').text(Dinner.Pasta_With_Seafood_Marinara.name+"---"+Dinner.Pasta_With_Seafood_Marinara.nutrition[0]);
										$.each(Dinner.Pasta_With_Seafood_Marinara.ingredients,function(i,v){
											$('#MealIngedients').append('<p>'+v+'</p>');
										});
										$('#MealPrep').text(Dinner.Pasta_With_Seafood_Marinara.prep);
							}
	}else{
	$('#MealName').text("Unknown");
	}
	},//end of fucntion
	function(){
	}); //Finds Meal Type
  
});