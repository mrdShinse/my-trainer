Rails.application.routes.draw do
  devise_for :users
  root to: "top#index"
  get 'dashboard' => "dashboard#index"

  namespace 'training' do
    resource 'exercise', :only => [:new, :create, :update, :destoy] do
      get 'view'
      get 'menus'
    end
    namespace 'log' do
      get 'search'
    end
  end

  namespace 'analyze' do
    get 'view'
  end

  resource 'profile', :only => [:show, :update]
end
