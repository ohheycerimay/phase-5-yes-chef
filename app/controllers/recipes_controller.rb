class RecipesController < ApplicationController

    skip_before_action :authorize, only: [:index, :show]
    

    def index
        render json: Recipe.all
    end

    def show
        recipe = Recipe.find_by_id(params[:id])
            if recipe
                render json: recipe
            else
                render json: { error: "recipe not found" }, status: :not_found
            end
    end

end
