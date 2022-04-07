Rails.application.routes.draw do
  get '/styleguide', to: 'styleguide#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
