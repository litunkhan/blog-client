

const Footer = () => {
    return (
        <div className="flex w-full px-8 mx-auto flex-col justify-between h-[40px] pt-9 items-center md:flex-row border-t-2">
            <h2 className="font-bold text-3xl uppercase">Blog</h2>
            <p>Copy-Right {new Date().getFullYear()}</p>
            <p>litunkhan6@gmail.com</p>
        </div>
    );
};

export default Footer;