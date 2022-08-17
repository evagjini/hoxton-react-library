type Props = {
    title: string
    name: string
    options: string[]

}

export function Checkboxgroup({ title, name, options }: Props) {
    return (
        <div>
            <h3>{title}</h3>
            {options.map(option => (
                <label>
                    {option}
                    < input type='checkbox' name={name} value={option.toLowerCase()} />
                </label>
            ))}

        </div>
    )
}