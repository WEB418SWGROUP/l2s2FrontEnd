import React, { useState, useEffect } from "react";
import axios from "axios";



const GetPostRequirements = () => {

    const [PostRequirement, SetPostRequirement] = useState([]);
    const loadRequirements = async () => {
        try {

            const response = await axios.get("http://localhost:9000/postrequirement/getPostRequirements");
            
            console.log(response.data);
            //SetPostRequirement(response.data)


        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        loadRequirements();
    }, []);

    return(
        <h1>Dinusha</h1>
    );

     
};

export default GetPostRequirements;