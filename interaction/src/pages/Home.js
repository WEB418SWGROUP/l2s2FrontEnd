import React from "react";
import {Stack} from 'react-bootstrap'
import Navbaritem from "../Navbar";
import Search  from "../Search";
const Home = () => {
    return (
        <>
        <div>
          <Stack gap={5}>
        <Navbaritem/>
          <h1 className="mx-auto">Are you looking for nearby service providers?</h1>
        <Search/>
        </Stack>
        </div>
       
        </>
    )
}

export default Home;