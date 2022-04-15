import { MINUS_ONE, PLUS_ONE, ROW } from "../constants/constants";

export const getColumnHeaders = (noOfColumns) => {
  const columnHeaders = [];

  for (let i = 0; i < noOfColumns; i++) {
    columnHeaders.push({ key: 100 * Math.random(), content: i + 1 });
  }

  return columnHeaders;
};
export const getRowHeaders = (noOfRows) => {
  const rowHeaders = [];

  for (let i = 0; i < noOfRows; i++) {
    rowHeaders.push({ key: 1000 * Math.random(), content: i + 1 });
  }

  return rowHeaders;
};

export const getMockData = ({ rowHeaders }) => {
  const data = [];

  for (let i = 0; i < rowHeaders.length; i++) {
    data[i] = { rowId: rowHeaders[i].key };
  }

  return data;
};

export const getHeaderContextMenuItems = (cellType) => [
  {
    id: 1,
    itemName: `Insert 1 ${cellType === ROW ? "above" : "before"}`,
    itemData: { addFlag: MINUS_ONE },
  },
  {
    id: 2,
    itemName: `Insert 1 ${cellType === ROW ? "below" : "after"}`,
    itemData: { addFlag: PLUS_ONE },
  },
];

export const updateContent = ({ startIndex, arr }) => {
  const result = [...arr];

  result.forEach((param, i) => {
    if (i > startIndex) {
      param.content++;
    }
  });

  return result;
};
