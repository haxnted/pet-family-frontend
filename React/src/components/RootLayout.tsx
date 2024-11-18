import { Outlet } from "react-router-dom";
import { Footer } from "../components/footer";

import MainNavBar from "../components/main-menu";
import { Header } from "./header";

export function RootLayout() {
	return (
		<>
			<Header />
			<MainNavBar />
			<Outlet />
			<Footer />
		</>
	);
}
