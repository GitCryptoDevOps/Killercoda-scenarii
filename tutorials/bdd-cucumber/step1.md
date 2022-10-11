# Install on MacOS

/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew install tree
mkdir cucumber
cd cucumber
tree
# install rbenv and a new Ruby
brew install rbenv ruby-build
echo 'eval "$(rbenv init -)"' >> ~/.bash_profile
source ~/.bash_profile
# install a new Ruby
rbenv install --list
# --> find latest Ruby version
rbenv install 3.0.1
# make the new Ruby the default for your system (http://rbenv.org/)
rbenv global 3.0.1
sudo gem install bundler
# add the Gemfile with reference to the gem cucumber
cat <<EOF> Gemfile
gem 'cucumber'
EOF
# Install cucumber
bundle
bundle exec cucumber --version

# install chromedriver
brew install chromedriver
bundle exec cucumber features
# or
cucumber features DRIVER=chrome --profile=html_report

https://nodejs.org/en/download/

sudo gem install cucumber
bundle
cucumber --help
