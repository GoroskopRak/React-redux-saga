import ProfileGrid from 'components/common/ProfileGrid';
import { EMPLOYEES } from 'modules/api/endpoints';
import React, {useEffect, useMemo} from 'react';
import useFetch from 'hooks/useFetch';
import { useSelector } from 'react-redux';
import {selectAppState} from 'modules/app/selectors';

export default function Employees() {
    const {response, performFetch} = useFetch(EMPLOYEES);
    const {loading, data} = response;
    const appState = useSelector(selectAppState);
    const preparedData = useMemo(() =>{
        if (!Array.isArray(data)) {
            return [];
        }
        if (!appState.selectedJob || appState.selectedJob === "All") {
            return data;
        }
        return data.filter(employee => employee.job === appState.selectedJob)
    },[data, appState.selectedJob])
   
    useEffect(() => {
        performFetch();
    }, [performFetch]);

    return (
        <ProfileGrid loading={loading} profiles={preparedData}/>
    )
}