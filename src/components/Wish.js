import React, { useState } from 'react'

export default function Wish() {
	const [list, setList] = useState(["삼겹살", "고구마"]);
	const [food, setFood] = useState("");
	
		/**새로운 음식(Food) 입력 */
		const onChangeFood = (e) => {
			setFood(e.target.value);
		}

		/**새로운 아이템 추가 */
		const handleSubmit = () => {
			
			let newItem = food;

			setList([...list, newItem]);
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
					<button key={idx} className="hover:cursor-default text-[#7C889C] border-[#ebebeb] text-base border rounded-3xl px-3 text-center mr-2 mb-2 font-semibold">{data}</button>
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
