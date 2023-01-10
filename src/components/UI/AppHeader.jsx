import SearchInput from "@/components/Inputs/SearchInput";

const AppHeader = (props) => {
  return (
    <header className="top-0 left-0 grid w-full grid-cols-3 gap-8 px-8 text-white h-28 bg-grayCool800">
      <section className="flex-ic-jb">
        <div className="flex-ic-jb cursor-pointer">
          <div className="rounded-full w-14 h-14 bg-primary600"></div>
          <h4 className="ml-4 font-bold text-white company-name text-16">
            Company
          </h4>
        </div>
      </section>

      <section className="flex-ic-je">
        <SearchInput />
      </section>

      <section className="flex-ic-jend cursor-pointer">
        <div className="flex flex-col items- text-white user-greeting">
          <p className="font-bold greeting text-14">Welcome</p>
          <p
            data-test="current-username"
            className="font-bold username text-14"
          >
            Username
          </p>
        </div>
      </section>
    </header>
  );
};

export default AppHeader;
