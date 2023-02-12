import './index.css'

const CapitalItem = props => {
  const {capitalDetails} = props
  const {capitalDisplayText, id} = capitalDetails
  return <option value={id}>{capitalDisplayText}</option>
}

export default CapitalItem
