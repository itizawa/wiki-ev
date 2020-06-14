import Link from "next/link";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { useSession } from "next-auth/client";

function PersonalDropdown() {
  const [session, loading] = useSession();
  const { user } = session;
  console.log(user);

  return (
    <UncontrolledDropdown>
      <DropdownToggle caret color="info">
        <img height="24px" class="rounded-circle bg-white" src={user.image} />
        {user.name}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>
          <Link href="/me">
            <a className="text-dark text-decoration-none">My page</a>
          </Link>
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem>
          <Link href="/api/auth/signout">
            <a className="text-dark text-decoration-none">Sign out</a>
          </Link>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}

export default PersonalDropdown;
