import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Wish() {
	const [list, setList] = useState([]);
	const [food, setFood] = useState("");
	
	const url = "https://8dba-2001-2d8-e610-f462-a87c-8255-756f-ea97.jp.ngrok.io/"; // backend server url

		/**해당 날짜 wishmenu 조회 */
		useEffect(() => {
			const getWish = async () => {
				try {
					const response = await axios.get(url + "wishmenu/");
					console.log(response.data);
					setList(response.data);
				} catch (e) {
					console.error(e.message);
				}
			};
			getWish();
		}, []);

		/**새로운 wishmenu POST */
		const postWish = async () => {
			try {
				const response = await axios.post(url + "wishmenu/", {
					requestMenu: food
				});
				console.log(food);
				console.log(response);
			} catch (e) {
				console.error(e.message);
			}
		}
 
		/**새로운 음식(Food) 입력 */
		const onChangeFood = (e) => {
			setFood(e.target.value);
		}

		/**새로운 아이템 추가 */
		const handleSubmit = () => {

			let newItem = {
				requestMenu: food
			}
			
			setList([...list, newItem]);
			postWish();
			
			setFood("");
		}
	
	return (
		<div className="relative mr-28 ml-5 w-2/5 h-72 bg-[#ffffff] shadow-lg rounded-xl">

			<div className="flex justify-between mx-5 mt-2">
				<span className="text-[#7C889C] text-xl font-medium">Wish</span>
				<span className="text-[#7C889C] text-sm mt-1">먹고 싶은 메뉴를 자유롭게 적어주세요.</span>
			</div>
			<hr className="my-2" />

			<div id="foodList" className="h-40 overflow-y-scroll">
				
				{list.map((data, idx) => (
					<button key={idx} className="hover:cursor-default text-[#7C889C] border-[#ebebeb] text-base border rounded-3xl px-3 text-center mr-2 mb-2 font-semibold">{data.requestMenu}</button>
				))}

			</div>

			<div className="absolute mx-5 ml-24 bottom-4">
				<input
					id="food"
					name="food"
					placeholder="Type something.."
					value={food}
					onChange={onChangeFood}
					className="border-[#ebebeb] border rounded-md w-80 px-2 mr-8 ml-7"
				/>
				<button
					type="submit"
					className="border-[#ebebeb] bg-[#ebebeb] border rounded-md w-20 text-[#7C889C] text-center"
					onClick={handleSubmit}
				>
					Submit</button>
			</div>
		</div>
	)
}
