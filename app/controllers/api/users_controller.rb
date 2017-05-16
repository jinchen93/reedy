class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find(params[:id])

    if current_user == @user
      if current_user.update(user_password_param)
        render json: current_user
      else
        render json: current_user.errors.full_messages, status: 422
      end
    else
      render json: { error: 'You cannot update this user' }, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end

  def user_password_param
    params.require(:user).permit(:password)
  end
end
