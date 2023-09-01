import { fireEvent, render, screen } from "@testing-library/react"
import Counter from "./Counter"

test('Testing 0 to be appear on screen',()=>{
render(<Counter initval={0}/>)
const v = Number(screen.getByTestId('cnumber').textContent);
expect(v).toEqual(0);
expect(v).toEqual(0);

})

test('for checking label',()=>{
    render (<Counter initval={0}/>)
    const lbl = screen.getByText("This is my counter");
    expect(lbl).toBeInTheDocument();

})

test ("for checking increment", ()=>{
    render (<Counter initval={0}/>)
    const vbefore =Number(screen.getByTestId('cnumber').textContent);
    expect (vbefore).toEqual(0);

    const btninc = screen.getByText('Increment')
    fireEvent.click(btninc);

    const vafter =Number(screen.getByTestId('cnumber').textContent);
    expect (vafter).toEqual(1);

})

test ("for checking decrement", ()=>{
    render (<Counter initval={1}/>)
    const vbefore =Number(screen.getByTestId('cnumber').textContent);
    expect (vbefore).toEqual(1);

    const btndec = screen.getByText('Decrement')
    fireEvent.click(btndec);
    
    const vafter =Number(screen.getByTestId('cnumber').textContent);
    expect (vafter).toEqual(0);
})

test ("for checking reset", ()=>{
    render (<Counter initval={1}/>)
    const vbefore =Number(screen.getByTestId('cnumber').textContent);
    expect (vbefore).toEqual(1);

    const btnreset = screen.getByText('Decrement')
    fireEvent.click(btnreset);
    
    const vafter =Number(screen.getByTestId('cnumber').textContent);
    expect (0).toEqual(0);
})