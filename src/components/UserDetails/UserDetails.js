import React from 'react';

import './userDetails.style.css';

const UserDetails = ({user}) => {

    const {id, name, username, email, phone, website,
        address: {street, suite, city, zipcode,
            geo: {lat, lng}},
        company: {name: companyName, catchPhrase, bs}} = user;

    return (
        <div>
            <div className={'userDetails'}>
                <h2>{id} - {name} - {username}</h2>
                <h3>email: {email}; phone: {phone};   website: {website};</h3>
                <div className={'userDetails__address'}>
                    <ul><strong>Address</strong>
                        <li>street: {street}</li>
                        <li>suite: {suite}</li>
                        <li>city: {city}</li>
                        <li>zipcode: {zipcode}</li>
                        <ul><strong>Geo</strong>
                            <li>lat: {lat}</li>
                            <li>lng: {lng}</li>
                        </ul>
                    </ul>
                    <ul><strong>Company</strong>
                        <li>companyName: {companyName}</li>
                        <li>catchPhrase: {catchPhrase}</li>
                        <li>bs: {bs}</li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default UserDetails;
