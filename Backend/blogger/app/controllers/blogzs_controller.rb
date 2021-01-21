class BlogzsController < ApplicationController
  before_action :set_blogz, only: [:show, :update, :destroy]

  # GET /blogzs
  def index
    @blogzs = Blogz.all

    render json: @blogzs.to_json(include: :comments)
  end

  # GET /blogzs/1
  def show
    render json: @blogz
  end

  # POST /blogzs
  def create
    @blogz = Blogz.new(blogz_params)

    if @blogz.save
      render json: @blogz, status: :created, location: @blogz
    else
      render json: @blogz.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /blogzs/1
  def update
    if @blogz.update(blogz_params)
      render json: @blogz
    else
      render json: @blogz.errors, status: :unprocessable_entity
    end
  end

  # DELETE /blogzs/1
  def destroy
    @blogz.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_blogz
      @blogz = Blogz.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def blogz_params
      params.require(:blogz).permit(:title, :content, :author, :img)
    end
end
