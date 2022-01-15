import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import UserLogin from './Quiz-App/components/UserLogin'
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer'


cleanup()
test('should rednder the login',()=>{
    render(<UserLogin></UserLogin>);
    const value = screen.getByText("start");
    expect(value).toBeInTheDocument()
    

    
 
})

describe("",()=>{
    test("test on rendering  input HomePage by sending dummyprop ", () => {
        render(
         
            <UserLogin
              userName={"sushma"}
              selectedLang={"english"}
            ></UserLogin>
        
        );
    
        expect(screen.getByDisplayValue("sushma")).toBeInTheDocument();
        expect(screen.getByDisplayValue("english")).toBeInTheDocument();

        const tree = renderer
      .create(
        
          <UserLogin
           userName={"varun"}
           selectedLang={"english"}
          ></UserLogin>
        
      )
      .toJSON();
    console.log("::", tree);
    expect(tree).toMatchSnapshot();
})
});


