import Image from "next/image";
import React from "react";

function Header() {
	return (
		<div>
			{/* Header left */}
			<div>
				<Image
					src="https://links.papareact.com/5me"
					width={40}
					height={40}
					layout="fixed"
				/>
			</div>

			{/* Center */}

			{/* Right */}
		</div>
	);
}

export default Header;
