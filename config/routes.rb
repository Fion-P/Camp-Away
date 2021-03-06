Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :camps, only: [:index, :show]
    resources :bookings, only: [:create, :show, :destroy, :update]
    resources :reviews, only: [:create, :show, :update, :destroy]
  end
  

  root "static_pages#root"
end
