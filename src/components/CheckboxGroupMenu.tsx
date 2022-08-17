import { Checkboxgroup } from "./checkboxGroup";

export function CheckboxGroupMenu() {
    return (
        <>
            <Checkboxgroup
                title='Choose your favorite Candy?'
                name="candy"
                options={['Haribo', 'Caramel', 'Skittles']} />

            <Checkboxgroup
                title='Chosse your favorite Pasta?'
                name="pasta"
                options={['Carbonara', 'Amatriciana', 'Ravioli', 'Agliossss']} />
        </>
    )
}