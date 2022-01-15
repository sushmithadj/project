import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import RawJson from "./FinalApp/components/RawJson";

cleanup()
test('test to render the rawJson',()=>{
    render(<RawJson></RawJson>);
})

