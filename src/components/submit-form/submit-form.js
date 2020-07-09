import { useState } from "react"

const SubmitForm = () => {
  const [inputs, setInputs] = useState({})

  const HandleSubmit = e => {
    if (e) {
      e.preventDefault()
    }
    alert(`Enquiry form submitted!
         Name: ${inputs.firstName} ${inputs.lastName}
         Email: ${inputs.email}`)
  }

  const HandleInputChange = e => {
    e.persist()
    setInputs(inputs => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }))
  }
  return {
    HandleSubmit,
    HandleInputChange,
    inputs,
  }
}

export default SubmitForm
