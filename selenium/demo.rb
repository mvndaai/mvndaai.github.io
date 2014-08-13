require 'selenium-webdriver'

#@slow = true

driver = Selenium::WebDriver.for :firefox
begin
  driver.navigate.to "http://mvndaai.github.io/selenium/index.html"
  sleep 1 if @slow

  header = driver.find_element(:css, 'h1')
  puts "Header: #{header.text}"

  text = driver.find_element(:id, 'text')
  text.send_keys "Text to clear"
  sleep 1 if @slow
  text.clear
  text.send_keys "Selenium Tutorial"
  sleep 1 if @slow

  checkbox = driver.find_element(:xpath, '//*[@id="checkbox_2"]')
  checkbox.click
  sleep 1 if @slow

  radio = driver.find_element(:css, '#radio_2')
  radio.click
  sleep 1 if @slow

  selector = driver.find_element(:xpath, "//*[@id='selects']/option[2]")
  selector.click
  sleep 1 if @slow

  puts "Hidden Section: #{!driver.find_element(:id,"hide").displayed?}"
  javascript = "document.getElementById('hide').style.display = 'none';"
  driver.execute_script(javascript)
  puts "Hidden Section: #{!driver.find_element(:id,"hide").displayed?}"
  sleep 1 if @slow

  button = driver.find_element(:css, '#button')
  button.click
  sleep 1 if @slow

  alert = driver.switch_to.alert
  puts "Alert Text: #{alert.text}"
  alert.accept
  sleep 1 if @slow

  link = driver.find_element(:css, 'a')
  link.click
  sleep 1 if @slow

  bottom = driver.find_element(:id, 'bottom')
  bottom.location_once_scrolled_into_view
  sleep 1 if @slow
  top = driver.find_element(:id, 'top')
  top.location_once_scrolled_into_view
  sleep 1 if @slow

  driver.manage.window.move_to(300, 400)
  sleep 1 if @slow

  driver.manage.window.maximize
  sleep 1 if @slow

  driver.manage.window.resize_to(500, 800)
  sleep 1 if @slow

  driver.execute_script("alert('You made it to the end');")
  sleep 3
  driver.switch_to.alert.accept


rescue => e
  puts "Error: #{e}"
ensure
  driver.quit
end

#https://code.google.com/p/selenium/wiki/RubyBindings
#http://selenium.googlecode.com/svn/trunk/docs/api/rb/Selenium/WebDriver/ActionBuilder.html
