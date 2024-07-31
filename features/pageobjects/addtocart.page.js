let checkout=$('//XCUIElementTypeOther[@name="Proceed To Checkout button"]');
let username=$('//XCUIElementTypeTextField[@name="Username input field"]');
let pwd=$('//XCUIElementTypeSecureTextField[@name="Password input field"]');
let login=$('//XCUIElementTypeOther[@name="Login button"]');
class addcart{
    async carts(){
     await $('//XCUIElementTypeStaticText[@name="store item text" and @label="Sauce Labs Backpack"]').click();
     await $('//XCUIElementTypeOther[@name="counter plus button"]').click();
     await $('//XCUIElementTypeOther[@name="gray circle"]').click();
     await $('//XCUIElementTypeOther[@name="counter plus button"]').click();
     await $('//XCUIElementTypeOther[@name="Add To Cart button"]').click();
     await $('//XCUIElementTypeButton[@name="tab bar option cart"]').click();
     await checkout.click();
     await username.setValue("bob@example.com");
     await pwd.setValue("10203040");
     await login.click();
    }
   }
   module.exports=new addcart();