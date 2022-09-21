import React, { useState } from 'react'

export default function Comments() {
	const [list, setList] = useState([
		{
			name: "태림",
			comment: "엔지니어반이 반찬 다 먹었어요😤"
		},
		{
			name: "춘식이🍠",
			comment: "오늘 밥 너무 맛있어요 ><"
		}
	]);

	const [name, setName] = useState("");
	const [comment, setComment] = useState("");

	/**새로운 이름(name) 입력 */
	const onChangeName = (e) => {
		setName(e.target.value);
	}

	/**새로운 코멘트(comment) 입력 */
	const onChangeComment = (e) => {
		setComment(e.target.value);
	}

	/**새로운 아이템(name, comment) 추가 */
	const handleSubmit = () => {

		let newItem = {
			name: name,
			comment: comment
		}

		setList([...list, newItem]);
		setName("");
		setComment("");
	}

	return (
		<div className="relative ml-28 mr-5 w-2/5 h-72 bg-[#ffffff] shadow-lg rounded-xl">

			<div className="flex justify-between mx-5 mt-2">
				<span className="text-[#7C889C] text-xl font-medium">Comments</span>
				<span className="text-[#7C889C] text-sm mt-1">09/28/2022</span>
			</div>
			<hr className="my-2" />

			<div id="commentList" className="h-40 overflow-y-scroll">

				{list.map((data, idx) => (
					<div className="mx-5 mb-2 text-left text-[#7C889C]" key={idx}>
						<button className="hover:cursor-default border-[#ebebeb] text-base border rounded-md w-24 text-center mr-2 font-semibold">{data.name}</button>
						<button className="mr-2">{data.comment}</button>
					</div>
				))}
				
			</div>

			<div className="absolute mx-5 bottom-4">
				<input
					id="name"
					name="name"
					placeholder="name"
					value={name}
					onChange={onChangeName}
					className="border-[#ebebeb] border rounded-md w-24 text-center mr-2"
				/>
				<input
					id="comment"
					name="comment"
					placeholder="Type something.."
					value={comment}
					onChange={onChangeComment}
					className="border-[#ebebeb] border rounded-md w-80 px-2 mr-8"
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
