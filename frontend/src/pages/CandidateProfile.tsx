import React from 'react';
import { useParams } from 'react-router-dom';
import Button from '../components/Button';
import './CandidateProfile.css'; // Assuming you have a CSS file for styles

const CandidateProfile = () => {
    const { candidateId } = useParams(); // Assuming you pass candidateId in the route
    const [candidate, setCandidate] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        // Fetch candidate data from an API or state management
        const fetchCandidate = async () => {
            try {
                const response = await fetch(`/api/candidates/${candidateId}`);
                const data = await response.json();
                setCandidate(data);
            } catch (error) {
                console.error('Error fetching candidate data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCandidate();
    }, [candidateId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!candidate) {
        return <div>No candidate found.</div>;
    }

    return (
        <div className="candidate-profile">
            <h1>{candidate.name}</h1>
            <p>Email: {candidate.email}</p>
            <p>Phone: {candidate.phone}</p>
            <a href={candidate.cvUrl} download>Download CV</a>
            <h2>Application History</h2>
            <ul>
                {candidate.applicationHistory.map((application) => (
                    <li key={application.jobId}>
                        {application.jobTitle} - {application.status}
                    </li>
                ))}
            </ul>
            <Button text="Schedule Interview" onClick={() => {/* Logic to schedule interview */}} />
        </div>
    );
};

export default CandidateProfile;