import React, { useState, useEffect } from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
} from 'mdb-react-ui-kit';
import yaml from 'js-yaml';

export default function App() {
    const [footerData, setFooterData] = useState(null);

    useEffect(() => {
        fetch('/config.yml')
            .then(response => response.text())
            .then(data => setFooterData(yaml.load(data)))
            .catch(error => console.error('Error loading the YAML file: ', error));
    }, []);

    if (!footerData) {
        return <div>Loading...</div>;
    }

    return (
        <MDBFooter bgColor='primary' className='text-white text-center text-lg-left'>
            <MDBContainer className='p-4'>
                <MDBRow>
                    {footerData.footer.sections.map((section) => (
                        <MDBCol key={section.id} lg='6' md='12' className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase'>{section.title}</h5>
                            {section.content ? <p>{section.content}</p> : null}
                            {section.links ? (
                                <ul className='list-unstyled mb-0'>
                                    {section.links.map((link, index) => (
                                        <li key={index}>
                                            <a href={link.href} className='text-white'>{link.text}</a>
                                        </li>
                                    ))}
                                </ul>
                            ) : null}
                        </MDBCol>
                    ))}
                </MDBRow>
            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                &copy; {new Date().getFullYear()} Copyright:{' '}
                <a className='text-white' href={footerData.companyDetails.link}>
                    {footerData.companyDetails.name}
                </a>
            </div>
        </MDBFooter>
    );
}
