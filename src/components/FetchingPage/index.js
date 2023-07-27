import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Table from '../Table'
import Checkboxes from '../Checkboxes'
import './index.css'

const componentTwoData = [
  {
    id: 1,
    Department: 'Customer Service',
    SubDepartments: ['Support', 'Customer Success'],
  },
  {
    id: 2,
    Department: 'Design',
    SubDepartments: ['Graphic Design', 'Product Design'],
  },
  {
    id: 3,
    Department: 'IT',
    SubDepartments: ['Software Development', 'Network Administration'],
  },
  {
    id: 4,
    Department: 'Marketing',
    SubDepartments: ['Digital Marketing', 'Content Marketing'],
  },
  {
    id: 5,
    Department: 'Finance',
    SubDepartments: ['Accounts Payable', 'Accounts Receivable'],
  },
  {
    id: 6,
    Department: 'Sales',
    SubDepartments: ['Inside Sales', 'Outside Sales'],
  },
  {
    id: 7,
    Department: 'Human Resources',
    SubDepartments: ['Recruitment', 'Employee Relations'],
  },
  {
    id: 8,
    Department: 'Operations',
    SubDepartments: ['Logistics', 'Procurement'],
  },
  {
    id: 9,
    Department: 'Research and Development',
    SubDepartments: ['Product Research', 'Technology Innovation'],
  },
]

class AllProductsSection extends Component {
  state = {
    tableData: [],
    componentData: [],
    isLoading: false,
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    this.setState({
      isLoading: true,
    })

    const apiUrl = 'https://jsonplaceholder.typicode.com/posts'

    const response = await fetch(apiUrl)

    if (response.ok) {
      const data = await response.json()

      this.setState({
        tableData: data,
        isLoading: false,
        componentData: componentTwoData,
      })
    }
  }

  renderProductsList = () => {
    const {tableData, componentData} = this.state
    console.log(componentData)
    return (
      <div className="page">
        <div className="page-two-main-container">
          <h1 className="heading-component-one">Component One:-</h1>
          <Table tableData={tableData} />
        </div>
        <div className="check-page">
          <h1 className="heading-component-one two">Component Two:-</h1>
          <ul className="check-box-list">
            {componentTwoData.map(each => (
              <Checkboxes key={each.id} each={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  renderLoader = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return isLoading ? this.renderLoader() : this.renderProductsList()
  }
}

export default AllProductsSection
