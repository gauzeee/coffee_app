import React from "react";
import SearchPanel from "./searchPanel";
import { shallow } from "enzyme";

describe("Testing SearchPanel", () => {
  const updateSearch = jest.fn();
  const updateFilter = jest.fn();
  const item = shallow(
    <SearchPanel updateSearch={updateSearch} updateFilter={updateFilter} />
  );

  describe("Testing SearchPanel snap and state", () => {
    it("SearchPanel have rendered correctly", () => {
      expect(item).toMatchSnapshot();
    });

    it("SearchPanel state 'searchText' is empty string", () => {
      expect(item.state().searchText).toEqual("");
    });
  });

  describe("SearchPanel handlers tests", () => {
    it("testing updateSearch", () => {
      item.instance().updateSearch({ target: { value: "test" } });
      expect(item.state().searchText).toEqual("test");
      expect(updateSearch).toBeCalledWith("test");
    });
    it("testing updateFilters", () => {
      item.instance().updateFilter({
        target: { value: "test", classList: { toggle: jest.fn() } }
      });
      expect(updateFilter).toBeCalled();
    });
  });
});
