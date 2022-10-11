require 'spec_helper'

describe docker_image('devopstestlab/nginx-helloworld') do
  it { should exist }
end

describe port(80) do
  it { should be_listening }
end

