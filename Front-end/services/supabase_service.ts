// 레시피 추천 API
async function recommendRecipes(preferences) {
    const { data, error } = await supabase
      .rpc('get_recommended_recipes', { 
        user_preferences: preferences 
      });
    return data;
  }
  
  // 레시피 상세 정보 API
  async function getRecipeDetails(recipeId) {
    const { data, error } = await supabase
      .from('recipes')
      .select(`
        *,
        ingredients:recipe_ingredients(
          ingredient:ingredients(*)
        ),
        steps:cooking_steps(*)
      `)
      .eq('id', recipeId)
      .single();
    return data;
  }