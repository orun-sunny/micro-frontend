import Button from "host/Button";

const HeaderActionButtons = ({ className }: { className?: string }) => {
  return (
    <div className={`flex  xl:ms-auto items-center gap-4 ${className}`}>
      <Button className="max-xl:text-xs rounded bg-[#19525A] text-white">
        Sign Up
      </Button>
      <Button variant="sign" className="max-xl:text-xs rounded ">
        Sign In
      </Button>
    </div>
  );
};

export default HeaderActionButtons;
