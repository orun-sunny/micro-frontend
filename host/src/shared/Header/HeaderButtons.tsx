import Button from "../Button";

const HeaderButtons = ({ className }: { className?: string }) => {
  return (
    <div className={`flex gap-4 ${className}`}>
      <Button variant="sign" className="max-xl:text-xs rounded">
        Log In
      </Button>
      <Button variant="secondary" className="rounded-md sm:rounded-lg">
        Sign Up
      </Button>
    </div>
  );
};

export default HeaderButtons;
