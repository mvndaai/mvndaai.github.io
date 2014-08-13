require 'selenium-webdriver'
#require 'test/unit'

driver = Selenium::WebDriver.for :firefox
begin
  driver.navigate.to "http://mvndaai.github.io/selenium/index.html"
  #sleep 1

  text = driver.find_element(:id, 'text')
  text.send_keys "Text to clear"
  #sleep 1
  text.clear
  text.send_keys "Selenium Tutorial"
  #sleep 1


  checkbox = driver.find_element(:xpath, '//*[@id="checkbox_2"]')
  checkbox.click
  #sleep 1

  radio = driver.find_element(:css, '#radio_2')
  radio.click
  #sleep 1

  selector = driver.find_element(:xpath, "//*[@id='selects']/option[2]")
  selector.click
  #sleep 1

  #javascript = 'document.getElementById(hide).style.display = 'none';'
  javascript = '$("#hide").hide();'
  puts driver.execute_script(javascript)
  sleep 3


  button = driver.find_element(:css, '#button')
  button.click
  #sleep 1

  alert = driver.switch_to.alert
  puts "Alert Text: #{alert.text}"
  alert.accept
  #sleep 1

  link = driver.find_element(:css, 'a')
  link.click
  #sleep 1

  driver.manage.window.move_to(300, 400)
  sleep 1

  driver.manage.window.maximize
  sleep 1

  driver.manage.window.resize_to(500, 800)
  sleep 1



  #Assertion Testing

  sleep 10
rescue => e
  puts "Error: #{e}"
ensure
  driver.quit
end



#https://code.google.com/p/selenium/wiki/RubyBindings
#http://selenium.googlecode.com/svn/trunk/docs/api/rb/Selenium/WebDriver/ActionBuilder.html

=begin
# execute arbitrary javascript
puts driver.execute_script("return window.location.pathname")

# pass elements between Ruby and JavaScript
element = driver.execute_script("return document.body")
driver.execute_script("return arguments[0].tagName", element) #=> "BODY"

# wait for a specific element to show up
wait = Selenium::WebDriver::Wait.new(:timeout => 10) # seconds
wait.until { driver.find_element(:id => "foo") }

# switch to a frame
driver.switch_to.frame "some-frame" # name or id
driver.switch_to.frame driver.find_element(:id, 'some-frame') # frame element

# switch back to the main document
driver.switch_to.default_content

# repositionning and resizing browser window:
driver.manage.window.move_to(300, 400)
driver.manage.window.resize_to(500, 800)
driver.manage.window.maximize

# get an attribute
class_name = element.attribute("class")

# is the element visible on the page?
element.displayed?

# click the element
element.click

# get the element location
element.location

# scroll the element into view, then return its location
element.location_once_scrolled_into_view

# get the width and height of an element
element.size

# press space on an element - see Selenium::WebDriver::Keys for possible values
element.send_keys :space

# get the text of an element
element.text
=end
