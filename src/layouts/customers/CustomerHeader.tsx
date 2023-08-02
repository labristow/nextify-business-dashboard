import React from "react";

function CustomerHeader({
  showSearchResult,
  filteredResultCount,
  sortKey,
  handleSearchData,
  handleSortKeyChange,
}: {
  showSearchResult: boolean;
  filteredResultCount: number;
  sortKey: string;
  handleSearchData: (value: string) => void;
  handleSortKeyChange: (key: string) => void;
}) {
  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-between">
        <input
          onChange={(e) => handleSearchData(e.target.value)}
          type="text"
          className="w-[380px] h-12 rounded-lg outline-none border border-gray-200 px-4 placeholder:text-sm focus:border-gray-500 duration-500"
          placeholder="Search Customer by name or email or customer ID"
        />

        <select
          value={sortKey}
          name=""
          id=""
          onChange={(e) => handleSortKeyChange(e.target.value)}
          className="w-[190px] text-sm bg-transparent h-12 rounded-lg outline-none border border-gray-200 px-4 placeholder:text-sm focus:border-gray-500 duration-500"
        >
          <option value="frequency">Order by frequency</option>
          <option value="dateJoined">Order by joined date</option>
        </select>
      </div>
      <div className="w-full h-14 flex items-center">
        {showSearchResult && (
          <h4 className="text-lg font-medium">
            {filteredResultCount}
            {filteredResultCount === 0 && " No result"}
            {filteredResultCount === 1 && " Result"}
            {filteredResultCount > 1 && " Results"} found!
          </h4>
        )}
      </div>
    </div>
  );
}

export default CustomerHeader;
