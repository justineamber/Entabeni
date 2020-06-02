import React, { useState } from "react"

const useSubmitForm = () => {
  const [inputs, setInputs] = useState({})

  const handleSubmit = e => {
    if (e) {
      e.preventDefault()
    }
    alert(`Enquiry form submitted!
         Name: ${inputs.firstName} ${inputs.lastName}
         Email: ${inputs.email}`)
  }

  const handleInputChange = e => {
    e.persist()
    setInputs(inputs => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }))
  }
  return {
    handleSubmit,
    handleInputChange,
    inputs,
  }
}

export default useSubmitForm
