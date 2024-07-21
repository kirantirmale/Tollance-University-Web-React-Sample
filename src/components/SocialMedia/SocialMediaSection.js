import React from 'react'
import { SocialComponent } from './SocialComponent'

const SocialMediaSection = () => {
  return (
    <section
      className="tl-4-socials bg-default"
      data-background="assets/images/tl-4/social-bg.jpg"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(/assets/images/university-students.jpg)`,
      }}
      //   style={{ backgroundImage: `url(/assets/images/university-students.jpg)` }}
    >
      <div className="row g-0">
        <div className="col-xl-3 col-md-6 col-12">
          <SocialComponent
            title="YouTube"
            description="Nulla lacinia velit at nisl volutpat placerat. Fusce at elit id orci molestie iaculis eget eget metus. Donec purus est, porttitor at lacus sit amet."
            buttonText="Subscribe Channel"
          />
        </div>
        <div className="col-xl-3 col-md-6 col-12">
          <SocialComponent
            title="Facebook"
            description="Nulla lacinia velit at nisl volutpat placerat. Fusce at elit id orci molestie iaculis eget eget metus. Donec purus est, porttitor at lacus sit amet."
            buttonText="Like Page"
          />
        </div>
        <div className="col-xl-3 col-md-6 col-12">
          <SocialComponent
            title="Instagram"
            description="Nulla lacinia velit at nisl volutpat placerat. Fusce at elit id orci molestie iaculis eget eget metus. Donec purus est, porttitor at lacus sit amet."
            buttonText="Follow Account"
          />
        </div>
        <div className="col-xl-3 col-md-6 col-12">
          <SocialComponent
            title="Twitter"
            description="Nulla lacinia velit at nisl volutpat placerat. Fusce at elit id orci molestie iaculis eget eget metus. Donec purus est, porttitor at lacus sit amet."
            buttonText="Follow Handle"
          />
        </div>
      </div>
    </section>
  )
}

export default SocialMediaSection
