import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Cards() {

	const [menu, setMenu] = useState([
		{
			menuOne: "menu1",
			menuTwo: "menu2",
			menuThr: "menu3",
			menuFou: "menu4",
			menuFiv: "menu5",
		},
		{
			menuOne: "menu1",
			menuTwo: "menu2",
			menuThr: "menu3",
			menuFou: "menu4",
			menuFiv: "menu5",
		},
		{
			menuOne: "menu1",
			menuTwo: "menu2",
			menuThr: "menu3",
			menuFou: "menu4",
			menuFiv: "menu5",
		},
		{
			menuOne: "menu1",
			menuTwo: "menu2",
			menuThr: "menu3",
			menuFou: "menu4",
			menuFiv: "menu5",
		},
		{
			menuOne: "menu1",
			menuTwo: "menu2",
			menuThr: "menu3",
			menuFou: "menu4",
			menuFiv: "menu5",
		},
	]);

	const url = "https://8dba-2001-2d8-e610-f462-a87c-8255-756f-ea97.jp.ngrok.io/"; // backend server url

	/**주간 메뉴 조회 */
	useEffect(() => {
		const getMenu = async () => {
			try {
				const response = await axios.get(url + "menu/");
				console.log(response.data);
				setMenu(response.data);
			} catch (e) {
				console.error(e.message);
			} finally {
				console.log("call Ajax");
			}
		};
		getMenu();
	}, []);
	
	return (
		<>
			<div className="flex mx-28 mt-7">

				<div
					id="Mon"
					className="bg-[url('./imgs/bg1.png')] bg-contain bg-center bg-no-repeat w-56 h-80 mx-3">
					<p className="mt-3 text-xs text-[#BABFC8]">Mon.</p>
					<button className="hover:cursor-default font-medium mt-2 bg-[#4DC591] rounded-3xl w-44 py-1 text-sm text-[#FFFFFF]">{menu[0].menuOne ? menu[0].menuOne : "loading.."}</button>
					<div className="menu mt-5 mb-14 text-[#FFFFFF] text-base">
						<p>{menu[0].menuOne}</p>
						<p>{menu[0].menuTwo}</p>
						<p>{menu[0].menuThr}</p>
						<p>{menu[0].menuFou}</p>
						<p>{menu[0].menuFiv}</p>
					</div>
					<p className="text-[#BABFC8] text-sm">{menu[0].menuCal} Kcal</p>
				</div>
 
				<div
					id="Tue"
					className="bg-[url('./imgs/bg2.png')] bg-contain bg-center bg-no-repeat w-56 h-80 mx-3">
					<p className="mt-3 text-xs text-[#BABFC8]">Tue.</p>
					<button className="hover:cursor-default font-medium mt-2 bg-[#4DC591] rounded-3xl w-44 py-1 text-sm text-[#FFFFFF]">{menu[1].menuOne}</button>
					<div className="menu mt-5 mb-14 text-[#FFFFFF] text-base">
						<p>{menu[1].menuOne}</p>
						<p>{menu[1].menuTwo}</p>
						<p>{menu[1].menuThr}</p>
						<p>{menu[1].menuFou}</p>
						<p>{menu[1].menuFiv}</p>
					</div>
					<p className="text-[#BABFC8] text-sm">{menu[1].menuCal} Kcal</p>
				</div>

				<div
					id="Wed"
					className="bg-[url('./imgs/bg3.png')] bg-contain bg-center bg-no-repeat w-56 h-80 mx-3">
					<p className="mt-3 text-xs text-[#BABFC8]">Wed.</p>
					<button className="hover:cursor-default font-medium mt-2 bg-[#4DC591] rounded-3xl w-44 py-1 text-sm text-[#FFFFFF]">{menu[2].menuOne}</button>
					<div className="menu mt-5 mb-14 text-[#FFFFFF] text-base">
						<p>{menu[2].menuOne}</p>
						<p>{menu[2].menuTwo}</p>
						<p>{menu[2].menuThr}</p>
						<p>{menu[2].menuFou}</p>
						<p>{menu[2].menuFiv}</p>
					</div>
					<p className="text-[#BABFC8] text-sm">{menu[2].menuCal} Kcal</p>
				</div>

				<div
					id="Thu"
					className="bg-[url('./imgs/bg4.png')] bg-contain bg-center bg-no-repeat w-56 h-80 mx-3">
					<p className="mt-3 text-xs text-[#BABFC8]">Thu.</p>
					<button className="hover:cursor-default font-medium mt-2 bg-[#4DC591] rounded-3xl w-44 py-1 text-sm text-[#FFFFFF]">{menu[3].menuOne}</button>
					<div className="menu mt-5 mb-14 text-[#FFFFFF] text-base">
						<p>{menu[3].menuOne}</p>
						<p>{menu[3].menuTwo}</p>
						<p>{menu[3].menuThr}</p>
						<p>{menu[3].menuFou}</p>
						<p>{menu[3].menuFiv}</p>
					</div>
					<p className="text-[#BABFC8] text-sm">{menu[3].menuCal} Kcal</p>
				</div>

				<div
					id="Fri"
					className="bg-[url('./imgs/bg5.png')] bg-contain bg-center bg-no-repeat w-56 h-80 mx-3">
					<p className="mt-3 text-xs text-[#BABFC8]">Fri.</p>
					<button className="hover:cursor-default font-medium mt-2 bg-[#4DC591] rounded-3xl w-44 py-1 text-sm text-[#FFFFFF]">{menu[4].menuOne}</button>
					<div className="menu mt-5 mb-14 text-[#FFFFFF] text-base">
						<p>{menu[4].menuOne}</p>
						<p>{menu[4].menuTwo}</p>
						<p>{menu[4].menuThr}</p>
						<p>{menu[4].menuFou}</p>
						<p>{menu[4].menuFiv}</p>
					</div>
					<p className="text-[#BABFC8] text-sm">{menu[4].menuCal} Kcal</p>
				</div>
			</div>
		</>
	)
}
