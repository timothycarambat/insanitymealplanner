// MealMatchFunction

function MatchToMeal(type,meal){
	//////////////////////Breakfasts//////////////////////////
	if(type==0&& meal==0){
		Meals.push(Breakfast.Proatmeal.name);
		Ing.push(Breakfast.Proatmeal.ingredients);
		Cals.push(Breakfast.Proatmeal.nutrition[0]);
	}else if(type==0&& meal==1){
		Meals.push(Breakfast.Fruit_and_Cottage_Cheese.name);
		Ing.push(Breakfast.Fruit_and_Cottage_Cheese.ingredients);
		Cals.push(Breakfast.Fruit_and_Cottage_Cheese.nutrition[0]);
	}else if(type==0&& meal==2){
		Meals.push(Breakfast.Berry_Protein_Smoothie.name);
		Ing.push(Breakfast.Berry_Protein_Smoothie.ingredients);
		Cals.push(Breakfast.Berry_Protein_Smoothie.nutrition[0]);
	}else if(type==0&& meal==3){
		Meals.push(Breakfast.Bagel_and_Lox.name);
		Ing.push(Breakfast.Bagel_and_Lox.ingredients);
		Cals.push(Breakfast.Bagel_and_Lox.nutrition[0]);
	}else if(type==0&& meal==4){
		Meals.push(Breakfast.Egg_White_and_Fruit_Plate.name);
		Ing.push(Breakfast.Egg_White_and_Fruit_Plate.ingredients);
		Cals.push(Breakfast.Egg_White_and_Fruit_Plate.nutrition[0]);
	}else if(type==0&& meal==5){
		Meals.push(Breakfast.Egg_White_Breakfast_Wrap.name);
		Ing.push(Breakfast.Egg_White_Breakfast_Wrap.ingredients);
		Cals.push(Breakfast.Egg_White_Breakfast_Wrap.nutrition[0]);
	}else if(type==0&& meal==6){
		Meals.push(Breakfast.Cereal_Bowl.name);
		Ing.push(Breakfast.Cereal_Bowl.ingredients);
		Cals.push(Breakfast.Cereal_Bowl.nutrition[0]);
	}else if(type==0&& meal==7){
		Meals.push(Breakfast.Shakeology_Shake.name);
		Ing.push(Breakfast.Shakeology_Shake.ingredients);
		Cals.push(Breakfast.Shakeology_Shake.nutrition[0]);
	}else if(type==0&& meal==8){
		Meals.push(Breakfast.Peanut_Butter_Toast.name);
		Ing.push(Breakfast.Peanut_Butter_Toast.ingredients);
		Cals.push(Breakfast.Peanut_Butter_Toast.nutrition[0]);
	}else if(type==0&& meal==9){
		Meals.push(Breakfast.Veggie_Omelet.name);
		Ing.push(Breakfast.Veggie_Omelet.ingredients);
		Cals.push(Breakfast.Veggie_Omelet.nutrition[0]);
	}
	//////////////////Snack One/////////////////////////////////
	 else if(type==1&& meal==0){
		Meals.push(Snack1.Mexican_Style_Eggs.name);
		Ing.push(Snack1.Mexican_Style_Eggs.ingredients);
		Cals.push(Snack1.Mexican_Style_Eggs.nutrition[0]);
	}else if(type==1&& meal==1){
		Meals.push(Snack1.Warm_Cereal_Bowl.name);
		Ing.push(Snack1.Warm_Cereal_Bowl.ingredients);
		Cals.push(Snack1.Warm_Cereal_Bowl.nutrition[0]);
	}else if(type==1&& meal==2){
		Meals.push(Snack1.Protein_Pancake.name);
		Ing.push(Snack1.Protein_Pancake.ingredients);
		Cals.push(Snack1.Protein_Pancake.nutrition[0]);
	}else if(type==1&& meal==3){
		Meals.push(Snack1.Egg_Sandwhich.name);
		Ing.push(Snack1.Egg_Sandwhich.ingredients);
		Cals.push(Snack1.Egg_Sandwhich.nutrition[0]);
	}else if(type==1&& meal==4){
		Meals.push(Snack1.Protein_Omelet.name);
		Ing.push(Snack1.Protein_Omelet.ingredients);
		Cals.push(Snack1.Protein_Omelet.nutrition[0]);
	}else if(type==1&& meal==5){
		Meals.push(Snack1.Vanilla_Berry_Protein_Shake.name);
		Ing.push(Snack1.Vanilla_Berry_Protein_Shake.ingredients);
		Cals.push(Snack1.Vanilla_Berry_Protein_Shake.nutrition[0]);
	}else if(type==1&& meal==6){
		Meals.push(Snack1.Yogurt_Bowl.name);
		Ing.push(Snack1.Yogurt_Bowl.ingredients);
		Cals.push(Snack1.Yogurt_Bowl.nutrition[0]);
	}else if(type==1&& meal==7){
		Meals.push(Snack1.Nutrition_Bar.name);
		Ing.push(Snack1.Nutrition_Bar.ingredients);
		Cals.push(Snack1.Nutrition_Bar.nutrition[0]);
	}else if(type==1&& meal==8){
		Meals.push(Snack1.Deli_Sandwhich.name);
		Ing.push(Snack1.Deli_Sandwhich.ingredients);
		Cals.push(Snack1.Deli_Sandwhich.nutrition[0]);
	}else if(type==1&& meal==9){
		Meals.push(Snack1.Turkey_BLT.name);
		Ing.push(Snack1.Turkey_BLT.ingredients);
		Cals.push(Snack1.Turkey_BLT.nutrition[0]);
	}
	////////////////////Lunch//////////////////////////////////
	 else if(type==2&& meal==0){
		Meals.push(Lunch.Grilled_Chicken_Salad.name);
		Ing.push(Lunch.Grilled_Chicken_Salad.ingredients);
		Cals.push(Lunch.Grilled_Chicken_Salad.nutrition[0]);
	}else if(type==2&& meal==1){
		Meals.push(Lunch.Sushi.name);
		Ing.push(Lunch.Sushi.ingredients);
		Cals.push(Lunch.Sushi.nutrition[0]);
	}else if(type==2&& meal==2){
		Meals.push(Lunch.Black_Bean_Soup_And_Half_Sandwhich.name);
		Ing.push(Lunch.Black_Bean_Soup_And_Half_Sandwhich.ingredients);
		Cals.push(Lunch.Black_Bean_Soup_And_Half_Sandwhich.nutrition[0]);
	}else if(type==2&& meal==3){
		Meals.push(Lunch.Roast_Beef_Sandwhich.name);
		Ing.push(Lunch.Roast_Beef_Sandwhich.ingredients);
		Cals.push(Lunch.Roast_Beef_Sandwhich.nutrition[0]);
	}else if(type==2&& meal==4){
		Meals.push(Lunch.Teryaki_Grilled_Tuna.name);
		Ing.push(Lunch.Teryaki_Grilled_Tuna.ingredients);
		Cals.push(Lunch.Teryaki_Grilled_Tuna.nutrition[0]);
	}else if(type==2&& meal==5){
		Meals.push(Lunch.Shakeology.name);
		Ing.push(Lunch.Shakeology.ingredients);
		Cals.push(Lunch.Shakeology.nutrition[0]);
	}else if(type==2&& meal==6){
		Meals.push(Lunch.Chicken_Ranch_Wrap.name);
		Ing.push(Lunch.Chicken_Ranch_Wrap.ingredients);
		Cals.push(Lunch.Chicken_Ranch_Wrap.nutrition[0]);
	}else if(type==2&& meal==7){
		Meals.push(Lunch.Lean_Burger.name);
		Ing.push(Lunch.Lean_Burger.ingredients);
		Cals.push(Lunch.Lean_Burger.nutrition[0]);
	}else if(type==2&& meal==8){
		Meals.push(Lunch.Whole_Wheat_Pasta_with_Vegetables_and_Feta.name);
		Ing.push(Lunch.Whole_Wheat_Pasta_with_Vegetables_and_Feta.ingredients);
		Cals.push(Lunch.Whole_Wheat_Pasta_with_Vegetables_and_Feta.nutrition[0]);
	}else if(type==2&& meal==9){
		Meals.push(Lunch.Salmon_Nicoise_Plate.name);
		Ing.push(Lunch.Salmon_Nicoise_Plate.ingredients);
		Cals.push(Lunch.Salmon_Nicoise_Plate.nutrition[0]);
	}
	////////////////////////////Snack Two///////////////////////
	 else if(type==3&& meal==0){
		Meals.push(Snack2.Sashimi.name);
		Ing.push(Snack2.Sashimi.ingredients);
		Cals.push(Snack2.Sashimi.nutrition[0]);
	}else if(type==3&& meal==1){
		Meals.push(Snack2.Insanity_Special_Nut_Butter_and_Jelly_Sandwhich.name);
		Ing.push(Snack2.Insanity_Special_Nut_Butter_and_Jelly_Sandwhich.ingredients);
		Cals.push(Snack2.Insanity_Special_Nut_Butter_and_Jelly_Sandwhich.nutrition[0]);
	}else if(type==3&& meal==2){
		Meals.push(Snack2.Cold_Cut_Platter.name);
		Ing.push(Snack2.Cold_Cut_Platter.ingredients);
		Cals.push(Snack2.Cold_Cut_Platter.nutrition[0]);
	}else if(type==3&& meal==3){
		Meals.push(Snack2.Tuna_Salad_In_a_Tomato.name);
		Ing.push(Snack2.Tuna_Salad_In_a_Tomato.ingredients);
		Cals.push(Snack2.Tuna_Salad_In_a_Tomato.nutrition[0]);
	}else if(type==3&& meal==4){
		Meals.push(Snack2.Turkey_Lettuce_Wrap_and_Bean_Salad.name);
		Ing.push(Snack2.Turkey_Lettuce_Wrap_and_Bean_Salad.ingredients);
		Cals.push(Snack2.Turkey_Lettuce_Wrap_and_Bean_Salad.nutrition[0]);
	}else if(type==3&& meal==5){
		Meals.push(Snack2.Turkey_Chili.name);
		Ing.push(Snack2.Turkey_Chili.ingredients);
		Cals.push(Snack2.Turkey_Chili.nutrition[0]);
	}else if(type==3&& meal==6){
		Meals.push(Snack2.Protein_Pizza_Muffin.name);
		Ing.push(Snack2.Protein_Pizza_Muffin.ingredients);
		Cals.push(Snack2.Protein_Pizza_Muffin.nutrition[0]);
	}else if(type==3&& meal==7){
		Meals.push(Snack2.Shrimp_Cocktail_Platter.name);
		Ing.push(Snack2.Shrimp_Cocktail_Platter.ingredients);
		Cals.push(Snack2.Shrimp_Cocktail_Platter.nutrition[0]);
	}else if(type==3&& meal==8){
		Meals.push(Snack2.Rotisserie_Chicken_and_Salad.name);
		Ing.push(Snack2.Rotisserie_Chicken_and_Salad.ingredients);
		Cals.push(Snack2.Rotisserie_Chicken_and_Salad.nutrition[0]);
	}else if(type==3&& meal==9){
		Meals.push(Snack2.Roast_Beef_Wrap.name);
		Ing.push(Snack2.Roast_Beef_Wrap.ingredients);
		Cals.push(Snack2.Roast_Beef_Wrap.nutrition[0]);
	}
	////////////////////////////Dinner/////////////////////////
	 else if(type==4&& meal==0){
		Meals.push(Dinner.Baked_Cod_With_Steamed_Carrots_Corn_and_Cauliflower.name);
		Ing.push(Dinner.Baked_Cod_With_Steamed_Carrots_Corn_and_Cauliflower.ingredients);
		Cals.push(Dinner.Baked_Cod_With_Steamed_Carrots_Corn_and_Cauliflower.nutrition[0]);
	}else if(type==4&& meal==1){
		Meals.push(Dinner.Dinner_Omelet.name);
		Ing.push(Dinner.Dinner_Omelet.ingredients);
		Cals.push(Dinner.Dinner_Omelet.nutrition[0]);
	}else if(type==4&& meal==2){
		Meals.push(Dinner.Steak_With_Broccoli.name);
		Ing.push(Dinner.Steak_With_Broccoli.ingredients);
		Cals.push(Dinner.Steak_With_Broccoli.nutrition[0]);
	}else if(type==4&& meal==3){
		Meals.push(Dinner.Chicken_Meatballs.name);
		Ing.push(Dinner.Chicken_Meatballs.ingredients);
		Cals.push(Dinner.Chicken_Meatballs.nutrition[0]);
	}else if(type==4&& meal==4){
		Meals.push(Dinner.Grilled_Salmon_with_Asparagus.name);
		Ing.push(Dinner.Grilled_Salmon_with_Asparagus.ingredients);
		Cals.push(Dinner.Grilled_Salmon_with_Asparagus.nutrition[0]);
	}else if(type==4&& meal==5){
		Meals.push(Dinner.Turkey_Burger.name);
		Ing.push(Dinner.Turkey_Burger.ingredients);
		Cals.push(Dinner.Turkey_Burger.nutrition[0]);
	}else if(type==4&& meal==6){
		Meals.push(Dinner.Brown_Rice_Bowl.name);
		Ing.push(Dinner.Brown_Rice_Bowl.ingredients);
		Cals.push(Dinner.Brown_Rice_Bowl.nutrition[0]);
	}else if(type==4&& meal==7){
		Meals.push(Dinner.Citrus_Baked_Chicken_With_Glazed_Carrots.name);
		Ing.push(Dinner.Citrus_Baked_Chicken_With_Glazed_Carrots.ingredients);
		Cals.push(Dinner.Citrus_Baked_Chicken_With_Glazed_Carrots.nutrition[0]);
	}else if(type==4&& meal==8){
		Meals.push(Dinner.Chicken_Stir_Fry_with_Broccoli_Mushrooms_and_Snow_Peas.name);
		Ing.push(Dinner.Chicken_Stir_Fry_with_Broccoli_Mushrooms_and_Snow_Peas.ingredients);
		Cals.push(Dinner.Chicken_Stir_Fry_with_Broccoli_Mushrooms_and_Snow_Peas.nutrition[0]);
	}else if(type==4&& meal==9){
		Meals.push(Dinner.Pasta_With_Seafood_Marinara.name);
		Ing.push(Dinner.Pasta_With_Seafood_Marinara.ingredients);
		Cals.push(Dinner.Pasta_With_Seafood_Marinara.nutrition[0]);
	}
	
	Cluster=[Meals,Ing,Cals];
	return  Cluster;
	
};









////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////Uniques Function////////////////////////////////////////////////
function unique(list) {
    var result = [];
    $.each(list, function(i, e) {
        if ($.inArray(e, result) == -1) result.push(e);
    });
    return result;
}
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////Combine All ingredients Function////////////////////////////////

function CombineIng(list){///Each item of list will have nested list.
	var result=[];
	for(i=0;i<list.length;i++){
		for(j=0;j<list[i].length;j++){
			result.push(list[i][j]);
		}
	}
	return result;
}

////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////Remove Quantities Function/////////////////////////////////////

function RemoveQ(list){
	var result=[];
	for(i=0;i<list.length;i++){
		list[i]=list[i].replace(/[0-9]/g, "").replace(/\//g, "").replace(/Cup|\inch|\sliced|\Tbsp|\Tsbp|\tsp.|\tsp|\Scoop|\whole|\OZ.|\%|\slices|\large|\scoop|\serving|\slice|\cups|\of|\.|\  |\whole-grain|\-/g,"");
		list[i]=list[i].trim();
		result.push(list[i]);
	}
	
	return result;
}

function AddCalories(list,counter){
	var total=0;
		for(i=0;i<counter.length;i++){
			list[i]=list[i].replace("calories","");
			list[i]=parseInt(list[i]);
		}
		
		for(i=0;i<counter.length;i++){
			total=total+list[i];
		}
		
		return total;
}

