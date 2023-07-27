import './index.css'
import {DataGrid, GridRowsProp, GridColDef} from '@mui/x-data-grid'

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'Id',
    width: 10,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'body',
    headerName: 'Body',
    headerAlign: 'center',
    align: 'center',
    width: 800,
  },
  {
    field: 'title',
    headerName: 'Title',
    headerAlign: 'center',
    align: 'center',
    width: 600,
  },
]

const Table = props => {
  const {tableData} = props

  const rows: GridRowsProp = [...tableData]
  return (
    <div className="table" style={{height: '100%', width: '90%'}}>
      <DataGrid
        className="table-kj"
        headerAlign="center"
        align="center"
        rows={rows}
        columns={columns}
      />
    </div>
  )
}

export default Table
