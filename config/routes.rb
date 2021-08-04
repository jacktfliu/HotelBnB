Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :listings, only: [:index, :show, :create, :update, :destroy]
    resources :users, only: [:create]
    resources :reservation, only: [:show, :index, :create, :destroy, :update]
    resources :reviews, only:[:index, :show, :create, :destroy]
    resource :session, only: [:create, :destroy, :show]
  end

end
