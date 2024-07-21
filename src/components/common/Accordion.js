import React, { useState } from 'react'

const accordionItems = [
    {
        title: 'Foundational Language Skills',
        body: 'Build a solid linguistic foundation as you master pronunciation, vocabulary, and sentence structure, setting the stage for effective English communication.',
    },
    {
        title: 'Fluency in Real-Life Situations',
        body: 'Navigate everyday scenarios like travel, dining, and socializing with ease as you practice practical language skills in context.',
    },
    {
        title: 'Confident Conversations',
        body: 'Develop the ability to initiate and sustain engaging conversations, becoming an active and attentive listener while expressing yourself clearly.',
    },
    {
        title: 'Cultural Awareness in Communication',
        body: 'Gain insights into cross-cultural communication, enhancing your understanding of idiomatic expressions and cultural nuances.',
    },
    {
        title: 'Advanced Speaking Techniques',
        body: 'Elevate your language proficiency by articulating complex ideas, participating in group discussions, and conveying emotions effectively.',
    },
];

export const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
  return (
    <div>
         <div className="tl-8-accordion">
            {accordionItems.map((item, index) => (
                <div
                    key={index}
                    className={`tl-8-accordion-item ${openIndex === index ? 'open' : ''}`}
                    onClick={() => handleClick(index)}
                >
                    <div className="tl-8-accordion-item-header">
                        <h6 className="tl-8-accordion-item-title">{item.title}</h6>
                        <span className="tl-8-accordion-item-expand-icon"></span>
                    </div>
                    {openIndex === index && (
                        <p className="tl-8-accordion-item-body">{item.body}</p>
                    )}
                </div>
            ))}
        </div>
    </div>
  )
}
