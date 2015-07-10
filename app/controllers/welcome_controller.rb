class WelcomeController < ApplicationController
  def index
    @meetings = [
      {date: 'today', name: 'some name'}
    ]

  end
end
