Rails.application.routes.draw do
  resources :conferences
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :conferences
    end
  end
end
