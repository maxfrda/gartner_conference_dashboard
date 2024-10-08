module Api
  module V1
    class ConferencesController < ApplicationController
      before_action :set_conference, only: [:show, :update, :destroy]
    
      # GET /conferences
      def index
        @conferences = Conference.all
    
        render json: @conferences
      end
    
      # GET /conferences/1
      def show
        render json: @conference
      end
    
      # POST /conferences
      def create
        conference = Conference.new(conference_params)
        if conference.save
          render json: conference, status: :created
        else
          render json: { errors: conference.errors.full_messages }, status: :unprocessable_entity
        end
      end
    
    
      # PATCH/PUT /conferences/1
      def update
        if @conference.update(conference_params)
          render json: @conference
        else
          render json: @conference.errors, status: :unprocessable_entity
        end
      end
    
      # DELETE /conferences/1
      def destroy
        @conference.destroy
      end
    
      private
        # Use callbacks to share common setup or constraints between actions.
        def set_conference
          @conference = Conference.find(params[:id])
        end
    
        # Only allow a list of trusted parameters through.
        def conference_params
          params.require(:conference).permit(:title, :description, :location, :date, :subtitle)
        end
    end
    
  end
end
