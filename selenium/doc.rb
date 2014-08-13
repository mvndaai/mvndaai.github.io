require 'selenium-webdriver'
driver = Selenium::WebDriver.for :firefox

END {
site =  'https://docs.google.com/forms/d/1QvYyKAVqN6yQltMDHua0I4kU0obkbiHvQBRoY9BNLW4/viewform'


driver.navigate.to site
begin
  #Title
  title = driver.find_element(:class, 'ss-form-title')
  puts "Title: #{title.text}"
  #puts "Title Location: #{title.location}"
  #puts "Title Size: #{title.size}"
  #puts "Title Class: #{title.attribute("class")}"

  #Textbox
  text = 'Sample Text'
  textbox = driver.find_element(:id, 'entry_558624185')
  textbox.send_keys(text)

  text = 'Checkbox 2'
  checkboxes_radios = driver.find_elements(:class, 'ss-choice-item')
  puts checkbox_choice = checkboxes_radios{|e| e if e.text=='Checkbox 2'}
  checkbox_choice.click




rescue
  driver.quit
  driver.switch_to.alert.accept rescue Selenium::WebDriver::Error::NoAlertOpenError
end
#sleep 5
driver.quit
driver.switch_to.alert.accept rescue Selenium::WebDriver::Error::NoAlertOpenError

}
