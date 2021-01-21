Rails.application.routes.draw do
  resources :comments
  resources :blogzs do
    resources :comments, only: [:index, :create]
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
