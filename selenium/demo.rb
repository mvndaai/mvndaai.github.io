require 'selenium-webdriver'
#require 'test/unit'

driver = Selenium::WebDriver.for :firefox
begin
  driver.navigate.to "http://mvndaai.github.io/selenium/index.html"
  sleep 1

  text = driver.find_element(:id, 'text')
  text.send_keys "Text to clear"
  sleep 1
  text.clear
  text.send_keys "Selenium Tutorial"
  sleep 1

  checkbox = driver.find_element(:xpath, '//*[@id="checkbox_2"]')
  checkbox.click
  sleep 1

  radio = driver.find_element(:css, '#radio_2')
  radio.click
  sleep 1

  selector = driver.find_element(:xpath, "//*[@id='selects']/option[2]")
  selector.click
  sleep 1

  javascript = "document.getElementById('hide').style.display = 'none';"
  driver.execute_script(javascript)
  #element.displayed?
  sleep 1

  button = driver.find_element(:css, '#button')
  button.click
  sleep 1

  alert = driver.switch_to.alert
  puts "Alert Text: #{alert.text}"
  alert.accept
  sleep 1

  link = driver.find_element(:css, 'a')
  link.click
  sleep 1

  bottom = driver.find_element(:id, 'bottom')
  bottom.location_once_scrolled_into_view
  sleep 1
  top = driver.find_element(:id, 'top')
  top.location_once_scrolled_into_view
  sleep 1

  driver.manage.window.move_to(300, 400)
  sleep 1

  driver.manage.window.maximize
  sleep 1

  driver.manage.window.resize_to(500, 800)
  sleep 1

  driver.execute_script("alert('You made it to the end');")
  sleep 4
  driver.switch_to.alert.accept


  #Assertion Testing

rescue => e
  puts "Error: #{e}"
ensure
  driver.quit
end

#https://code.google.com/p/selenium/wiki/RubyBindings
#http://selenium.googlecode.com/svn/trunk/docs/api/rb/Selenium/WebDriver/ActionBuilder.html
