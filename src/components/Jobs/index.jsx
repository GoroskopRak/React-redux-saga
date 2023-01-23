import { JOBS } from 'modules/api/endpoints';
import React, {useEffect} from 'react';
import useFetch from 'hooks/useFetch';
import Navigation from 'components/common/Navigation';

export default function Jobs() {

    const {response, performFetch} = useFetch(JOBS);
    const {loading, data} = response;
   
    useEffect(() => {
        performFetch();
    }, [performFetch]);

    console.log(response);

    return (
        <Navigation loading={loading} services={data} title='react redux-saga app'/>
    )
}