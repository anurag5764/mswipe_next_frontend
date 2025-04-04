import { Form, Formik } from 'formik';
import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import * as Yup from "yup";

const SeamlessPayment = () => {
    const requestACallbackValidationSchema = Yup.object().shape({
        nameRetail: Yup.string().required("Name is Required"),
        mobileRetail: Yup.string()
            .matches(/^\d{10}$/, "Mobile number must be a 10-digit number")
            .required("Mobile Number is Required"),
        emailRetail: Yup.string().email("Invalid email").required("Required"),
        cityRetail: Yup.string().required("Select City"),

        organisationPartners: Yup.string().required("Required"),
        namePartners: Yup.string().required("Name is Required"),
        mobilePartners: Yup.string()
            .matches(/^\d{10}$/, "Mobile number must be a 10-digit number")
            .required("Mobile Number is Required"),
        emailPartners: Yup.string().email("Invalid email").required("Required"),
        cityPartners: Yup.string().required("Select City"),

    });
    const handleRequestACallBackSubmit = values => {
        console.log("Request a callback", values);
    };
    return (
        <>
            <section className='seamless-payment-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <h2 className='head01'>
                                <div>Seamless <strong>payments</strong> </div>
                                <div>for your business <strong>unlocked</strong>.</div>
                            </h2>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='inner-content'>
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className='head'>Request a <strong>call back</strong>.</div>
                                        <p className='fs-18'>Join us to simplify payments, increase efficiency, and grow your business.</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className='tabs-03'>
                                            <Tabs
                                                defaultActiveKey="retail"
                                                id="uncontrolled-tab-example"
                                                className="mb-3"
                                            >
                                                <Tab eventKey="retail" title="Retail">
                                                    <Formik
                                                        initialValues={{
                                                            nameRetail: "",
                                                            mobileRetail: "",
                                                            emailRetail: "",
                                                            cityRetail: ""
                                                        }}
                                                        validationSchema={requestACallbackValidationSchema}
                                                        enableReinitialize={true}
                                                        onSubmit={values => {

                                                            handleRequestACallBackSubmit({
                                                                ...values,
                                                            });
                                                            console.log("123", values)
                                                        }}
                                                     >
                                                        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
                                                            <Form className='form-request-call-back'
                                                                onSubmit={e => {
                                                                    e.preventDefault();
                                                                    handleSubmit();
                                                                }}
                                                            >
                                                                
                                                                <div className='row'>
                                                                    <div className='col-lg-3 mb-4 mb-lg-0'>
                                                                        <div className="input_box">
                                                                            <input className='form-control' type="text" name="nameRetail" onChange={handleChange} onBlur={handleBlur} value={values.nameRetail} placeholder='Full name' />
                                                                            {errors.nameRetail && touched.nameRetail && <div className="form-error">{errors.nameRetail}</div>}
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-lg-3 mb-4 mb-lg-0'>
                                                                        <div className="input_box">
                                                                            <input className='form-control' type="text" name="mobileRetail" onChange={handleChange} onBlur={handleBlur} value={values.mobileRetail} placeholder='Mobile' />
                                                                            {errors.mobileRetail && touched.mobileRetail && <div className="form-error">{errors.mobileRetail}</div>}
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-lg-3 mb-4 mb-lg-0'>
                                                                        <div className="input_box">
                                                                            <input className='form-control' type="text" name="emailRetail" onChange={handleChange} onBlur={handleBlur} value={values.emailRetail} placeholder='Email' />
                                                                            {errors.emailRetail && touched.emailRetail && <div className="form-error">{errors.emailRetail}</div>}
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-lg-3 mb-4 mb-lg-0'>
                                                                        <div className="input-group custom-select-wrapper">
                                                                            <select className='form-select' name="cityRetail" id="cityRetail" onChange={handleChange} onBlur={handleBlur} value={values.cityRetail}>
                                                                                <option value="">City</option>
                                                                                <option value="Mumbai">Mumbai</option>
                                                                                <option value="Pune">Pune</option>
                                                                                <option value="Bangalore">Bangalore</option>
                                                                            </select>
                                                                            {errors.cityRetail && touched.cityRetail && (
                                                                                <span className="form-error">{errors.cityRetail}</span>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='row mt-4'>
                                                                    <div className='col-12'>
                                                                    <button type="submit" className="btn btn-primary btn-submit">Submit<img src="/images/icons/greater-arrow-right-w.svg" alt="" /></button>
                                                                    </div>
                                                                </div>
                                                            </Form>
                                                        )}
                                                    </Formik>
                                                </Tab>
                                                <Tab eventKey="partners" title="Partners">
                                                <Formik
                                                        initialValues={{
                                                            nameRetail: "",
                                                            mobileRetail: "",
                                                            emailRetail: "",
                                                            cityRetail: ""
                                                        }}
                                                        validationSchema={requestACallbackValidationSchema}
                                                        enableReinitialize={true}
                                                        onSubmit={values => {

                                                            handleRequestACallBackSubmit({
                                                                ...values,
                                                            });
                                                            console.log("123", values)
                                                        }}
                                                     >
                                                        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
                                                            <Form className='form-request-call-back'
                                                                onSubmit={e => {
                                                                    e.preventDefault();
                                                                    handleSubmit();
                                                                }}
                                                            >
                                                                <div className='row mb-4'>
                                                                    <div className='col-md-6'>
                                                                    <div className="input_box">
                                                                            <input className='form-control' type="text" name="organisationPartners" onChange={handleChange} onBlur={handleBlur} value={values.organisationPartners} placeholder='Organisation name' />
                                                                            {errors.organisationPartners && touched.organisationPartners && <div className="form-error">{errors.organisationPartners}</div>}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='row'>
                                                                    <div className='col-lg-3 mb-4 mb-lg-0'>
                                                                        <div className="input_box">
                                                                            <input className='form-control' type="text" name="namePartners" onChange={handleChange} onBlur={handleBlur} value={values.namePartners} placeholder='Full name' />
                                                                            {errors.namePartners && touched.namePartners && <div className="form-error">{errors.namePartners}</div>}
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-lg-3 mb-4 mb-lg-0'>
                                                                        <div className="input_box">
                                                                            <input className='form-control' type="text" name="mobilePartners" onChange={handleChange} onBlur={handleBlur} value={values.mobilePartners} placeholder='Mobile' />
                                                                            {errors.mobilePartners && touched.mobilePartners && <div className="form-error">{errors.mobilePartners}</div>}
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-lg-3 mb-4 mb-lg-0'>
                                                                        <div className="input_box">
                                                                            <input className='form-control' type="text" name="emailPartners" onChange={handleChange} onBlur={handleBlur} value={values.emailPartners} placeholder='Email' />
                                                                            {errors.emailPartners && touched.emailPartners && <div className="form-error">{errors.emailPartners}</div>}
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-lg-3 mb-4 mb-lg-0'>
                                                                        <div className="input-group custom-select-wrapper">
                                                                            <select className='form-select' name="cityPartners" id="cityPartners" onChange={handleChange} onBlur={handleBlur} value={values.cityPartners}>
                                                                                <option value="">City</option>
                                                                                <option value="Mumbai">Mumbai</option>
                                                                                <option value="Pune">Pune</option>
                                                                                <option value="Bangalore">Bangalore</option>
                                                                            </select>
                                                                            {errors.cityPartners && touched.cityPartners && (
                                                                                <span className="form-error">{errors.cityPartners}</span>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='row mt-4'>
                                                                    <div className='col-12'>
                                                                    <button type="submit" className="btn btn-primary btn-submit">Submit<img src="/images/icons/greater-arrow-right-w.svg" alt="" /></button>
                                                                    </div>
                                                                </div>


                                                            </Form>
                                                        )}
                                                    </Formik>
                                                </Tab>
                                                <Tab eventKey="enterprise" title="Enterprise">
                                                    Tab content for Enterprise
                                                </Tab>
                                                <Tab eventKey="bank" title="Bank">
                                                    Tab content for Bank
                                                </Tab>
                                            </Tabs>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section></>
    )
}

export default SeamlessPayment