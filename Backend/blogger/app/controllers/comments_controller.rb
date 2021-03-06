class CommentsController < ApplicationController

  # GET /comments
  def index
    @comments = Comment.all

    render json: @comments
  end

  # GET /comments/1
  def show
    render json: @comment
  end

  # POST /blogzs/:blogz_id/comments
  def create
    @comment = Comment.new(comment_params)
    @comment.blogz_id = params[:blogz_id]

    if @comment.save
      render json: @comment, status: :created
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /comments/1
  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comments/1
  def destroy
    @comment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comments
      @comments = Comments.find(params[:id])
    end


    # Only allow a list of trusted parameters through.
    def comment_params
      params.require(:comment).permit(:name, :email, :ideas)
    end
end
