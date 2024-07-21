import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Breadcrumb } from '../components/common/Breadcrumb';
import CourseData from '../Data/Coursce/Courses.json';

export const Admission = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        program: '',
        course: '',
        qualification: null,
        remarks: ''
    });
    const [showConfirmDialog, setShowConfirmDialog] = useState(false);
    const [showLoader, setShowLoader] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileDrop = useCallback((acceptedFiles) => {
        setShowLoader(true);
        setFormData({
            ...formData,
            qualification: acceptedFiles[0]
        });

        setTimeout(() => {
            setShowLoader(false);
        }, 4000);
    }, [formData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        localStorage.setItem('admissionFormData', JSON.stringify(formData));
        
        setFormData({
            firstName: '',
            lastName: '',
            program: '',
            course: '',
            qualification: null,
            remarks: ''
        });
    };

    const handleCancel = () => {
        setShowConfirmDialog(true);
    };

    const handleConfirmCancel = () => {
        setFormData({
            firstName: '',
            lastName: '',
            program: '',
            course: '',
            qualification: null,
            remarks: ''
        });
        setShowConfirmDialog(false);
    };

    const handleDismissCancel = () => {
        setShowConfirmDialog(false);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: handleFileDrop,
        accept: 'image/jpeg, image/png, application/pdf',
        maxSize: 10485760 // 10 MB
    });

    const testimonials = [
        {
            id: 'testimonial-1',
            image: '/assets/images/admission-bg-2.jpg',
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
                    <div className="col-12 col-md-10 col-lg-8 sha p-4 bg-white formdiv">
                        {showLoader && (
                            <div className="loader-overlay">
                                <div className="loader">
                                    <div className="spinner"></div>
                                    <p>Processing...</p>
                                </div>
                            </div>
                        )}
                        <h3 className='my-3'>Admission</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="firstName" className="form-label">First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder='Enter your first name'
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder='Enter your last name'
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="program" className="form-label">Program</label>
                                <select
                                    className="form-select"
                                    id="program"
                                    name="program"
                                    value={formData.program}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">~ Select program ~</option>
                                    <option value="Program 1">Program 1</option>
                                    <option value="Program 2">Program 2</option>
                                    <option value="Program 3">Program 3</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="course" className="form-label">Course</label>
                                <select
                                    className="form-select"
                                    id="course"
                                    name="course"
                                    value={formData.course}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">~ Select course ~</option>
                                    {CourseData.cors.slice(1).map((course, index) => (
                                        <option key={index} value={course.Column2}>
                                            {course.Column2}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="qualification" className="form-label">Last Qualification</label>
                                <div {...getRootProps({ className: 'dropzone' })}>
                                    <input {...getInputProps()} />
                                    {isDragActive ? (
                                        <div>
                                            <p>Drop the files here ...</p>
                                        </div>
                                    ) : (
                                        <>
                                            <div className='upload'>
                                                <i className="fa-solid fa-arrow-up-from-bracket"></i>
                                            </div>
                                            <p>Drag & drop your files here or <span className='pink'>Choose files</span></p>
                                        </>
                                    )}
                                    <small className="form-text text-muted">
                                        File Types Allowed: PDF, JPEG, PNG & 10 MB Max File Size
                                    </small>
                                </div>
                                {formData.qualification && (
                                    <div className="mt-3">
                                        <strong>Selected file:</strong> {formData.qualification.name}
                                    </div>
                                )}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="remarks" className="form-label">Remarks</label>
                                <textarea
                                    className="form-control"
                                    id="remarks"
                                    name="remarks"
                                    rows="3"
                                    value={formData.remarks}
                                    onChange={handleInputChange}
                                    required
                                ></textarea>
                                <label htmlFor="course" className="form-label">Max 500 characters</label>
                            </div>
                            <div className="space d-flex justify-content-between">
                                <button type="button" className="btn-2" onClick={handleCancel}>
                                    Cancel <i className="fa fa-times"></i>
                                </button>
                                <button type="submit" className="btn-1">
                                    Submit <i className="fa fa-check"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className='im'>
                    <div className="tl-5-testimonial-img-slider">
                        {testimonials.map((testimonial) => (
                            <div className="tl-5-testimonial-img" key={testimonial.id}>
                                <img src={testimonial.image} alt="Alumni Poster" className="img-fluid" />
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {showConfirmDialog && (
                <div className="confirmation-dialog">
                    <div className="confirmation-dialog-content">
                        <div className='war'>
                            <i className="fa-solid fa-triangle-exclamation"></i>
                        </div>
                        <p>Are you sure you want to cancel? All entered data will be lost.</p>
                        <p>Press "Yes" to clear all data or "No" to continue filling out the form.</p>
                        <div className="confirmation-dialog-buttons">
                            <button onClick={handleDismissCancel} className="btn-2">No</button>
                            <button onClick={handleConfirmCancel} className="btn-1">Yes</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
