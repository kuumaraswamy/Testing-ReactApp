import { render,screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Greeting from "./Greeting"

describe('Greeting component', () => {
    test(' renders "Hello world" as a text' , () =>{

        //Arrange
        render(<Greeting/>)
    
        //Act
        //.....nothing
    
        //Assert
        const helloWorldElement = screen.getByText('Hello world !!')
        expect(helloWorldElement).toBeInTheDocument
    })

    test('render "Good to see you"  if  button was not clicked', () => {

        render(<Greeting/>)

        const outputElement = screen.getByText('Good to see You',{exact: false})
        expect(outputElement).toBeInTheDocument

    })
    test('render "Changed..." if button was clicked', ()=>{
        //Arrange
        render(<Greeting/>)

        //Act
        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)

        //Assert
        const outputElement = screen.getByText('Changed...',{exact: false})
        expect(outputElement).toBeInTheDocument

    })

    test('does not render "Good to see you"  if the  button was  clicked',()=>{
         //Arrange
         render(<Greeting/>)

         //Act
         const buttonElement = screen.getByRole('button')
         userEvent.click(buttonElement)
 
         //Assert
         const outputElement = screen.queryByText('good to see you',{exact: false})
         expect(outputElement).toBeNull()
    })
})
