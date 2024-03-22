import Link from "next/link";
import appData from "@data/app.json";

const DefaultFooter = ( { extraClass } ) => {
  return (
    <>
    {/* footer */}
    <footer className="mil-fw">
      <p className="mil-light-soft">{appData.footer.copy}</p>
      <p className="mil-light-soft" dangerouslySetInnerHTML={{__html : appData.footer.dev}} />
    </footer>
    {/* footer end */}
    </>
  );
};
export default DefaultFooter;
