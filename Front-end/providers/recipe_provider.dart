// lib/providers/recipe_provider.dart
final recipeProvider = StateNotifierProvider&lt;RecipeNotifier, List&lt;Recipe&gt;&gt;((ref) {
  return RecipeNotifier();
});

class RecipeNotifier extends StateNotifier&lt;List&lt;Recipe&gt;&gt; {
  RecipeNotifier() : super([]);
  
  Future&lt;void&gt; fetchRecipes() async {
    // API 호출 및 상태 업데이트 로직
  }
}