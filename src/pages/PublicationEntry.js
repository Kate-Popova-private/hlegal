import React from 'react';
import PublicationsList from "../components/publicationsList";

const PublicationEntry = () => {
    return (
        <>
            <PublicationsList title = "Recommended" link={true}></PublicationsList>
        </>
    );
};

export default PublicationEntry;