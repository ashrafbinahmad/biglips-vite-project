import { FaArrowRight } from 'react-icons/fa'

export default function RoundGoButton() {
  return (
    <button className='w-10 h-10 border border-accent rounded-full flex items-center justify-center  text-accent cursor-pointer hover:bg-white hover:border-2'>
        <FaArrowRight />
    </button>
  )
}
