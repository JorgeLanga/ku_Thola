import React from 'react';
import { useParams } from 'react-router-dom';
import Button from '../components/Button';

const JobDetails = () => {
    const { jobId } = useParams();
    const [job, setJob] = React.useState(null);

    React.useEffect(() => {
        // Fetch job details from an API or data source using jobId
        const fetchJobDetails = async () => {
            const response = await fetch(`/api/jobs/${jobId}`);
            const data = await response.json();
            setJob(data);
        };

        fetchJobDetails();
    }, [jobId]);

    if (!job) {
        return <div>Loading...</div>;
    }

    return (
        <div className="job-details">
            <h1>{job.title}</h1>
            <p>{job.description}</p>
            <h3>Requisitos:</h3>
            <ul>
                {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                ))}
            </ul>
            <h3>Local:</h3>
            <p>{job.location}</p>
            {job.benefits && (
                <>
                    <h3>Benefícios:</h3>
                    <p>{job.benefits}</p>
                </>
            )}
            <Button text="Candidatar-se" onClick={() => {/* Handle application submission */}} />
        </div>
    );
};

export default JobDetails;