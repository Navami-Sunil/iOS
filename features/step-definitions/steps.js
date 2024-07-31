const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const cart=require('../pageobjects/addtocart.page');
const swipes=require('../pageobjects/swipe.page');


Given(/^I am on the home page$/,async () => {
	browser.pause(1000);
});

When(/^I add to cart,checkout,draw$/,async () => {
	await cart.carts();
});

Then(/^I should see a drawing$/,async () => {
	// await swipes.swipegesture();
	return true;
});
