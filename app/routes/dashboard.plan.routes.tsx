import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function PlanRoutes() {
    const [userRoutes, setUserRoutes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    console.log('In User Planned Routes')

    useEffect(() => {
        async function fetchRoutes() {
            try {
                const response = await axios.get('http://127.0.0.1:5000/my-gpx-files', {
                    withCredentials: true
                });
                setUserRoutes(response.data);
            } catch (error) {
                console.error('Error fetching user routes:', error);
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchRoutes();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching routes</div>;
    }

    return (
        <div>
            <div className="text-2xl text-custom-text">PlanRoutes</div>
            {userRoutes.map(route => (
                <div key={route.id}>
                    <h1>{route.filename}</h1>
                    <p>{route.is_public}</p>
                </div>
            ))}
        </div>
    );
}