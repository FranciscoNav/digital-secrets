class PostsController < ApplicationController
    before_action :authorized

    def index
        user = User.find_by(id: session[:user_id])
        # byebug
        posts = user.posts
        render json: posts
    end

    def create
        user = User.find_by(id: session[:user_id])
        post = user.posts.create(post_params)
        if post.valid?
            render json: post, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end
 
    def show
        user = User.find_by(id: session[:user_id])
        post = user.posts.find_by(id: params[:id])
        if post
            render json: post
        else
            render json: { error: "Not Authorized"}, status: :unauthorized
        end
    end

    def update
        user = User.find_by(id: session[:user_id])
        post = user.posts.find_by(id: params[:id])
        if post
            post.update(post_params)
            render json: post  
        else
            render json: { error: "Not Authorized"}, status: :unauthorized
        end
    end

    def destroy
        user = User.find_by(id: session[:user_id])
        post = user.posts.find_by(id: params[:id])
        if post
            post.destroy
            head :no_content   
        else
            render json: { error: "Not Authorized"}, status: :unauthorized
        end
    end

    private 

    def post_params
        params.permit(:title, :content, :date)
    end

    def authorized
        return render json: {error: "unauthorized" }, status: :unauthorized unless session.include? :user_id
    end
end