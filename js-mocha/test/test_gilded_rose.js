var {expect} = require('chai');
var {Shop, Item} = require('../src/gilded_rose.js');

describe("Gilded Rose", function() {

  it("should foo", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
  });

  it("Should decrease the quality and sellin of generic object", () => {
    let initialSellIn = 5;
    let initialQuality = 5;
    const gildedRose = new Shop([ new Item("generic item", initialSellIn, initialQuality)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(initialQuality - 1);
    expect(items[0].sellIn).to.equal(initialSellIn - 1);
  });

  it("Should only degrade the sellin for Aged Brie by one if it is a non-negative value but increase the quality if under fifty", () => {
    let initialSellIn = 1;
    let initialQuality = 48;
    const gildedRose = new Shop([ new Item("Aged Brie", initialSellIn, initialQuality)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(initialSellIn - 1);
    expect(items[0].quality).to.equal(initialQuality + 1);
  });

});
