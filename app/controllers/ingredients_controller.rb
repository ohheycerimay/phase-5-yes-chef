class IngredientsController < ApplicationController

    skip_before_action :authorize, only: [:index, :show, :create, :update, :destroy]

    def index
        render json: Ingredient.all
    end

    def show
        ingredient = Ingredient.find_by_id(params[:id])
            if ingredient
                render json: ingredient
            else
                render json: { error: "ingredient not found" }, status: :not_found
            end
    end

    def create
        ingredient = Ingredient.create(ingredient_params)
            if ingredient.valid?
                render json: ingredient
            else 
                render json: {error: ingredient.errors.full_messages}, status: :unprocessable_entity
            end
    end

    def update 
        ingredient = Ingredient.find_by_id(params[:id])
        if ingredient
            ingredient.update(likes)
            render json: ingredient
        else
            render json: {error: 'ingredient not found'}, status: :not_found
        end
    end

    def destroy
        ingredient = Ingredient.find_by_id(params[:id])
        if ingredient
            ingredient.destroy
            head :no_content
        else 
            render json: {error: 'ingredient not found'}, status: :not_found
        end
    end 



    private
    def ingredient_params
        params.permit(:name, :image_url, :category)
    end

end
