import account from "../../assets/account.png";
import favorite from "../../assets/favorite.png";
import logo from "../../assets/logo.png";
import logout from "../../assets/logout.png";
import login from "../../assets/registration.png";

import { useNavigate } from "react-router-dom";
let isLogined: boolean = false;
let isUserVolunteer: boolean = false;
let userId: number = 1;

export function Header() {
	const navigate = useNavigate();
	const handleLogoClick = () => {
		navigate("/");
	};

	return (
		<header className="bg-orange-300 px-3">
			<div className="flex justify-between items-center p-4">
				<div className="flex items-center">
					<img
						src={logo}
						alt="Логотип"
						className="h-9 w-9 filter invert cursor-pointer"
						onClick={handleLogoClick}
					/>
				</div>
				<div className="text-3xl text-white font-bold">PetFamily</div>
				<div className="flex items-center space-x-2">
					{!isUserVolunteer && (
						<div className="text-white font-bold cursor-pointer">
							<img
								src={favorite}
								alt="Избранное"
								className="h-7 w-7 filter invert"
								onClick={() => navigate("/favorites")}
							/>
						</div>
					)}
					{isLogined ? (
						<>
							<img
								src={account}
								alt="Аккаунт"
								className="h-7 w-7 mx-3 filter invert cursor-pointer"
								onClick={() => navigate(`/profile/${userId}`)}
							/>
							<img
								src={logout}
								alt="Выход"
								className="h-7 w-7 filter invert cursor-pointer"
								onClick={() => {
									// вызывать метод для выхода
								}}
							/>
						</>
					) : (
						<img
							src={login}
							alt="Регистрация"
							className="h-7 w-7 filter invert cursor-pointer"
							onClick={() => navigate("/login")}
						/>
					)}
				</div>
			</div>
		</header>
	);
}
