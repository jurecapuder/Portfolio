import { github, linkedin, linktree } from "../assets";

const Footer = () => {
  return (
    <nav className='sm:px-16 px-6 w-full flex flex-col items-center py-5 z-20 mt-20 border-t'>
      <p className='text-white text-[18px] font-bold flex flex-row justify-center items-center'>
        © Jure Capuder, 2023
      </p>
      <div className='flex gap-4 items-center pt-4'>
        <a rel="noreferrer" target='_blank' href='https://www.github.com/jurecapuder'>
          <img
            src={github}
            className="w-[120px] h-[120px] object-cover"
          />
        </a>
        <a rel="noreferrer" target='_blank' href='https://www.linkedin.com/in/jurecapuder/'>
          <img
            src={linkedin}
            className="w-[100px] h-[100px] object-cover rounded-2xl"
          />
        </a>
        <a rel="noreferrer" target='_blank' href='https://linktr.ee/jurecapuder'>
          <img
            src={linktree}
            className="w-[100px] h-[100px] object-cover rounded-2xl"
          />
        </a>
      </div>
    </nav>
  )
}

export default Footer