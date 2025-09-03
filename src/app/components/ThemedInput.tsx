import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

export function ThemedInput(props: InputProps) {
  return <input className='bg-[#F0EFFF] w-96 h-14 pl-4 text-[#A7A3FF] placeholder:text-[#A7A3FF] outline-[#9a95fa] rounded-lg placeholder:font-medium placeholder:text-sm hover:' {...props}></input>
}