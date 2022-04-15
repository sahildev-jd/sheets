import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "../../components/table/Table";
import { NO_OF_COLUMNS, NO_OF_ROWS } from "../../constants/constants";
import { getMockData } from "../../utils/Utils";
import { tableActions } from "../../store/table/tableActions";

const Index = () => {
  const dispatch = useDispatch();
  const tableData = useSelector((state) => state.tableReducer.tableData);
  const rowHeaders = useSelector((state) => state.tableReducer.rowHeaders);

  // Fetch from API here
  useEffect(() => {
    if (rowHeaders.length > 0 && tableData.length === 0) {
      dispatch(tableActions.setTableData(getMockData({ rowHeaders })));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, rowHeaders]);

  return (
    <>
      <Table
        initialNoOfRows={NO_OF_ROWS}
        initialNoOfColumns={NO_OF_COLUMNS}
        tableData={tableData}
      />
    </>
  );
};

export default Index;
