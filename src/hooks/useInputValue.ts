import { ChangeEvent, useState } from 'react'

const useInputValue = (initialValue: string | number) =>{
  const [value, setValue] = useState(initialValue);
  const onChange = (e:ChangeEvent) => {
    setValue((e.target as HTMLInputElement).value)
    console.log((e.target as HTMLInputElement).value)
}
  return { value, onChange }
}

export { useInputValue }
