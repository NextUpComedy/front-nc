const editedRows = (rows) => rows.map((row) => ({
  ...row,
  key: row.createdAt,
  amount: `£ ${(row.amount * 1).toFixed(3)}`,
  rejectionReason: row.rejectionReason || 'N/A',
}));

export default editedRows;
