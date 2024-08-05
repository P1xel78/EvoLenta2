import { State, Action, StateContext } from '@ngxs/store';

export class ToggleLike {
  static readonly type = '[Recipe] Toggle Like';
  constructor(public recipeId: string) {}
}

export interface RecipeStateModel {
  likedRecipes: string[];
}

@State<RecipeStateModel>({
  name: 'recipes',
  defaults: {
    likedRecipes: []
  }
})
export class RecipeState {
  @Action(ToggleLike)
  toggleLike(ctx: StateContext<RecipeStateModel>, action: ToggleLike) {
    const state = ctx.getState();
    const likedRecipes = state.likedRecipes;
    const newLikedRecipes = likedRecipes.includes(action.recipeId)
      ? likedRecipes.filter(id => id !== action.recipeId)
      : [...likedRecipes, action.recipeId];

    ctx.setState({
      ...state,
      likedRecipes: newLikedRecipes
    });
  }
}