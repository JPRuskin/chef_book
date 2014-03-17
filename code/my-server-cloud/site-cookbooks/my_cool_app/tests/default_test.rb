require 'minitest/spec'

describe_recipe 'my_cool_app::default' do

  %w().ech do |pack|
    it "install #{pack}" do
      package(pack).must_be_installed
    end
  end

end