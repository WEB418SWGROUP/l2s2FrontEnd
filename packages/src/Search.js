import React from "react";
import {Form,FormControl,Button, Stack} from 'react-bootstrap'

const Search = () => {
    return (
        <>
        <div className="p">
        <Form className="d-flex">
        <Stack direction="horizontal" gap={3} className="mx-auto" >
        <Form.Select aria-label="Default select example" >
        <option>Service categories</option>
        <option value="1">Clinical</option>
        <option value="2">IT Service</option>
        <option value="3">Banking</option>
        </Form.Select>
        <FormControl
          type="search"
          placeholder="Location"
          className="d-flex"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
        </Stack>
      </Form>
      </div>
        </>
    )
}

export default Search;