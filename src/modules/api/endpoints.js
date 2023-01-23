export const JOBS = 'jobs';
export const EMPLOYEES = 'employees';

const ENDPOINTS = {
    [JOBS]: {
        urn: '/jobs',
        method: 'GET'
    },
    [EMPLOYEES]: {
        urn: '/employees',
        method: 'GET'
    }
}

export default ENDPOINTS;