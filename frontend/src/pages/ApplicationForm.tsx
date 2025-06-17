import React, { useState } from 'react';

export const ApplicationForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [cv, setCv] = useState<File | null>(null);
    const [interest, setInterest] = useState('');
    const [coverLetter, setCoverLetter] = useState('');

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({
            name,
            email,
            phone,
            cv,
            interest,
            coverLetter,
        });
    };

    return (
        <div className="application-form">
            <h2>Application Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Phone:</label>
                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Upload CV (PDF):</label>
                    <input
                        type="file"
                        accept=".pdf"
                        onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                                setCv(e.target.files[0]);
                            } else {
                                setCv(null);
                            }
                        }}
                        required
                    />
                </div>
                <div>
                    <label>Area of Interest:</label>
                    <input
                        type="text"
                        value={interest}
                        onChange={(e) => setInterest(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Cover Letter:</label>
                    <textarea
                        value={coverLetter}
                        onChange={(e) => setCoverLetter(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit Application</button>
            </form>
        </div>
    );
};

