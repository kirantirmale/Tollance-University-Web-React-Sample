import React, { useState } from 'react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import transcriptData from '../Data/Tanscript/0692515933.json';
// import './Transcript.css'; // Assuming you have a CSS file for custom styles

export const Transcript = () => {
    const [filterTerm, setFilterTerm] = useState('');

    const handleFilterChange = (event) => {
        setFilterTerm(event.target.value);
    };

    const filteredTranscript = transcriptData.Sheet1.filter((row) =>
        (row.TERM && row.TERM.toLowerCase().includes(filterTerm.toLowerCase())) ||
        (row.SEM && row.SEM.toLowerCase().includes(filterTerm.toLowerCase()))
    );

    const testimonials = [
        {
            id: 'testimonial-1',
            image: '/assets/images/back-view-teenage.jpg',
            comment:
                '“Universities offer a wide range of student organizations and clubs catering to diverse interests. These groups focus on hobbies, sports, cultural activities, social causes, academic interests, and more”',
            author: 'Douglas Lyphe',
            authorSuffix: 'Professor of Technology',
        },
    ];

    return (
        <div>
            <Breadcrumb />
            <div className="container rel">
                <div className="row justify-content-center mt-5 tab">
                    <div className="col-12 col-md-10 col-lg-8 sha p-4 bg-white">
                        <h2 className='text-center'>Transcript</h2>
                        <div className='mb-4 w-50 m-auto'>
                            <label htmlFor="enrollment-number" className='form-label'>Enrollment Number</label>
                            <div className="input-group">
                                <input
                                    type="text"
                                    id="enrollment-number"
                                    value={filterTerm}
                                    onChange={handleFilterChange}
                                    placeholder="Enter Your Enrollment Number..."
                                    className="form-control"
                                />
                                <span className="input-group-text" id="basic-addon1">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </span>
                            </div>
                        </div>
                        <p className='fo'>Enrollment Number: 0692515933</p>
                        <div className="table-responsive">
                            <table className="table border bg-white">
                                <thead>
                                    <tr style={{ backgroundColor: '#00825a', color: "white" }}>
                                        <th>TERM</th>
                                        <th>CODE</th>
                                        <th>TITLE</th>
                                        <th>GRADE</th>
                                        <th>CREDITS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredTranscript.map((row, index) => (
                                        <tr key={index}>
                                            <td>{row.TERM}</td>
                                            <td>{row.CODE}</td>
                                            <td><span className='fo text-center'>{row.SEM}</span>{row.TITLE}</td>
                                            <td>{row.GRADE}</td>
                                            <td>{row.CREDITS}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className='im'>
                    <div className="tl-5-testimonial-img-slider  border">
                        {testimonials.map((testimonial) => (
                            <div className="tl-5-testimonial-img" key={testimonial.id}>
                                <img src={testimonial.image} alt="Alumni Poster" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
