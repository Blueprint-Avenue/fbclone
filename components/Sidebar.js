import { useSession } from "next-auth/react";
import React from "react";
import {
	ChevronDownIcon,
	ShoppingBagIcon,
	UserGroupIcon,
} from "@heroicons/react/outline";
import {
	CalendarIcon,
	ClockIcon,
	DesktopComputerIcon,
	UsersIcon,
} from "@heroicons/react/solid";
import SidebarRow from "./SidebarRow";
import MsPacMan from "../asset/MsPacMan.webp";

function Sidebar() {
	// const [session, loading] = useSession();
	return (
		<div className="p-2 mt-5 maw-w-[600px] xl:min-w-[300px]">
			<SidebarRow src={MsPacMan} title="Samiya McIntosh" />
			{/* {session.user.image}{session.user.name}  to get image and name from api */}
			<SidebarRow Icon={UsersIcon} title="Friends" />
			<SidebarRow Icon={UserGroupIcon} title="Groups" />
			<SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
			<SidebarRow Icon={DesktopComputerIcon} title="Watch" />
			<SidebarRow Icon={CalendarIcon} title="Events" />
			<SidebarRow Icon={ClockIcon} title="Memories" />
			<SidebarRow Icon={ChevronDownIcon} title="See More" />
		</div>
	);
}

export default Sidebar;
