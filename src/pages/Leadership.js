import React, { useState } from 'react'
import { Breadcrumb } from '../components/common/Breadcrumb'
import { Link } from 'react-router-dom'
import CampusLifeSection from '../components/CampusLife'

export const Leadership = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    birthDate: '',
    qualifications: '',
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const validate = () => {
    let tempErrors = {}
    if (!formData.firstName) tempErrors.firstName = 'First Name is required'
    if (!formData.lastName) tempErrors.lastName = 'Last Name is required'
    if (!formData.email) tempErrors.email = 'Email is required'
    if (!formData.phone) tempErrors.phone = 'Phone is required'
    if (!formData.streetAddress)
      tempErrors.streetAddress = 'Street Address is required'
    if (!formData.city) tempErrors.city = 'City is required'
    if (!formData.state) tempErrors.state = 'State is required'
    if (!formData.zipCode) tempErrors.zipCode = 'Zip Code is required'
    if (!formData.birthDate) tempErrors.birthDate = 'Birth Date is required'
    if (!formData.qualifications)
      tempErrors.qualifications = 'Qualifications are required'

    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      sessionStorage.setItem('formData', JSON.stringify(formData))
      alert('Form submitted successfully!')
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        streetAddress: '',
        city: '',
        state: '',
        zipCode: '',
        birthDate: '',
        qualifications: '',
      })
    } else {
      alert('Please fill all required fields')
    }
  }
  return (
    <div>
      {' '}
      <Breadcrumb />
      <section class="tl-4-about tl-3-section-spacing">
        <div class="container">
          <div class="row gy-4 gy-sm-5 align-items-center">
            <div class="col-lg-6 order-lg-1 order-2">
              <div class="tl-3-about-img tl-4-about-img">
                <img
                  src="assets/images/professors/professor-2.jpg"
                  alt="School Poster"
                />
                <img
                  src="assets/images/professors/professor-1.jpg"
                  alt="School Poster"
                />
              </div>
            </div>

            <div class="col-lg-6 order-lg-2 order-1">
              <div class="tl-4-about-txt">
                <h2 class="tl-4-section-title">
                  Experience in School Leadership & Teaching
                </h2>
                <p class="tl-4-about-descr">
                  At Tollense University, we prioritize excellence in leadership
                  and teaching, recognizing their profound impact on education.
                  Our programs integrate theory with practical experience,
                  equipping future educators and leaders with the skills and
                  insight needed to thrive in today's educational landscape.
                  Through personalized mentorship and immersive learning
                  opportunities, our graduates emerge as adept leaders and
                  inspiring educators, poised to shape the future of learning.
                  Join us as we cultivate a new generation of educational
                  innovators committed to excellence.
                </p>

                <div class="tl-4-about-stats">
                  <div class="tl-4-about-stat">
                    <div class="tl-4-about-stat-txt">
                      <span class="tl-4-about-stat-num">52+</span>
                      <span class="tl-4-about-stat-name">Our Teachers</span>
                    </div>
                  </div>

                  <div class="tl-4-about-stat">
                    <div class="tl-4-about-stat-txt">
                      <span class="tl-4-about-stat-num">85+</span>
                      <span class="tl-4-about-stat-name">National Awards</span>
                    </div>
                  </div>

                  <div class="tl-4-about-stat">
                    <div class="tl-4-about-stat-txt">
                      <span class="tl-4-about-stat-num">2k+</span>
                      <span class="tl-4-about-stat-name">Student Enrolled</span>
                    </div>
                  </div>
                </div>

                <div class="tl-4-about-txt-bottom">
                  <Link to="/transfer" class="tl-def-btn tl-4-def-btn">
                    More Details <i class="fa-solid fa-angles-right"></i>
                  </Link>

                  <div class="tl-4-about-support">
                    <img
                      src="/assets/images/tl-4/support.png"
                      alt="support icon"
                    />
                    <div>
                      <span class="tl-4-about-support-txt">Get Support</span>
                      <a
                        href="mailto:info@gmail.com"
                        class="tl-4-about-support-mail"
                      >
                        info@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CampusLifeSection />
      <section class="tl-4-admission tl-4-admission-inner">
        <div class="container">
          <div class="tl-5-about-img tl-4-admission-img">
            <img src="assets/images/admission-bg-2.jpg" alt="Students" />

            <form
              className="tl-5-admission-form tl-4-admission-form"
              onSubmit={handleSubmit}
            >
              <h5 className="tl-5-admission-form-title">Admission</h5>
              <div className="row g-14">
                <div className="col-sm-6 col-12">
                  <input
                    type="text"
                    name="firstName"
                    id="tl-5-applicant-first-name"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && (
                    <span className="error">{errors.firstName}</span>
                  )}
                </div>
                <div className="col-sm-6 col-12">
                  <input
                    type="text"
                    name="lastName"
                    id="tl-5-applicant-last-name"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && (
                    <span className="error">{errors.lastName}</span>
                  )}
                </div>
                <div className="col-sm-6 col-12">
                  <input
                    type="email"
                    name="email"
                    id="tl-5-applicant-mail"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <span className="error">{errors.email}</span>
                  )}
                </div>
                <div className="col-sm-6 col-12">
                  <input
                    type="tel"
                    name="phone"
                    id="tl-5-applicant-numb"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <span className="error">{errors.phone}</span>
                  )}
                </div>
                <div className="col-sm-6 col-12">
                  <input
                    type="text"
                    name="streetAddress"
                    id="tl-5-applicant-street-address"
                    placeholder="Street Address"
                    value={formData.streetAddress}
                    onChange={handleChange}
                  />
                  {errors.streetAddress && (
                    <span className="error">{errors.streetAddress}</span>
                  )}
                </div>
                <div className="col-sm-6 col-12">
                  <input
                    type="text"
                    name="city"
                    id="tl-5-applicant-city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                  />
                  {errors.city && <span className="error">{errors.city}</span>}
                </div>
                <div className="col-sm-6 col-12">
                  <input
                    type="text"
                    name="state"
                    id="tl-5-applicant-state"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleChange}
                  />
                  {errors.state && (
                    <span className="error">{errors.state}</span>
                  )}
                </div>
                <div className="col-sm-6 col-12">
                  <input
                    type="text"
                    name="zipCode"
                    id="tl-5-applicant-zip-code"
                    placeholder="Zip Code"
                    value={formData.zipCode}
                    onChange={handleChange}
                  />
                  {errors.zipCode && (
                    <span className="error">{errors.zipCode}</span>
                  )}
                </div>
                <div className="col-12">
                  <input
                    type="date"
                    name="birthDate"
                    id="tl-5-applicant-birth-date"
                    value={formData.birthDate}
                    onChange={handleChange}
                  />
                  {errors.birthDate && (
                    <span className="error">{errors.birthDate}</span>
                  )}
                </div>
                <div className="col-12">
                  <textarea
                    name="qualifications"
                    id="tl-5-applicant-qualifics"
                    placeholder="Academic Qualifications"
                    value={formData.qualifications}
                    onChange={handleChange}
                  ></textarea>
                  {errors.qualifications && (
                    <span className="error">{errors.qualifications}</span>
                  )}
                </div>
                <div className="col-12">
                  <button type="submit" className="tl-def-btn tl-4-def-btn">
                    Contact Us{' '}
                    <i className="fa-regular fa-arrow-right-long"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
