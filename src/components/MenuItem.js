import Link from "next/link";

const MenuItem = ({ title, Icon, address }) => {
  return (
    <Link href={address} className="flex items-center gap-2 hover:text-amber-400 transition-colors duration-300 cursor-pointer">
      <Icon className='text-2xl sm:hidden' /> 
      <span className="hidden sm:block uppercase">{title}</span>
    </Link>
  );
};

export default MenuItem;
