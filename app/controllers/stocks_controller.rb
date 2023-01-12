class StocksController < ApplicationController

    #  skip_before_action :authorize, only: [:index, :show, :create, :update, :destroy]

    def index
        render json: Stock.all
    end

    def show
        stock = Stock.find_by_id(params[:id])
            if stock
                render json: stock
            else
                render json: { error: "stock not found" }, status: :not_found
            end
    end

    def create
        stock = Stock.create(stock_params)
            if stock.valid?
                render json: stock
            else 
                render json: {error: stock.errors.full_messages}, status: :unprocessable_entity
            end
    end

    def update 
        stock = Stock.find_by_id(params[:id])
        if stock
            stock.update(likes)
            render json: stock
        else
            render json: {error: 'stock not found'}, status: :not_found
        end
    end

    def destroy
        stock = Stock.find_by_id(params[:id])
        if stock
            stock.destroy
            head :no_content
        else 
            render json: {error: 'stock not found'}, status: :not_found
        end
    end 



    private
    def stock_params
        params.permit(:user_id, :ingredient_id, :amount, :all_day, :all_day_amount)
    end
end
