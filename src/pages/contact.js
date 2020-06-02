import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import useSubmitForm from "../components/customHook"

export default function ContactPage() {
  const { inputs, handleInputChange, handleSubmit } = useSubmitForm()
  return (
    <Layout pageInfo={{ pageName: "contact" }}>
      <SEO title="Contact page" />
      <div className="contactBannerImage">
        <img src={`/beachview.jpg`} alt="Contact page image" />
        <h1>Contact</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        method="post"
        action="https://getform.io/{your-unique-getform-endpoint}"
      >
        <label>
          Email
          <input
            type="email"
            name="email"
            onChange={handleInputChange}
            value={inputs.email}
            required
          />
        </label>
        <label>
          First name
          <input
            type="text"
            name="firstName"
            onChange={handleInputChange}
            value={inputs.firstName}
            required
          />
        </label>
        <label>
          Last name
          <input
            type="text"
            name="lastName"
            onChange={handleInputChange}
            value={inputs.lastName}
            required
          />
        </label>
        <label>
          Message
          <input
            type="text"
            name="message"
            onChange={handleInputChange}
            value={inputs.message}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <div className="contactBannerImage">
        <h1>Address</h1>
        Plettenberg Bay, South Africa.
      </div>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}
