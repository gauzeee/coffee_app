import React from "react";
import itemDetails from "./ItemDetails";
import { shallow } from "enzyme";
import ItemDetails from "./ItemDetails";

describe("Testing itemDetails", () => {
  const store = { state: { item: { name: "Test" } } };
  const item = shallow(<ItemDetails location={store} />);
  describe("Snap and state", () => {
    it("ItemDetails has rendered correctly", () => {
      expect(item).toMatchSnapshot();
    });
    it("ItemDetails item in state is null", () => {
      expect(item.state().item.name).toEqual("Test");
    });
    it("ItemDetails loading in state is true", () => {
      expect(item.state().loading).toBeFalsy();
    });
    it("ItemDetails error in state is false", () => {
      expect(item.state().error).toBeFalsy();
    });
  });
  describe("itemDetails catch testing", () => {
    const newItem = shallow(<ItemDetails location={store} />);
    newItem.instance().componentDidCatch();
    expect(newItem.state().error).toBeTruthy();
  });
});
