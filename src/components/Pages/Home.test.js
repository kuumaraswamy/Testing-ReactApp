import { render,screen } from "@testing-library/react"
import Home from './Home'




test(' renders "Welcome Home" as a text' , () =>{

    //Arrange
    render(<Home/>)

    //Act
    //.....nothing

    //Assert
    const welcomeElement = screen.getByText('welcome Home',{exact: false})
    expect(welcomeElement).toBeInTheDocument()
})